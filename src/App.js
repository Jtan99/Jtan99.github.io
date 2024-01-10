import React from 'react';
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/Portfolio' element={<RedirectPortfolio/>}/>
      </Routes>
    </Router>
  );
}

export default App;

const Home = () => {
  return <div>Home</div>;
}

const RedirectPortfolio = () => {
  useEffect(() => {
    // Redirect to an external URL once the component mounts
    window.location.href = 'https://jtan99.github.io/portfolio';
  }, []);

  // Returning null to indicate that this component doesn't render anything
  return null;
};