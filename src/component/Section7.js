import React from 'react';
import '../css/App.css';
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


function Section7(props) {
    useEffect(() => {
        AOS.init();
      })
    return (
        <div id="section7" data-aos="fade-up">
        <div
          class="leftPart"
          data-aos="fade-up"
          onclick="location.href='https://www.instrument.com/work/eames-institute'"
        >
          <img
            src="https://images.prismic.io/instrument-v5/f2206e32-32cf-42f8-875b-245741d153c7_Group+34583.png?auto=compress,format&w=1280&dpr=1"
            style={{width: "100%"}}
            alt=''
          />
          <div>
            <div class="text">
              <li class="left">Eames Institute</li>
              <li class="right">
                Ray and Charles Eames laid the foundation for modern design and created work that
                has transcended time. With an aspiration to bring the Eameses’ timeless
                methodologies to a modern audience, the Eames Institute enlisted Instrument to
                co-create a digital platform to unveil their vast collection to the world.
              </li>
            </div>
          </div>
        </div>
        <div
          class="rightPart"
          data-aos="fade-up"
          onclick="location.href='https://www.instrument.com/work/dropbox-award-submission'"
        >
          <img
            src="https://images.prismic.io/instrument-v5/71b85f31-4930-43a6-80f0-2bdad6da7420_Frame+5393.jpg?auto=compress,format&w=1280&dpr=1"
            style={{width: "100%"}}
            alt=''
          />
          <div>
            <div class="text">
              <li class="left">Dropbox "For All Things Worth Saving"</li>
              <li class="right">
                To evolve and mature how Dropbox engages with their customers, we developed a
                multi-year brand platform as well as launched its first campaign titled 'For All
                Things Worth Saving' — an ecosystem of branded experiences aimed to remind people of
                the inherent value of their digital files
              </li>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Section7;