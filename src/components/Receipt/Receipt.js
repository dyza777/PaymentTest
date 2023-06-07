import React from 'react';
import background from '../../resources/images/Receipt.png';
import './Receipt.css';

function Receipt(props) {
  return (
    <div className='Receipt-container' style={{ backgroundImage: `url(${background})`}}>
      <div className='Receipt-content'>
        <span className='Receipt-title-text'>Стоимость покупок</span>
        <div className='Receipt-price-block'>
          <span className='Receipt-price-text-big'>820</span>
          <span className='Receipt-price-text-small'>,95</span>
          <span className='Receipt-price-text-big'>₽</span>
        </div>
        <span className='Receipt-usecard-label'>{'Приложите\nили прокатайте карту'}</span>
      </div>
    </div>
  );
}


export default Receipt;