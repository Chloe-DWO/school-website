const express = require('express');
const app = express();
const PORT = 3000;

// Serve static files (HTML, CSS, etc.) from the current folder
app.use(express.static(__dirname));

// Root route → serve index.html
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Success page
app.get('/success.html', (req, res) => {
  res.sendFile(__dirname + '/sucess.html');
});

// Cancel page
app.get('/cancel.html', (req, res) => {
  res.sendFile(__dirname + '/cancel.html');
});

// Notify route (PayFast callback)
app.post('/notify', (req, res) => {
  console.log('Payment notification received:', req.body);
  res.sendStatus(200);
});

app.listen(PORT, () => console.log(`Running at http://localhost:${PORT}`));
