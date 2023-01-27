/* eslint-disable no-array-constructor */
import React from 'react';
import '../css/App.css';


function Section8(props) {
   
    return (
        <div id="section8">
        <div>
          <div class="imageBox">
            <div><img id="firstImage" src="" style={{width: "15vw"}} alt='' /></div>
            <div><img id="secondImage" src="" style={{width: "15vw"}} alt='' /></div>
            <div><img id="thirdImage" src="" style={{width: "15vw"}} alt=''/></div>
          </div>
        </div>
      </div>

    );
}
var obTimeOut; // clearTimeout() 함수를 이용하여 Timeout 을 취소하기위해 사용됨
    const objectArray = new Array();
    objectArray[0] =
      'https://images.prismic.io/instrument-v5/9553e9d3-479d-484f-abee-1bd994f184b5_mercy-corps.png?auto=compress,format&w=640&dpr=1';
    objectArray[1] =
      'https://images.prismic.io/instrument-v5/790b303d-cc72-4a84-aeb6-a88ddc4b3897_ebay.png?auto=compress,format&w=640&dpr=1';
    objectArray[2] =
      'https://images.prismic.io/instrument-v5/840a8ea3-fbbf-4887-8c41-3b027c5cf308_tumblr.png?auto=compress,format&w=640&dpr=1';
    objectArray[3] =
      'https://images.prismic.io/instrument-v5/57196db5-7fee-4ba6-969e-390b5b1e1f41_spotify.png?auto=compress,format&w=640&dpr=1';
    objectArray[4] =
      'https://images.prismic.io/instrument-v5/1931b346-2c71-417f-8b67-eda4d7cad686_patagonia.png?auto=compress,format&w=640&dpr=1';
    objectArray[5] =
      'https://images.prismic.io/instrument-v5/c6fefaec-e49c-41ff-a372-0714a4f2b631_airbnb.png?auto=compress,format&w=640&dpr=1';
    objectArray[6] =
      'https://images.prismic.io/instrument-v5/bb20339a-c823-46b2-95eb-2ba9d6bfeba8_path.png?auto=compress,format&w=640&dpr=1';
    objectArray[7] =
      'https://images.prismic.io/instrument-v5/8ee7bd0e-4dad-4373-ab84-ff24c6d7f3e5_yeti.png?auto=compress,format&w=640&dpr=1';
    objectArray[8] =
      'https://images.prismic.io/instrument-v5/f70f8472-5bb3-4c7b-bf06-2da4e2d5e771_samsung.png?auto=compress,format&w=640&dpr=1';
    objectArray[9] =
      'https://images.prismic.io/instrument-v5/979a9dff-e6a1-4a2a-8b52-8fd931d66199_netflix.png?auto=compress,format&w=640&dpr=1';
    objectArray[10] =
      'https://images.prismic.io/instrument-v5/94dc684b-ad1d-4edc-a9a7-8c5874451a1e_youtube.png?auto=compress,format&w=640&dpr=1';

    let nObjectCnt1 = 0;
    function showDefaultRotate() {
      nObjectCnt1++;
      if (nObjectCnt1 < objectArray.length) {
        document.getElementById('firstImage').src = objectArray[nObjectCnt1];
        setTimeout('showDefaultRotate2()', 500);
      } else {
        nObjectCnt1 = 0;
        nObjectCnt2 = 0;
        nObjectCnt3 = 0;
        startAnimation();
      }
    }
    let nObjectCnt2 = 0;

    function showDefaultRotate2() {
      nObjectCnt2++;
      if (nObjectCnt2 < objectArray.length) {
        document.getElementById('secondImage').src = objectArray[Math.floor(Math.random() * 6)];
        setTimeout('showDefaultRotate3()', 500); // 1초후에 3을 호출 . 배열의 갯수 이내일때만 실행
      } else {
        nObjectCnt3 = 0;
      }
    }
    let nObjectCnt3 = 0;
    function showDefaultRotate3() {
      nObjectCnt3++;
      if (nObjectCnt3 < objectArray.length) {
        document.getElementById('thirdImage').src = objectArray[nObjectCnt3 - 1];
        setTimeout('showDefaultRotate()', 500);
      } else {
        nObjectCnt1 = 0;
      }
    }

    function startAnimation() {
      obTimeOut = window.setTimeout(showDefaultRotate, 100); // 윈도우 로드 후 0.1초 후에 반복함수를 호출합니다.
    }
    window.onload = startAnimation; // 윈도우 로드시 이미지 변환함수 실행

export default Section8;