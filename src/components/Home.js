import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { faTruck } from '@fortawesome/free-solid-svg-icons';




const Home = () => {
  return (
<div className="row1">
  <div className="row2">Welcome to ChampCamp</div>
  <div className="row3">
    <FontAwesomeIcon className="icon" icon={faTruck} /> Free Shipping
  </div>
  <div className="row4">
    <FontAwesomeIcon className="icon" icon={faLock} /> Safe Payment
  </div>
</div>
  )
};

export default Home;