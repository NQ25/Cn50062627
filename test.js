const express = require("express");

const app = express();

// Built-in middleware (replaces body-parser)
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("Hello, it is my first Express application");
});

app.get('/about', (req, res) => {
    res.send("This is a basic Express application");
});

app.get('/users/:userId/books/:bookId', (req, res) => {
    res.send(req.params);
});
app.listen(5000, () => {
    console.log("Server is running on port 5000");
});