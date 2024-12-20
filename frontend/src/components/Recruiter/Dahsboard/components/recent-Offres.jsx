import React, { useState, useEffect } from 'react';

export function RecentOffres() {
  const [offres, setOffres] = useState([]);

  useEffect(() => {
    fetchOffres();
  }, []);

  const fetchOffres = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/offres');
      const data = await response.json();
      if (Array.isArray(data.data)) {
        const reversedOffres = data.data.slice(-10).reverse(); // Inverser l'ordre des offres
        setOffres(reversedOffres);        
      } else {
        console.error('Invalid data format:', data);
      }
    } catch (error) {
      console.error('Error fetching offres:', error);
    }
  };

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>ID Offer</th>
            <th>Contrat</th>
          </tr>
        </thead>
        <tbody>
          {offres.map(offre => (
            <tr key={offre.id}>
              <td>{offre.id}</td>
              <td>{offre.contrat}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
