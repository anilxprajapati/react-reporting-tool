import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Layout from './components/layout/Layout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreateReport from './pages/CreateReport';

function App() {
  return (
    <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path='/' element={<CreateReport />} />
            {/* Add more routes here */}
          </Route>
        </Routes>
    </Router>
  );
}

export default App;
