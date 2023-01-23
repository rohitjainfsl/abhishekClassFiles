import React from 'react';
import ReactDOM from 'react-dom/client';
import firstname, { lastname } from './names';
import { Sarwan } from './sarwan';


const root = ReactDOM.createRoot(document.getElementById('root'));

// const firstname = 'Vinay'
// const lastname = 'Jain'


// {} - expression

root.render(
  <>
    <h1>Hello {firstname + " " + lastname}</h1>
    <p>sample paragraph</p>
    <Sarwan />
  </>
);

