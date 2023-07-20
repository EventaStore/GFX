const { MongoClient } = require('mongodb');

// Replace the connection string with your own
const uri = 'mongodb+srv://admin:k8UnkechGEb9ODNq@gxf.wrcvwp5.mongodb.net/';

module.exports = async function handler(req, res) {
  if (req.method === 'POST') {
    // Check if the request includes a valid authentication token
    const newData = req.body;

    const client = new MongoClient(uri);

    try {
      console.log(0)
      await client.connect();
console.log(1)
// Specify the database and collection names
const databaseName = 'booking';
const collectionName = 'booking';

console.log(2)
// Get a reference to the "booking" database
const db = client.db(databaseName);

// Get a reference to the "booking" collection
const collection = db.collection(collectionName);
console.log(3)

// Insert the new data into the "booking" collection
await collection.insertOne(newData);

console.log(4)
      return res.status(200).json({ message: 'Data written successfully' });
    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
      return res.status(500).json({ error: 'Failed to write data' });
    } finally {
      // Close the connection when done
      client.close();
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
};
