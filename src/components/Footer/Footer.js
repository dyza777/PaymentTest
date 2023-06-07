import React from 'react';
import FooterButton from '../FooterButton';
import EmployeeIcon from '../../resources/images/EmployeeIcon.png';
import BackIcon from '../../resources/images/BackIcon.png';
import './Footer.css';

const buttonsInfo = [
 {
    icon: BackIcon,
    callback: () => console.log("Нажата кнопка назад")
  },
  {
    icon: EmployeeIcon,
    title: "Вызов сотрудника",
    callback: () => console.log("Нажата кнопка вызов сотрудника")
  }
]

function Footer(props) {
  return (
    <div className='App-footer'>
      {buttonsInfo.map(buttonInfo =>
        <FooterButton
          title={buttonInfo.title}
          icon={buttonInfo.icon}
          callback={buttonInfo.callback}
        />
      )}
    </div>
  );
}

export default Footer;