// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Heatmap from './pages/Heatmap';
import Home from './pages/Home';

function App() {
  return (
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/heatmap" element={<Heatmap />} />
      </Routes>
  );
}

export default App;
