import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>Bem-vindo ao CampusHub</h1>
      <p>Plataforma de discussão e colaboração acadêmica.</p>


      <Link to="/forum">Forum</Link>
      <Link to="/jornal">jornal</Link>
    </div>
  );
};

export default HomePage;