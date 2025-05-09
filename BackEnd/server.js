require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { neon } = require("@neondatabase/serverless");
const bcrypt = require("bcrypt");
const multer =require('multer')
const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS
app.use(cors());
app.use(express.json());
// PostgreSQL client
const sql = neon(process.env.DATABASE_URL);

// Test route
app.get("/", async (req, res) => {
    try {
        const result = await sql`SELECT version()`;
        const { version } = result[0];
        res.status(200).send(`PostgreSQL version: ${version}`);
    } catch (error) {
        console.error("Database error:", error);
        res.status(500).send(`Database error: ${error.message}`);
    }
});

// Get all AOF names
app.get("/aofs", async (req, res) => {
    try {
        const result = await sql`SELECT * FROM aof`;
        res.status(200).json(result);
    } catch (error) {
        console.error("Error fetching AOFs:", error);
        res.status(500).send(`Error fetching AOFs: ${error.message}`);
    }
});

// Get all products by AOF name
app.get("/products/:a_name", async (req, res) => {
    const { a_name } = req.params;

    try {
        const result = await sql`
            SELECT p.*
            FROM product p
            INNER JOIN aof a ON p.aof_id = a.id
            WHERE a.a_name = ${a_name}
        `;
        res.status(200).json(result);
    } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).send(`Error fetching products: ${error.message}`);
    }
});
app.post("/contact", async (req, res) => {
    console.log("body:-",req.body);
    const { name, email, contact, subject, comment } = req.body;

    // Check if all fields are provided
    if (!name || !email || !contact || !subject || !comment) {
        return res.status(400).json({ error: "All fields are required." });
    }

    try {
        // Insert form data into a 'contact' table (You can create this table in your database)
        const result = await sql`
            INSERT INTO contact (name, email, contact, subject, comment)
            VALUES (${name}, ${email}, ${contact}, ${subject}, ${comment})
                RETURNING id;
        `;

        // Respond with success message
        res.status(200).json({
            message: "Form submitted successfully!",
            data: result[0],
        });
    } catch (error) {
        console.error("Error inserting contact form data:", error);
        res.status(500).json({ error: "There was an error processing the form." });
    }
});

