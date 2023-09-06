const { MongoClient, ObjectId } = require('mongodb');

// Replace the connection string with your own
const uri = 'mongodb+srv://admin:k8UnkechGEb9ODNq@Kamboosha.wrcvwp5.mongodb.net/';

async function deleteBookingData(id) {
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

    // Delete the document with the provided ID
    const result = await collection.deleteOne({ _id: new ObjectId(id) });

    return result.deletedCount > 0; // Returns true if a document was deleted
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error; // Rethrow the error to be handled by the calling function
  } finally {
    // Close the connection when done
    client.close();
  }
}

module.exports = async function handler(req, res) {
  if (req.method === 'DELETE') {
    const authToken = req.headers.authorization;

    // Check if the request includes a valid authentication token
    if (authToken !== 'Bearer mwaOU9folV6Julralll6P0EHQGXyjk1S0FDIbHbEi7Sblx87KFP3IEakRkMMkZs4"') {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    try {
      // Get the ID of the document to delete from the request query or body
      const { id } = req.query; // If using query parameters
      // or: const { id } = req.body; // If using request body

      // Validate that the ID is provided and is a valid ObjectId
      if (!id || !ObjectId.isValid(id)) {
        return res.status(400).json({ error: 'Invalid ID provided' });
      }

      // Delete booking data from MongoDB
      const deleted = await deleteBookingData(id);

      if (deleted) {
        return res.status(200).json({ message: 'Data deleted successfully' });
      } else {
        return res.status(404).json({ error: 'Data not found' });
      }
    } catch (error) {
      return res.status(500).json({ error: 'Failed to delete data' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
};
