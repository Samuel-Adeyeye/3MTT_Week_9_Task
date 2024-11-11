const express = require('express');
const app = express();
const PORT = 3000;

const userRoutes = require('./users');

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to the Simple Node.js API!');
});

// User routes
app.use('/api', userRoutes);

// Error handling for undefined routes
app.use((req, res) => {
    res.status(404).json({ error: 'Route not found' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
