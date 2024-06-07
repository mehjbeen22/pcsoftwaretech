import React, { useState } from 'react';
import Navbar from './pages/Navbar';
import HomePage from './pages/Home';
import Footer from './pages/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrivacyPolicy from './policies/PrivacyPolicy';
import WarrantyPolicy from './policies/RefundAndReturn';
import TermsOfUse from './policies/TermAndConditions';
import Disclaimer from './policies/Disclaimer';

const App = () => {
  // Define state to manage selected category
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <Router>
      {/* Pass setSelectedCategory to Navbar as a prop */}
      <Navbar setSelectedCategory={setSelectedCategory} />
      <Routes>
        {/* Pass selectedCategory to HomePage as a prop */}
        <Route
          path="/"
          element={<HomePage selectedCategory={selectedCategory} />}
        />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/refund&return" element={<WarrantyPolicy />} />
        <Route path="/t&c" element={<TermsOfUse />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
