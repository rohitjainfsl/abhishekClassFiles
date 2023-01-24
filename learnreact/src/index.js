import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App'
import Home from './counter/Home'



const root = ReactDOM.createRoot(document.getElementById('root'));

const names = ['Ram', "Shyam", 'Seeta', 'Geeta']
const num = 1

root.render(
  <>
    <h1>React Fundamentals</h1>
    {/* <App students={names} id={num} /> */}
    <Home />
  </>
);

