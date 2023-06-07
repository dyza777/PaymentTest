import React from 'react';
import './FooterButton.css';

function FooterButton({icon, title, callback}) {
  return (
    <div id={title || icon} onClick={callback} className='Footer-button'>
      {icon &&
        <div className='Footer-button-icon-container'> 
          <img className='Footer-button-icon' src={icon} />
        </div>
      }
      {title &&
        <span className={`Footer-button-text ${!icon && "Footer-button-text-noicon" || ""}`}>{title}</span>
      }
    </div>
  );
}

export default FooterButton;