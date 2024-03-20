import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="home-page vh-100 d-flex align-items-center justify-content-center text-center text-white" style={{backgroundImage: "url('https://i.etsystatic.com/39621002/r/il/77f426/5374544317/il_fullxfull.5374544317_4k4k.jpg')", backgroundSize: 'cover'}}>
      <div className="intro-section bg-dark bg-opacity-50 p-5 rounded-3">
        <h2 className="display-4 fw-bold">Welcome to WorldExplorer!</h2>
        <p className="lead">Project Creator - Alon Aizin</p>
        <Link to="/countries" className="btn btn-success btn-lg">Click to Explore Countries</Link>
      </div>
    </div>
  );
};

export default HomePage;
