const { MongoClient } = require('mongodb');
const bcrypt = require('bcrypt');

// Replace the connection string with your own
const uri = 'mongodb+srv://admin:k8UnkechGEb9ODNq@gxf.wrcvwp5.mongodb.net/';

async function getUserByUsername(username) {
  const client = new MongoClient(uri);

  try {
    await client.connect();

    // Specify the database and collection names
    const databaseName = 'booking';
    const collectionName = 'users'; // Assuming you have a collection for storing users

    // Get a reference to the "booking" database
    const db = client.db(databaseName);

    // Get a reference to the "users" collection
    const collection = db.collection(collectionName);
    
    // Query the collection to find the user with the provided username
    const user = await collection.findOne({ username });
    console.log(user)
    return user;
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error;
  } finally {
    // Close the connection when done
    client.close();
  }
}

module.exports = async function handler(req, res) {
  if (req.method === 'POST') {
    // Get the username and password from the request body
    const { username, password } = req.body;

    try {
      // Find the user with the provided username in the database
      const user = await getUserByUsername(username);
      

      // If the user is not found, return an error
      if (!user) {
        return res.status(401).json({ error: 'Invalid username or password' });
      }

      // Compare the provided password with the hashed password in the database
      const passwordMatch = await bcrypt.compare(password, user.password);

      if (passwordMatch) {
        // Passwords match, login successful
        return res.status(200).json({ message: 'Login successful' });
      } else {
        // Passwords do not match, return an error
        return res.status(401).json({ error: 'Invalid username or password' });
      }
    } catch (error) {
      return res.status(500).json({ error: 'Failed to authenticate' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
};
