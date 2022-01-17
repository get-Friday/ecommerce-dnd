import React from 'react';
import ReactDOM from 'react-dom';
import { 
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import App from './App';
import Featured from './routes/featured'

ReactDOM.render(
  <Router>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/featured' element={<Featured />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);