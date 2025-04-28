require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { neon } = require("@neondatabase/serverless");

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS
app.use(cors());

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

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
