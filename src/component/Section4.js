import React from 'react';
import '../css/App.css';
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


function Section4(props) {
    useEffect(() => {
        AOS.init();
      })
    return (
        <div id="section4" data-aos="fade-up">
        <div class="leftPart" data-aos="fade-up">
          <div>
            We’re proud to be recognized as a Best Workplace for Women Innovators by Fast Company.
          </div>
          <div class="btnStart" onclick="">Learn More →</div>
        </div>
        <div class="rightPart" data-aos="fade-up">
          <img
            src={'https://images.prismic.io/instrument-v5/f3b20989-779a-41a5-9f19-668bcbda94a5_fastco_women_thumbnail.png?auto=compress,format&w=1280&dpr=1'}
            style={{width: "100%"}}
            alt=''
          />
        </div>
      </div>

    );
}

export default Section4;