const express = require('express');
const router = express.Router();

let users = [
  { id: 1, name: 'Samuel Adeyeye', email: 'samueladeyeye2012@gmail.com' },
  { id: 2, name: 'Israel Peters', email: 'israelpeters@gmail.com' },
];

// GET request - Fetch all users
router.get('/users', (req, res) => {
  res.json(users);
});

// POST request - Add a new user
router.post('/users', (req, res) => {
  const { name, email } = req.body;

  // Basic validation
  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required' });
  }

  // Create a new user
  const newUser = {
    id: users.length + 1,
    name,
    email,
  };
  users.push(newUser);
  res.status(201).json({ message: 'User added successfully', user: newUser });
});

module.exports = router;
