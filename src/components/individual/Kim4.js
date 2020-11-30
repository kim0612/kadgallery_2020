import ImageGallery from 'react-image-gallery';

import '../../scss/individual.scss';

import kim4_1 from '../../img/project/StudioKim/Kim_4/1.jpg';
import kim4_2 from '../../img/project/StudioKim/Kim_4/2.jpg';
import kim4_3 from '../../img/project/StudioKim/Kim_4/3.jpg';
import kim4_4 from '../../img/project/StudioKim/Kim_4/4.jpg';
import kim4_5 from '../../img/project/StudioKim/Kim_4/5.jpg';
import kim4_6 from '../../img/project/StudioKim/Kim_4/6.jpg';
import kim4_7 from '../../img/project/StudioKim/Kim_4/7.jpg';
import kim4_8 from '../../img/project/StudioKim/Kim_4/8.jpg';
import kim4_9 from '../../img/project/StudioKim/Kim_4/9.jpg';
import kim4_10 from '../../img/project/StudioKim/Kim_4/10.jpg';
import kim4_11 from '../../img/project/StudioKim/Kim_4/11.jpg';
import kim4_12 from '../../img/project/StudioKim/Kim_4/12.jpg';
import kim4_13 from '../../img/project/StudioKim/Kim_4/13.jpg';
import kim4_14 from '../../img/project/StudioKim/Kim_4/14.jpg';
import kim4_15 from '../../img/project/StudioKim/Kim_4/15.jpg';
import kim4_16 from '../../img/project/StudioKim/Kim_4/16.jpg';
import kim4_17 from '../../img/project/StudioKim/Kim_4/17.jpg';
import kim4_18 from '../../img/project/StudioKim/Kim_4/18.jpg';
import kim4_19 from '../../img/project/StudioKim/Kim_4/19.jpg';
import kim4_20 from '../../img/project/StudioKim/Kim_4/20.jpg';
import kim4_21 from '../../img/project/StudioKim/Kim_4/21.jpg';
import kim4_22 from '../../img/project/StudioKim/Kim_4/22.jpg';
import kim4_23 from '../../img/project/StudioKim/Kim_4/23.jpg';
import kim4_24 from '../../img/project/StudioKim/Kim_4/24.jpg';
import kim4_25 from '../../img/project/StudioKim/Kim_4/25.jpg';
import kim4_26 from '../../img/project/StudioKim/Kim_4/26.jpg';
import kim4_27 from '../../img/project/StudioKim/Kim_4/27.jpg';

const images = [
  {
    original: kim4_2,
    thumbnail: kim4_2,
  },{
    original: kim4_3,
    thumbnail: kim4_3,
  },{
    original: kim4_4,
    thumbnail: kim4_4,
  },{
    original: kim4_5,
    thumbnail: kim4_5,
  },{
    original: kim4_6,
    thumbnail: kim4_6,
  },{
    original: kim4_7,
    thumbnail: kim4_7,
  },{
    original: kim4_8,
    thumbnail: kim4_8,
  },{
    original: kim4_9,
    thumbnail: kim4_9,
  },{
    original: kim4_10,
    thumbnail: kim4_10,
  },{
    original: kim4_11,
    thumbnail: kim4_11,
  },{
    original: kim4_12,
    thumbnail: kim4_12,
  },{
    original: kim4_13,
    thumbnail: kim4_13,
  },{
    original: kim4_14,
    thumbnail: kim4_14,
  },{
    original: kim4_15,
    thumbnail: kim4_15,
  },{
    original: kim4_16,
    thumbnail: kim4_16,
  },{
    original: kim4_17,
    thumbnail: kim4_17,
  },
  {
    original: kim4_18,
    thumbnail: kim4_18,
  },{
    original: kim4_19,
    thumbnail: kim4_19,
  },{
    original: kim4_20,
    thumbnail: kim4_20,
  },{
    original: kim4_21,
    thumbnail: kim4_21,
  },{
    original: kim4_22,
    thumbnail: kim4_22,
  },{
    original: kim4_23,
    thumbnail: kim4_23,
  },{
    original: kim4_24,
    thumbnail: kim4_24,
  },{
    original: kim4_25,
    thumbnail: kim4_25,
  },{
    original: kim4_26,
    thumbnail: kim4_26,
  },{
    original: kim4_27,
    thumbnail: kim4_27,
  }
];

function kim4(){
  return(
    <div className='individual'>
      
      <img className="mainimg" src={kim4_1} alt={"asdf"}/>

      <div className="scription">
        <div className="title">
          "安息處"
        </div>
        <div className="author">
        박하림
        </div>
        <div className="subs">
        봉안당이라는 주제에서 중요한 것은 경계라고 생각했다.
하동송림과 나의 대지 사이에 섬진강이라는 경계가 존재하고
하동송림-다리(경계)-나의 대지까지 동선으로 연결하고자 했다.
건물의 지붕은 경사로로 이용할 수 있고
멀리서 봤을 때 땅의 등고에 가려져 봉안당이라는 혐오 시설이 안 느껴 지도로 설계하였다.
뒤에 수목장은 하동송림과 마주 보며 연결되게 설계했다.        </div>
        <div className="_table">
          <div className="_line"/>
          <div className="xy">
            <div classname="x">대지면적</div>
            <div className="y">13,855m²</div>
          </div>
          <hr/>
          {/* <div className="_line"/> */}
          <div className="xy">
            <div classname="x">대지위치</div>
            <div className="y">전라남도 광양시 다압면 신원리 295 다압면 신원리 295번지 일대</div>
          </div>
          {/* <div className="_line"/> */}
          <hr/>
          <div className="xy">
            <div classname="x">지역지구</div>
            <div className="y">준보전관리지역,산</div>
          </div>
          {/* <div className="_line"/> */}
          <hr/>
          <div className="xy">
            <div classname="x">주용도</div>
            <div className="y">봉안당,추모시설</div>
          </div>
          {/* <div className="_line"/> */}
          <hr/>
          <div className="xy">
            <div classname="x">규모</div>
            <div className="y">4998.82m²</div>
          </div>
          <div className="_line"/>
        </div>
      </div>

      <div className="imgset">
        <ImageGallery items={images} showPlayButton={false}/>
      </div>


    </div>
  );
}

export default kim4;