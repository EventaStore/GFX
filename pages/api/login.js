// pages/api/login.js

export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { username, password } = req.body;

  // Verify the username and password
  if (username === 'admin' && password === 'admin') {
    // If the credentials are correct, return the token
    return res.status(200).json({ token: 'mwaOU9folV6Julralll6P0EHQGXyjk1S0FDIbHbEi7Sblx87KFP3IEakRkMMkZs4"' });
  } else {
    // If the credentials are incorrect, return an error
    return res.status(401).json({ error: 'Invalid credentials' });
  }
}
