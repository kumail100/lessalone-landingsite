const bodyParser = require('body-parser');

const app = express();
const port = 3000; // You can change this to your desired port number

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Routes
app.post('/submit-form', (req, res) => {
    const { firstName, lastName, email, message } = req.body;

    // Here you can process the form data, for example, you can log it
    console.log(`Received form submission:
        First Name: ${firstName}
        Last Name: ${lastName}
        Email: ${email}
        Message: ${message}`);

    // You can also send a response back to the client
    res.send('Form submitted successfully!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});