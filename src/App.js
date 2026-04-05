import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Playground from './pages/Playground';
import ProjectPage from './pages/projects/ProjectPage';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL || ''}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/playground" element={<Playground />} />
        <Route path="/projects/:projectId" element={<ProjectPage />} />
      </Routes>
    </Router>
  );
}

export default App;
