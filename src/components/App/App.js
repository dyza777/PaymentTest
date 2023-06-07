import React, {useState} from 'react';
import Footer from '../Footer';
import Header from '../Header';
import Receipt from '../Receipt';
import ArrowLogo from '../../resources/images/Arrow.png';
import './App.css';

function App(props) {
  const [cashboxNumber] = useState(1);
  const [receiptDate] = useState(new Date(Date.now()));
  return (
    <div className='App'>
      <div className='App-content'>
        <Header receiptDate={receiptDate} cashboxNumber={cashboxNumber} />
        <Receipt />
        <div className='Arrow-container'>
          <img src={ArrowLogo} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
