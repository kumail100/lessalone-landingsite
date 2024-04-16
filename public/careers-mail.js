const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000; // You can change this to your desired port number

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Routes
app.post('/volunteer-form', (req, res) => {
    const { volunteerName, volunteerEmail, volunteerSubject, volunteerMessage } = req.body;

    // Here you can process the form data, for example, you can log it
    console.log(`Received volunteer form submission:
        Full Name: ${volunteerName}
        Email: ${volunteerEmail}
        Subject: ${volunteerSubject}
        Message: ${volunteerMessage}`);

    // You can also send a response back to the client
    res.send('Volunteer form submitted successfully!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});