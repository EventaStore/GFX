const fs = require('fs');
const path = require('path');

const filePath = path.join(process.cwd(), 'data.json');

module.exports = function handler(req, res) {
  if (req.method === 'GET') {
    // Read data from disk
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Failed to read data' });
      }

      // Parse the JSON data
      const jsonData = JSON.parse(data);

      return res.status(200).json(jsonData);
    });
  } else if (req.method === 'POST') {
    const { newData } = req.body;

    // Read existing data from disk
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Failed to read data' });
      }

      // Parse the JSON data
      const jsonData = JSON.parse(data);

      // Add new data
      jsonData.push(newData);

      // Write updated data to disk
      fs.writeFile(filePath, JSON.stringify(jsonData), 'utf8', (err) => {
        if (err) {
          console.error(err);
          return res.status(500).json({ error: 'Failed to write data' });
        }

        return res.status(200).json({ message: 'Data written successfully' });
      });
    });
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
};
