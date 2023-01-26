import React from 'react';
import '../css/App.css';

const Section1 =(props)=>{
    return(
        <div id="section1">
        <iframe title='video'
          src="https://player.vimeo.com/video/428281636?autoplay=1&loop=1&muted=1"
          allowfullscreen
          frameborder="0"
          allow="autoplay;fullscreen;"
          //style="width: 100%; height: 90vh"
          
          data-ready="true"
        />
      </div>

    );
};

export default Section1;