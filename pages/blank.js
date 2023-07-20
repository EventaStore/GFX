import { useEffect, useState } from 'react';

export default function MyPage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/api/data')
      .then(response => response.json())
      .then(data => {
        // Set the received data to the state
        setData(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  // Render your component with the fetched data
  return (
    <div>
      {/* Render your data */}
    </div>
  );
}