app.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        const result = await sql`SELECT * FROM users WHERE email = ${email}`;

        if (result.length === 0) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        const user = result[0];
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        res.status(200).json({ message: "Login successful", user });
    } catch (error) {
        console.error("Error during login:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});
app.post('/signup', async (req, res) => {
    const { name, email, password } = req.body;

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/;
    if (!passwordRegex.test(password)) {
        return res.status(400).json({ message: "Invalid password format." });
    }

    try {
        // Check if user exists
        const userExists = await sql`SELECT * FROM users WHERE email = ${email}`;
        if (userExists.length > 0) {
            return res.status(400).json({ message: "Email already registered." });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        await sql`
            INSERT INTO users (name, email, password)
            VALUES (${name}, ${email}, ${hashedPassword})
        `;

        res.status(200).json({ message: "User created successfully." });
    } catch (error) {
        console.error("Signup error:", error);
        res.status(500).json({ message: "Internal server error." });
    }
});

const storage = multer.memoryStorage();
const upload = multer({
    storage,
    limits: { fileSize: 3 * 1024 * 1024 }, // 3 MB max
    fileFilter: (req, file, cb) => {
        if (file.mimetype === 'application/pdf') {
            cb(null, true);
        } else {
            cb(new Error('Only PDF files are allowed'));
        }
    }
}).single('resume');

// POST /apply route
app.post('/apply', (req, res) => {
    upload(req, res, async function (err) {
        if (err instanceof multer.MulterError || err) {
            return res.status(400).json({ message: err.message });
        }

        const { fullName, email, contact, position, company, expectedCTC } = req.body;
        const resumeBuffer = req.file?.buffer;
        const resumeName = req.file?.originalname;

        if (!resumeBuffer) {
            return res.status(400).json({ message: 'Resume is required.' });
        }

        try {
            await sql`
        INSERT INTO applications (
          full_name, email, contact, position, company, expected_ctc, resume_name, resume_file
        )
        VALUES (
          ${fullName}, ${email}, ${contact}, ${position}, ${company}, ${expectedCTC},
          ${resumeName}, ${resumeBuffer}
        )
      `;
            console.log('Application submitted successfully.');
            res.status(200).json({ message: 'Application submitted successfully.' });
        } catch (error) {
            console.error('DB Insert Error:', error);
            res.status(500).json({ message: 'Internal server error.' });
        }
    });
});

const productUpload = multer({
    storage,
    limits: { fileSize: 3 * 1024 * 1024 },
    fileFilter: (req, file, cb) => {
        if (file.mimetype.startsWith('image/')) {
            cb(null, true);
        } else {
            cb(new Error('Only image files are allowed'));
        }
    }
}).single('image');

app.post('/products', (req, res) => {
    productUpload(req, res, async function (err) {
        if (err instanceof multer.MulterError || err) {
            return res.status(400).json({ message: err.message });
        }
        console.log("res:-",req.body);
        const {
            name,
            description,
            speciality,
            segment,
            presentation,
            composition,
            a_id // aof_id
        } = req.body;
        const segment_presentation = segment + ' - ' + presentation;
        const imageBuffer = req.file?.buffer;

        if (!imageBuffer) {
            return res.status(400).json({ message: 'Image is required.' });
        }

        try {
            await sql`
                INSERT INTO product (
                    aof_id, name, description, speciality,
                    segment_presentation, composition, presentation,
                    image
                )
                VALUES (
                           ${a_id}, ${name}, ${description}, ${speciality},
                           ${segment_presentation}, ${composition}, ${presentation},
                           ${imageBuffer} -- if storing the image as binary
                       )
            `;


            console.log('Product saved successfully.');
            res.status(201).json({ message: 'Product saved successfully.' });
        } catch (error) {
            console.error('DB Insert Error:', error);
            res.status(500).json({ message: 'Internal server error.' });
        }
    });
});
app.post("/addAof", async (req, res) => {
    const { a_name, description } = req.body;

    // Validate input
    if (!a_name || a_name.trim() === '') {
        return res.status(400).json({ message: "Area of Focus name is required" });
    }

    try {
        // Check if AOF with the same name already exists
        const existingAof = await sql`SELECT * FROM aof WHERE a_name = ${a_name}`;
        if (existingAof.length > 0) {
            return res.status(409).json({ message: "Area of Focus with this name already exists" });
        }

        // Insert the new AOF
        const result = await sql`
            INSERT INTO aof (a_name, description)
            VALUES (${a_name}, ${description || null})
            RETURNING id, a_name, description
        `;

        // Return the newly created AOF data
        res.status(201).json(result[0]);
    } catch (error) {
        console.error("Error adding AOF:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});
// GET /api/applications
app.get('/api/applications', async (req, res) => {
    const result = await sql`SELECT id, full_name, email, contact, position, company, expected_ctc, resume_name FROM applications`;
    console.log("crr re:-",result)
    res.json(result); // Ensure this returns { rows: [...] }
});

app.get('/api/applications/resume/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const result = await sql`
            SELECT resume_name, resume_file FROM applications WHERE id = ${id}
        `;

        if (result.length === 0) {
            return res.status(404).json({ message: 'Resume not found' });
        }

        const { resume_name, resume_file } = result[0]; // ✅ Corrected

        res.setHeader('Content-Disposition', `attachment; filename="${resume_name}"`);
        res.setHeader('Content-Type', 'application/pdf'); // or 'application/octet-stream' for generic
        res.send(resume_file); // ✅ This works if resume_file is a Buffer
    } catch (error) {
        console.error('Resume download error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});
app.delete('/api/applications/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await sql`DELETE FROM applications WHERE id = ${id}`;
        res.status(200).json({ message: 'Application deleted successfully' });
    } catch (error) {
        console.error('Error deleting application:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});
app.delete('/api/contactus/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await sql`DELETE FROM contact WHERE id = ${id}`;
        res.status(200).json({ message: 'Contact info deleted successfully' });
    } catch (error) {
        console.error('Error deleting application:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});
app.get('/api/admin/contactus',async (req, res) => {
    try{
        const result = await sql`SELECT id,name ,email,contact,subject,comment FROM contact`;
        res.status(200).json(result);
    }catch (error) {
        console.error('Resume download error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
})

// Configure multer for image uploads
const doctorUpload = multer({
    storage: multer.memoryStorage(),
    limits: { fileSize: 3 * 1024 * 1024 }, // 3MB limit
    fileFilter: (req, file, cb) => {
        if (file.mimetype.startsWith('image/')) {
            cb(null, true);
        } else {
            cb(new Error('Only image files are allowed'));
        }
    }
}).single('image');

// Add Doctor - POST endpoint
app.post('/api/addDoctor', (req, res) => {
    doctorUpload(req, res, async (err) => {
        if (err) {
            return res.status(400).json({ message: err.message });
        }

        const { name, title, description } = req.body;
        console.log(res.body)
        // Validate required fields
        if (!name || !title || !description) {
            return res.status(400).json({ message: 'Name, title and description are required' });
        }

        const image = req.file?.buffer;
        const imageType = req.file?.mimetype;

        if (!image) {
            return res.status(400).json({ message: 'Image is required' });
        }

        try {
            await sql`
                INSERT INTO doctor (dr_name, speciality, description, image)
                VALUES (${name}, ${title}, ${description}, ${image});
            `;
            res.status(201).json({ message: 'Doctor added successfully' });
        } catch (error) {
            console.error("Error inserting doctor:", error);
            res.status(500).json({ message: 'Internal server error' });
        }
    });
});

// Get Doctor List - GET endpoint
app.get('/api/DoctorList', async (req, res) => {
    try {
        const doctors = await sql`SELECT id, dr_name, speciality, description, image FROM doctor`;

        // Convert image buffer to base64 string with proper mime type
        const dataWithImageUrl = doctors.map(doc => {
            // Create a base64 string from the buffer
            let imageData = '';
            if (doc.image) {
                // Convert binary buffer to base64 string
                const base64Image = doc.image.toString('base64');
                // Create a data URL with the proper MIME type
                imageData = `data:${'image/jpeg'};base64,${base64Image}`;
            }

            return {
                id: doc.id,
                name: doc.dr_name,
                title: doc.speciality,
                description: doc.description,
                image: imageData
            };
        });

        res.json(dataWithImageUrl);
    } catch (err) {
        console.error("Error fetching doctor list:", err);
        res.status(500).json({ message: "Internal server error" });
    }
});

// Delete Doctor - DELETE endpoint
app.delete('/api/deleteDoctor/:id', async (req, res) => {
    const { id } = req.params;
    console.log("delte:-",id);
    if (!id || isNaN(parseInt(id))) {
        return res.status(400).json({ message: "Invalid doctor ID" });
    }

    try {
        await sql`DELETE FROM doctor WHERE id = ${id}`;
        res.json({ message: "Doctor deleted successfully" });
    } catch (err) {
        console.error("Error deleting doctor:", err);
        res.status(500).json({ message: "Internal server error" });
    }
});

// Update Doctor - PUT endpoint
app.put('/api/updateDoctor/:id', (req, res) => {
    doctorUpload(req, res, async (err) => {
        if (err) {
            return res.status(400).json({ message: err.message });
        }
console.log("body",req.body)
        const { id } = req.params;
        const { name, title, description } = req.body;
        
        // Validate required fields
        if (!name || !title || !description) {
            return res.status(400).json({ message: 'Name, title and description are required' });
        }

        try {
            // Check if doctor exists
            const doctorExists = await sql`SELECT id FROM doctor WHERE id = ${id}`;
            if (doctorExists.length === 0) {
                return res.status(404).json({ message: 'Doctor not found' });
            }

            // If image is provided, update with new image
            if (req.file) {
                // Optimize image buffer handling
                const image = req.file.buffer;
                
                // Use a single SQL query with conditional logic
                await sql`
                    UPDATE doctor 
                    SET dr_name = ${name}, 
                        speciality = ${title}, 
                        description = ${description}, 
                        image = ${image}
                    WHERE id = ${id}
                `;
            } else {
                // Otherwise, update without changing the image
                await sql`
                    UPDATE doctor 
                    SET dr_name = ${name}, 
                        speciality = ${title}, 
                        description = ${description}
                    WHERE id = ${id}
                `;
            }

            // Return success immediately without waiting for additional processing
            res.status(200).json({ message: 'Doctor updated successfully' });
        } catch (error) {
            console.error("Error updating doctor:", error);
            res.status(500).json({ message: 'Internal server error' });
        }
    });
});

// Configure multer for blog image uploads
const blogUpload = multer({
    storage: multer.memoryStorage(),
    limits: { fileSize: 3 * 1024 * 1024 }, // 3MB limit
    fileFilter: (req, file, cb) => {
        if (file.mimetype.startsWith('image/')) {
            cb(null, true);
        } else {
            cb(new Error('Only image files are allowed'));
        }
    }
}).single('image');

// Create a new blog post
app.post('/api/blogs', (req, res) => {
    blogUpload(req, res, async (err) => {
        if (err) {
            return res.status(400).json({ message: err.message });
        }

        const { title, content, author, category } = req.body;
        
        // Validate required fields
        if (!title || !content) {
            return res.status(400).json({ message: 'Title and content are required' });
        }

        const image = req.file?.buffer;

        if (!image) {
            return res.status(400).json({ message: 'Featured image is required' });
        }

        try {
            const result = await sql`
                INSERT INTO blogs (title, content, author, category, image, created_at)
                VALUES (${title}, ${content}, ${author || null}, ${category || null}, ${image}, NOW())
                RETURNING id;
            `;
            
            res.status(201).json({ 
                message: 'Blog post created successfully',
                id: result[0].id
            });
        } catch (error) {
            console.error("Error creating blog post:", error);
            res.status(500).json({ message: 'Internal server error' });
        }
    });
});

// Get all blog posts
app.get('/api/blogs', async (req, res) => {
    try {
        const blogs = await sql`
            SELECT id, title, content, author, category, created_at, updated_at, image
            FROM blogs
            ORDER BY created_at DESC
        `;

        // Convert image buffer to base64 string
        const blogsWithImageUrl = blogs.map(blog => {
            let imageData = '';
            if (blog.image) {
                const base64Image = blog.image.toString('base64');
                imageData = `data:image/jpeg;base64,${base64Image}`;
            }

            return {
                ...blog,
                image: imageData
            };
        });

        res.json(blogsWithImageUrl);
    } catch (error) {
        console.error("Error fetching blog posts:", error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Get a single blog post by ID
app.get('/api/blogs/:id', async (req, res) => {
    const { id } = req.params;
    
    try {
        const result = await sql`
            SELECT id, title, content, author, category, created_at, updated_at, image
            FROM blogs
            WHERE id = ${id}
        `;

        if (result.length === 0) {
            return res.status(404).json({ message: 'Blog post not found' });
        }

        const blog = result[0];
        
        // Convert image buffer to base64 string
        let imageData = '';
        if (blog.image) {
            const base64Image = blog.image.toString('base64');
            imageData = `data:image/jpeg;base64,${base64Image}`;
        }

        res.json({
            ...blog,
            image: imageData
        });
    } catch (error) {
        console.error("Error fetching blog post:", error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Update a blog post
app.put('/api/blogs/:id', (req, res) => {
    blogUpload(req, res, async (err) => {
        if (err) {
            return res.status(400).json({ message: err.message });
        }

        const { id } = req.params;
        const { title, content, author, category } = req.body;
        
        // Validate required fields
        if (!title || !content) {
            return res.status(400).json({ message: 'Title and content are required' });
        }

        try {
            // Check if blog exists
            const blogExists = await sql`SELECT id FROM blogs WHERE id = ${id}`;
            if (blogExists.length === 0) {
                return res.status(404).json({ message: 'Blog post not found' });
            }

            // If image is provided, update with new image
            if (req.file) {
                const image = req.file.buffer;
                
                await sql`
                    UPDATE blogs 
                    SET title = ${title}, 
                        content = ${content}, 
                        author = ${author || null}, 
                        category = ${category || null}, 
                        image = ${image},
                        updated_at = NOW()
                    WHERE id = ${id}
                `;
            } else {
                // Otherwise, update without changing the image
                await sql`
                    UPDATE blogs 
                    SET title = ${title}, 
                        content = ${content}, 
                        author = ${author || null}, 
                        category = ${category || null},
                        updated_at = NOW()
                    WHERE id = ${id}
                `;
            }

            res.status(200).json({ message: 'Blog post updated successfully' });
        } catch (error) {
            console.error("Error updating blog post:", error);
            res.status(500).json({ message: 'Internal server error' });
        }
    });
});

// Delete a blog post
app.delete('/api/blogs/:id', async (req, res) => {
    const { id } = req.params;
    
    try {
        // Check if blog exists
        const blogExists = await sql`SELECT id FROM blogs WHERE id = ${id}`;
        if (blogExists.length === 0) {
            return res.status(404).json({ message: 'Blog post not found' });
        }

        await sql`DELETE FROM blogs WHERE id = ${id}`;
        
        res.status(200).json({ message: 'Blog post deleted successfully' });
    } catch (error) {
        console.error("Error deleting blog post:", error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Delete product endpoint
app.delete('/products/:id', async (req, res) => {
    const { id } = req.params;
    
    try {
        await sql`DELETE FROM product WHERE id = ${id}`;
        res.status(200).json({ message: 'Product deleted successfully' });
    } catch (error) {
        console.error('Error deleting product:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Delete AOF and its products endpoint
app.delete('/aof/:id', async (req, res) => {
    const { id } = req.params;
    console.log("sdfsdfsdfsdaaaaaaaaaaaaaaaaaaaaaaaaaa",id)
    try {
        // First delete all products associated with this AOF
        await sql`DELETE FROM product WHERE aof_id = ${id}`;
        
        // Then delete the AOF itself
        await sql`DELETE FROM aof WHERE id = ${id}`;
        
        res.status(200).json({ message: 'Area of Focus and associated products deleted successfully' });
    } catch (error) {
        console.error('Error deleting AOF:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
