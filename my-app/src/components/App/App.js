import React from 'react';
import './App.css';
import publications from '../../publications.json';
import Reader from '../Reader/Reader';

const App = () => (
  <div className="App">
    <Reader items={publications} />
  </div>
);

export default App;
