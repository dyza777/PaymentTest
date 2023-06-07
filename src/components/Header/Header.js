import React from 'react';
import './Header.css';

function Header({receiptDate, cashboxNumber}) {
  const formattedString = getFormattedString(receiptDate, cashboxNumber);
  return (
    <div className='App-header'>
        <span className='App-header-text'>
          {formattedString}
        </span>
    </div>
  );
}

function getFormattedString(receiptDate, cashboxNumber) {
  const date = receiptDate.getDate();
  const month = receiptDate.getMonth();
  const year = receiptDate.getFullYear();

  const hours = receiptDate.getHours();
  const minutes = receiptDate.getMinutes();

  return `${date}.${month}.${year}  ${hours}:${minutes}  Касса #${cashboxNumber}`;
}

export default Header;