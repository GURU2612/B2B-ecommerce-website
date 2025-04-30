require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { neon } = require("@neondatabase/serverless");
const bcrypt = require("bcrypt");

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

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
