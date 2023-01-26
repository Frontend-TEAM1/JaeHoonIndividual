import React from "react";
import '../css/headrFooter.css';

const Header =(props)=>{
    return(
        <body>
    <header>
      <a>INSTRUMENT</a>
      <ul>
        <li><a href="./whatWeDo.html">WHAT WE DO</a></li>
        <li><a href="./whoWeAre.html">WHO WE ARE</a></li>
        <li><a href="./beingHere.html">BEING HERE</a></li>
        <li><a href="./careers.html">CAREERS</a></li>
      </ul>
    </header>
    
  </body>
    );
};

export default Header;
