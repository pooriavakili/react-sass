import React,{Fragment} from 'react';
import './App.css';
import {Link} from 'react-router-dom'
function App() {
  return (
      <Fragment className="Asly">
  <header className='header'>
<div className='logo-box'>
  <img src={require('./img/logo-white.png')} alt="Logo" className='logo'/>
</div>
    <div className='text-box'>
    <h1 className='heading-primary'>
      <span className='heading-primary-main'>
   OutDoors
      </span>
      <span className='heading-primary-sub'>
is where life happens
      </span>
    </h1>
        <Link to='#' className='btn btn-white btn-animated'>Discover our tours</Link>
    </div>
  </header>
      </Fragment>
  );
}

export default App;
