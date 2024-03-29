import React from 'react';
import { useEffect } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<RedirectPortfolio />} />
        <Route path="/Home" element={<Home />} />
        <Route path='/Portfolio' element={<RedirectPortfolio/>}/>
      </Routes>
    </HashRouter>
  );
}

export default App;

const Home = () => {
  return <div>Currently blank</div>;
}

const RedirectPortfolio = () => {
  useEffect(() => {
    // Redirect to an external URL once the component mounts
    window.location.href = 'https://jtan99.github.io/portfolio';
  }, []);

  // Returning null to indicate that this component doesn't render anything
  return null;
};