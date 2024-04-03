const { MongoClient } = require('mongodb');

// Replace the connection string with your own
const uri = 'mongodb+srv://admin:k8UnkechGEb9ODNq@gxf.wrcvwp5.mongodb.net/';

async function readBookingData() {
  const client = new MongoClient(uri);

  try {
    await client.connect();

    // Specify the database and collection names
    const databaseName = 'booking';
    const collectionName = 'booking';

    // Get a reference to the "booking" database
    const db = client.db(databaseName);

    // Get a reference to the "booking" collection
    const collection = db.collection(collectionName);

    // Query the collection to read data (e.g., find all documents)
    const documents = await collection.find({}).toArray();

    return documents;
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error; // Rethrow the error to be handled by the calling function
  } finally {
    // Close the connection when done
    client.close();
  }
}

module.exports = async function handler(req, res) {
  if (req.method === 'GET') {
    const authToken = req.headers.authorization;

    // Check if the request includes a valid authentication token
    if (authToken !== 'Bearer mwaOU9folV6Julralll6P0EHQGXyjk1S0FDIbHbEi7Sblx87KFP3IEakRkMMkZs4"') {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    try {
      // Read booking data from MongoDB
      const documents = await readBookingData();
      return res.status(200).json(documents);
    } catch (error) {
      return res.status(500).json({ error: 'Failed to read data' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
};
