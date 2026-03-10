import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
;
import LandingPage from './pages/LandingPage';
import { Toaster } from './components/ui/toaster';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* Add other routes here if necessary */}
      </Routes>
    </Router>
    <Toaster />
  </React.StrictMode>
);
