import React from 'react'
import { Link, useParams } from 'react-router-dom';

const Moviedescription = ({title, description, posterURL}) => {
  return (
    <div>
      <Link to="/App"> Back to home</Link>
      <div className=" movie-card">
        <img src={posterURL} alt={title}/>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>

  );
};

export default Moviedescription;