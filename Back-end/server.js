const express = require('express');
const mysql = require('mysql2');
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());

const con = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "Mahdi1380",
    database: "reshop",
});

con.connect(err => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the database');
});

app.get('/api/products', (req, res) => {
    const query = `
        SELECT p.id, p.name, p.href, p.price, p.description, 
               i.alt, i.src
        FROM products p
        JOIN images i ON p.id = i.product_id
        ORDER BY p.id, i.id;
    `;
    con.query(query, (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            res.status(500).send('Server error');
            return;
        }

        const products = {};
        results.forEach(row => {
            if (!products[row.id]) {
                products[row.id] = {
                    id: row.id,
                    name: row.name,
                    href: row.href,
                    price: row.price,
                    description: row.description,
                    images: []
                };
            }
            products[row.id].images.push({alt: row.alt, src: row.src});
        });

        res.json(Object.values(products));
    });
});

app.post('/api/signup', (req, res) => {
    const {email, password, name} = req.body;
    const query = 'INSERT INTO users (email, password, name) VALUES (?, ?, ?)';
    con.query(query, [email, password, name], (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            res.status(500).send('Server error');
            return;
        }
        res.status(201).send('User registered');
    });
});

app.listen(3001, () => {
    console.log("Server started on port 3001");
});
