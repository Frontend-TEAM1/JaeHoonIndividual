import React from "react";
import '../css/headrFooter.css';

const Footer =(props)=>{
    return(
        <footer>
      <div>
        <ul id="footerLeft1">
          <li><a href="./mainPage.html">HOME</a></li>
          <li><a href="./whatWeDo.html">WHAT WE DO</a></li>
          <li><a href="">WORK</a></li>
          <li><a href="./whoWeAre.html">WHO WE ARE</a></li>
          <li><a href="">ARTICLES</a></li>
        </ul>
        <ul id="footerLeft2">
          <li><a href="./beingHere.html">BEING HERE</a></li>
          <li><a href="./careers.html">CAREERS</a></li>
          <li><a href="">CONTATCT</a></li>
          <li><a href="">PRIVACY</a></li>
        </ul>
      </div>
      <div>
        <ul id="footerRight">
          <li>NEWSLETTER &nbsp;→</li>
          <li><i class="fa-brands fa-instagram"></i></li>
          <li><i class="fa-brands fa-twitter"></i></li>
          <li>
            <i
              class="fa-brands fa-linkedin-in"
              
            ></i>
          </li>
        </ul>
      </div>
    </footer>
    );
};
export default Footer;