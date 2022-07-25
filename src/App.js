import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import './App.css';

function App() {
  return (
    <body>
      <div>
        <ul class="nav justify-content-center">
          <li class="nav-item">
            <a class="nav-link active link" aria-current="page" href="!#">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link link" href="!#">Gallery</a>
          </li>
          <li class="nav-item">
            <a class="nav-link link" href="!#">Contacts</a>
          </li>
        </ul>
      </div>
      <section>
        <div>
          <h1 className='hero-text'>MightyPics Photography</h1>
          <p className='text'>Your one stop shop for <span>quality photos!</span></p>
          <button type='submit' className='button'>Book Now</button>
        </div>
        <div className='hero-image'>
          <img src="" alt="hero" />
        </div>

      </section>


    </body>
  );
}

export default App;
