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
      <main>
        <div>
          <h1 className='hero-text'>MightyPics Photography</h1>
          <p className='text'>Your one stop shop for <span>quality photos!</span></p>
          <button type='submit' className='button'>Book Now</button>
        </div>
        <figure>
          <div class="carousel dissolve">
            <div class="items">
              <img class="item" src={require("../src/images/grad1.JPG")} alt=""/>
              <img class="item" src={require("../src/images/grad2.JPG")} alt="Seven to ten at Leeds &amp; Holbeck"/>
              <img class="item" src={require("../src/images/grad3.JPG")} alt="Banksy"/>
              <img class="item" src={require("../src/images/wed1.jpg")} alt="Bristol autumn"/>
              <img class="item" src={require("../src/images/wed1.jpg")} alt="Bristol autumn"/>
              <img class="item" src={require("../src/images/wed2.jpg")} alt="Bristol autumn"/>
              <img class="item" src={require("../src/images/rand1.jpg")} alt="Bristol autumn"/>
              <img class="item" src={require("../src/images/rand2.jpg")} alt="Bristol autumn"/>
              <img class="item" src={require("../src/images/rand3.jpg")} alt="Bristol autumn"/>
              <img class="item" src={require("../src/images/rand4.jpg")} alt="Bristol autumn"/>
            </div>
          </div>
          <figcaption>High quality shots</figcaption>
          <p>To get more quality photos and other services  <a className='info' href="!#">book with us!</a></p>
        </figure>
      </main>
    </body>
  );
}

export default App;
