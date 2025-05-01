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


app.post('/admin/products', (req, res) => {
    upload(req, res, async function (err) {
        if (err instanceof multer.MulterError || err) {
            return res.status(400).json({ message: err.message });
        }

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
        const imageName = req.file?.originalname;

        if (!imageBuffer) {
            return res.status(400).json({ message: 'Image is required.' });
        }

        try {
            await sql`
                INSERT INTO product (
                    aof_id, name, description, speciality,
                    segment_presentation, composition, presentation,
                    image_name, image_file
                )
                VALUES (
                    ${a_id}, ${name}, ${description}, ${speciality},
                    ${segment_presentation}, ${composition}, ${presentation},
                    ${imageName}, ${imageBuffer}
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

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
