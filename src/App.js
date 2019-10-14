import React,{Fragment,useState,useContext} from 'react';
import './App.css';
import KetabProvider, {ketab} from "./Context";
function App() {
    useContext(ketab);
    const[count]=useState([
        {
            id:1,
            title:"عشق توسعه هدف"
        },
        {
            id:2,
            maten:"کتاب شعر"
        },

    ])
  return (
      <KetabProvider>
      <Fragment className="Asly">
  <header className='header'>
<div className='logo-box'>
  <img src={require('./img/logo-white.png')} alt="Logo" className='logo'/>
</div>
      {
          count.map((item,index)=>(
              <Fragment id={item.id}
              style={{
                  flex:1
              }}
              >
              <div className='text-box'>
                  <h1>
                      <span>
                          {item.title}
                      </span>
                  </h1>
              </div>
                  <div className='primary'>
                      <h1>
                          {item.maten}
                      </h1>
                  </div>
              </Fragment>
          ))
      }
  </header>
      </Fragment>
      </KetabProvider>
  );
}
export default App;
