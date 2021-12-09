import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
import Range from './components/Range/Range.js';
import Form from './components/Form/Form.js';
import Films from './components/Films/Films.js';

ReactDOM.render(
    <>
      <Range />
      <Form />
      <Films />
    </>,
  document.getElementById('root')
);