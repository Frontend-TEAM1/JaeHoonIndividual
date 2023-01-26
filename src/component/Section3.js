import React from 'react';
import '../css/App.css';
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


function Section3(props) {
    useEffect(() => {
        AOS.init();
      })
    return (
        <div id="section3" data-aos="fade-up">
            <div className="leftPart" data-aos="fade-up">
                <img class="ceoPhoto"
                    src={'https://images.prismic.io/instrument-v5/f43c62bc-9a19-4771-a13e-b8b0d93e6d6b_72andsunny-nyc_ISAKTINER-8376-edit.jpg?auto=compress,format&w=1280&dpr=1'}
                    alt='React'/>
            </div>
            <div className="rightPart" data-aos="fade-up">
                <div>
                    It is with great excitement that we announce Kara Place as Instrument’s next CEO.
                </div>
                <div class="btnStart" onclick="">Read More →</div>
            </div>
        </div>

    );
}

export default Section3;