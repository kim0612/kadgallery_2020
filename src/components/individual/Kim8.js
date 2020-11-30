import ImageGallery from 'react-image-gallery';

import '../../scss/individual.scss';

import kim8_1 from '../../img/project/StudioKim/Kim_8/1.jpg';
import kim8_2 from '../../img/project/StudioKim/Kim_8/2.jpg';
import kim8_3 from '../../img/project/StudioKim/Kim_8/3.jpg';
import kim8_4 from '../../img/project/StudioKim/Kim_8/4.jpg';
import kim8_5 from '../../img/project/StudioKim/Kim_8/5.jpg';
import kim8_6 from '../../img/project/StudioKim/Kim_8/6.jpg';
import kim8_7 from '../../img/project/StudioKim/Kim_8/7.jpg';
import kim8_8 from '../../img/project/StudioKim/Kim_8/8.jpg';
import kim8_9 from '../../img/project/StudioKim/Kim_8/9.jpg';
import kim8_10 from '../../img/project/StudioKim/Kim_8/10.jpg';
import kim8_11 from '../../img/project/StudioKim/Kim_8/11.jpg';
import kim8_12 from '../../img/project/StudioKim/Kim_8/12.jpg';
import kim8_13 from '../../img/project/StudioKim/Kim_8/13.jpg';
import kim8_14 from '../../img/project/StudioKim/Kim_8/14.jpg';
import kim8_15 from '../../img/project/StudioKim/Kim_8/15.jpg';
import kim8_16 from '../../img/project/StudioKim/Kim_8/16.jpg';
import kim8_17 from '../../img/project/StudioKim/Kim_8/17.jpg';
import kim8_18 from '../../img/project/StudioKim/Kim_8/18.jpg';
import kim8_19 from '../../img/project/StudioKim/Kim_8/19.jpg';
import kim8_20 from '../../img/project/StudioKim/Kim_8/20.jpg';

const images = [
  {
    original: kim8_2,
    thumbnail: kim8_2,
  },{
    original: kim8_3,
    thumbnail: kim8_3,
  },{
    original: kim8_4,
    thumbnail: kim8_4,
  },{
    original: kim8_5,
    thumbnail: kim8_5,
  },{
    original: kim8_6,
    thumbnail: kim8_6,
  },{
    original: kim8_7,
    thumbnail: kim8_7,
  },{
    original: kim8_8,
    thumbnail: kim8_8,
  },{
    original: kim8_9,
    thumbnail: kim8_9,
  },{
    original: kim8_10,
    thumbnail: kim8_10,
  },{
    original: kim8_11,
    thumbnail: kim8_11,
  },{
    original: kim8_12,
    thumbnail: kim8_12,
  },{
    original: kim8_13,
    thumbnail: kim8_13,
  },{
    original: kim8_14,
    thumbnail: kim8_14,
  },{
    original: kim8_15,
    thumbnail: kim8_15,
  },{
    original: kim8_16,
    thumbnail: kim8_16,
  },{
    original: kim8_17,
    thumbnail: kim8_17,
  },
  {
    original: kim8_18,
    thumbnail: kim8_18,
  },{
    original: kim8_19,
    thumbnail: kim8_19,
  },{
    original: kim8_20,
    thumbnail: kim8_20,
  }
];

function kim8(){
  return(
    <div className='individual'>
      
      <img className="mainimg" src={kim8_1} alt={"asdf"}/>

      <div className="scription">
        <div className="title">
          "화훼마을"
        </div>
        <div className="author">
        이유나
        </div>
        <div className="subs">
        화훼원예식물 농업을 목적으로 형성된 무허가 집단촌인 화훼마을은 투기로 인한 분쟁등이 생기면서 정체성을 잃은 상태이다. 비포장 도로, 둘러진 펜스, 마을 주민들은 열악한 환경 속에서 생활하고 있다. 또한, 외곽순환고속도로로 생긴 소음과 닫힌 시야를 해결하고 마을의 정체성을 되살리며 마을 주민과 화훼관련 예술가들을 위한 공간을 마련하였다.        </div>
        <div className="_table">
          <div className="_line"/>
          <div className="xy">
            <div classname="x">대지면적</div>
            <div className="y">9,000m²</div>
          </div>
          <hr/>
          {/* <div className="_line"/> */}
          <div className="xy">
            <div classname="x">대지위치</div>
            <div className="y">송파구 장지동 596-5일대</div>
          </div>
          {/* <div className="_line"/> */}
          <hr/>
          <div className="xy">
            <div classname="x">지역지구</div>
            <div className="y">도시지역, 녹지지역</div>
          </div>
          {/* <div className="_line"/> */}
          <hr/>
          <div className="xy">
            <div classname="x">주용도</div>
            <div className="y">복합 문화시설, 주거시설</div>
          </div>
          {/* <div className="_line"/> */}
          <hr/>
          <div className="xy">
            <div classname="x">규모</div>
            <div className="y">12500m² | 지하 3층, 지상 6층</div>
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

export default kim8;