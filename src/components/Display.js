import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Display() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    // Fetch data from your backend or API endpoint using Axios
    axios.get('http://localhost:5000/api/form-submissions')
      .then(response => setEntries(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Submitted Entries</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Username</th>
            <th>Code Language</th>
            <th>Stdin</th>
            <th>Stdout</th>
            <th>Timestamp</th>
            <th>Source Code</th>
          </tr>
        </thead>
        <tbody>
          {entries.map(entry => (
            <tr key={entry.id}>
              <td>{entry.username}</td>
              <td>{entry.language}</td>
              <td>{entry.stdin}</td>
              <td>{entry.output}</td> {/* Display stdout */}
              <td>{entry.createdAt}</td>
              <td>{entry.sourceCode.slice(0, 100)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Display;
