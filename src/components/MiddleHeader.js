import React from 'react'
import SearchBox from './Searchbox'


const MiddleHeader = () => {
  return (
    <div className="containerMiddle">
    <div className="row20"><img src="\Images\logo.png" className='logo' alt="logo" /></div>
    <div className="row20"><SearchBox/></div>
    <div className="row20"><h5 className='h1about'>Reach us 0760286727</h5></div>
  </div>
  )
}

export default MiddleHeader