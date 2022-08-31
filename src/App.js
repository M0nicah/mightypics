import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';
import { BsCameraReelsFill } from "react-icons/bs";
import { IoMdPhotos} from "react-icons/io";
import { MdPermContactCalendar} from "react-icons/md";

function App() {

  return (
    <body>
      <div>
        <ul class="nav justify-content-center">
          <li class="nav-item">
            <a class="nav-link active link" aria-current="page" href="!#"><span className='icon'><BsCameraReelsFill size="23px"/></span>About Us</a>
          </li>
          <li class="nav-item">
            <a class="nav-link link" href="!#"> <span className='icon'><IoMdPhotos size="23px"/></span>Gallery</a>
          </li>
          <li class="nav-item">
            <a class="nav-link link" href="!#"><span className='icon'><MdPermContactCalendar size="23px"/></span>Contacts</a>
          </li>
        </ul>
      </div>
      <main>
        <div class="flex-container">
          <div class="flex-items">
            <h1 className=' flex-items hero-text'>MightyPics Photography</h1>
            <p className='text'>Your one stop shop for <span>quality photos!</span></p>
            <button type='submit' className='button'>Book Now</button>
          </div>
          <div className='hero-img'>
            <div class="flex-items">
              <img src={require("../src/images/grad1.JPG")} alt="" className='lap-img2 img-box' />
              <img src={require("../src/images/grad3.JPG")} alt="" className='lap-img img-box' />
              <img src={require("../src/images/grad2.JPG")} alt="" className='over-img img-box'/>
            </div>
          </div>
          
        </div>
        <div className='header5'>
          <h2 className='heading'>Gallery</h2>
          <img src="https://img.icons8.com/ios-filled/100/ff6b00/long-arrow-down.png" alt='' className='arrow'/>
        </div>
      </main>
    
    </body>
  );
}

export default App;
