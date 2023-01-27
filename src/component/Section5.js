import React from 'react';
import '../css/App.css';
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


function Section5(props) {
    useEffect(() => {
        AOS.init();
      })
    return (
        <div id="section5" data-aos="fade-up">
        <div class="leftPart" data-aos="fade-up">
          <img
            src="https://images.prismic.io/instrument-v5/7c872db1-8972-4a3e-b53f-9aa7d179fd4f_what-we-do.jpg?auto=compress,format&w=1280&dpr=1"
            style={{width: "100%"}}
            alt=''
          />
        </div>
        <div class="rightPart" data-aos="fade-up">
          <div>
            As a full-service partner to the world’s most ambitious companies, we create
            transformational change through best-in-class digital products and communications.
          </div>
          <div class="btnStart" onclick="">What We Do →</div>
        </div>
      </div>

    );
}

export default Section5;