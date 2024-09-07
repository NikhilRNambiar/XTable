import React, { useState } from 'react';

const XTable = () => {
  const [data, setData] = useState([
    { date: '2022-09-01', views: 100, article: 'Article 1' },
    { date: '2023-09-01', views: 100, article: 'Article 1' },
    { date: '2023-09-02', views: 150, article: 'Article 2' },
    { date: '2023-09-02', views: 120, article: 'Article 3' },
    { date: '2020-09-03', views: 200, article: 'Article 4' }
  ]);

  const sortByDate = () => {
    const sortedData = [...data].sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      if (dateA > dateB) return -1;
      if (dateA < dateB) return 1;
      if (a.views > b.views) return -1;
      if (a.views < b.views) return 1;
      return 0;
    });
    setData(sortedData);
  };

  const sortByViews = () => {
    const sortedData = [...data].sort((a, b) => {
      if (a.views > b.views) return -1;
      if (a.views < b.views) return 1;
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      if (dateA > dateB) return -1;
      if (dateA < dateB) return 1;
      return 0;
    });
    setData(sortedData);
  };

  return (
    <div style={styles.container}>
      <h1>Date and Views Table</h1>
      <div style={styles.buttonContainer}>
        <button onClick={sortByDate} style={styles.button}>Sort by Date</button>
        <button onClick={sortByViews} style={styles.button}>Sort by Views</button>
      </div>
      <table style={styles.table}>
        <thead>
          <tr>
            <th>Date</th>
            <th>Views</th>
            <th>Article</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.date}</td>
              <td>{item.views}</td>
              <td>{item.article}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
  },
  buttonContainer: {
    marginBottom: '20px',
  },
  button: {
    padding: '10px 15px',
    fontSize: '16px',
    margin: '0 10px',
    cursor: 'pointer',
  },
  table: {
    margin: '0 auto',
    borderCollapse: 'collapse',
    width: '80%',
  },
  th: {
    borderBottom: '2px solid black',
    padding: '10px',
  },
  td: {
    borderBottom: '1px solid gray',
    padding: '10px',
    textAlign: 'center',
  }
};

export default XTable;
