const express = require("express");

const app = express();
const PORT = 3000;

// Set EJS as the template engine
app.set("view engine", "ejs");

// Read form data
app.use(express.urlencoded({ extended: true }));

// Display registration page
app.get("/", (req, res) => {
    res.render("index", {
        pageTitle: "Create Account",
        message: null,
        registeredUser: null
    });
});

// Handle registration
app.post("/signup", (req, res) => {
    const { name, age } = req.body;

    let message = null;

    // Validate username
    if (!name || name.trim().length < 3) {
        message = "Name should contain at least 3 characters.";
    }

    // Validate age
    else if (!age || isNaN(age) || Number(age) < 18) {
        message = "Age must be 18 or above.";
    }

    // Show error if validation fails
    if (message) {
        res.render("index", {
            pageTitle: "Registration Error",
            message: message,
            registeredUser: null
        });
    }

    // Show success message
    else {
        res.render("index", {
            pageTitle: "Account Created",
            message: null,
            registeredUser: name
        });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Application started at http://localhost:${PORT}`);
});