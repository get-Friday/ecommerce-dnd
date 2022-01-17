import React from 'react';
import ReactDOM from 'react-dom';
import { 
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import App from './App';
import Featured from './routes/featured'
import SourceBooks from './routes/sourcebooks'

ReactDOM.render(
  <Router>
    <Routes>
      <Route path='/' element={<App />}>
        <Route path='featured' element={<Featured />} />
        <Route path='sourcebooks' element={<SourceBooks />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>Não tem nada aqui!</p>
            </main>
          }
        />
      </Route>
    </Routes>
  </Router>,
  document.getElementById('root')
);