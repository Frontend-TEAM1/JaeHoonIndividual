import React from 'react';
import './css/App.css';
import Section1 from './component/Section1';
import Header from './component/Header';
import Footer from './component/Footer';
import Section2 from './component/Section2';
import Section3 from './component/Section3';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Section1></Section1>
      <Section2></Section2>
      <Section3></Section3>
      <Footer></Footer>
      

      
    </div>
  );
}

export default App;
