const express = require('express');
const app = express();
const port = 3000;

// Parse JSON request bodies
app.use(express.json());

// Handle CORS (Cross-Origin Resource Sharing)
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Serve the static files (HTML, CSS, JavaScript)
app.use(express.static('public'));

const { createPdf } = require('./pdfGenerator');
const { sendEmail } = require('./emailSender');

app.post('/generate-letter', async (req, res) => {
  const { customerName, serviceType } = req.body;

  // Validate the input
  if (!customerName || !serviceType) {
    console.error('Missing required fields:', { customerName, serviceType });
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    // Generate the welcome letter
    const welcomeLetter = createWelcomeLetter(customerName, serviceType);

    // Generate the PDF
    const pdfBuffer = await createPdf(welcomeLetter);

    // Send the email with the PDF attachment
    await sendEmail(customerName, pdfBuffer);

    // Return the welcome letter
    res.json({ letter: welcomeLetter });
  } catch (error) {
    console.error('Error generating welcome letter:', error);
    return res.status(500).json({ error: 'Failed to generate the welcome letter' });
  }
});
  
  function createWelcomeLetter(customerName, serviceType) {
    // This is a placeholder function that simply returns a sample welcome letter
    // Replace this with your actual logic to generate the welcome letter
    return `Dear ${customerName},
  
    Thank you for signing up for our ${serviceType} service. We're excited to have you on board!
  
    We look forward to working with you and providing the best possible experience.
  
    Best regards,
    The Customer Service Team
    `;
  }

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});