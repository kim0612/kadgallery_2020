import ImageGallery from 'react-image-gallery';

import '../../scss/individual.scss';

import han8_1 from '../../img/project/StudioHan/Han_8/1.jpg';
import han8_2 from '../../img/project/StudioHan/Han_8/2.jpg';
import han8_3 from '../../img/project/StudioHan/Han_8/3.jpg';
import han8_4 from '../../img/project/StudioHan/Han_8/4.jpg';
import han8_5 from '../../img/project/StudioHan/Han_8/5.jpg';
import han8_6 from '../../img/project/StudioHan/Han_8/6.jpg';
import han8_7 from '../../img/project/StudioHan/Han_8/7.jpg';
import han8_8 from '../../img/project/StudioHan/Han_8/8.jpg';
import han8_9 from '../../img/project/StudioHan/Han_8/9.jpg';
import han8_10 from '../../img/project/StudioHan/Han_8/10.jpg';
import han8_11 from '../../img/project/StudioHan/Han_8/11.jpg';
import han8_12 from '../../img/project/StudioHan/Han_8/12.jpg';
import han8_13 from '../../img/project/StudioHan/Han_8/13.jpg';


const images = [
  {
    original: han8_2,
    thumbnail: han8_2,
  },{
    original: han8_3,
    thumbnail: han8_3,
  },{
    original: han8_4,
    thumbnail: han8_4,
  },{
    original: han8_5,
    thumbnail: han8_5,
  },{
    original: han8_6,
    thumbnail: han8_6,
  },{
    original: han8_7,
    thumbnail: han8_7,
  },{
    original: han8_8,
    thumbnail: han8_8,
  },{
    original: han8_9,
    thumbnail: han8_9,
  },{
    original: han8_10,
    thumbnail: han8_10,
  },{
    original: han8_11,
    thumbnail: han8_11,
  },{
    original: han8_12,
    thumbnail: han8_12,
  },{
    original: han8_13,
    thumbnail: han8_13,
  }
];

function Han8(){
  return(
    <div className='individual'>
      
      <img className="mainimg" src={han8_1} alt={"asdf"}/>

      <div className="scription">
        <div className="title">
          "AND, GATHER(그리고, 모이다)"
        </div>
        <div className="author">
        유지은
        </div>
        <div className="subs">
        영등포구 , 서울시 25개 자치구중 평지 비율이 가장 높은구이다. 녹지대가 거의 없어 회색도시라는 별명이 붙었다.
사이트인 양평1동은 일제시대때부터 시가지로서 군수물품 생산 공급을 위해 도시의 그리드가 확실해진 곳이다. 이후 현재까지 공장 상업지구로 개발이 되었다.
낡은 단독주택과 공장이 뒤섞인곳, 양평동 일대에 부족한 문화 인프라를 확충, 문화 갈등 해소와 함께 젊은 예술가들에게 일터와 쉼터의 공존을 제공하려 한다.        </div>
        <div className="_table">
          <div className="_line"/>
          <div className="xy">
            <div classname="x">대지면적</div>
            <div className="y">2,818m²</div>
          </div>
          <hr/>
          {/* <div className="_line"/> */}
          <div className="xy">
            <div classname="x">대지위치</div>
            <div className="y">영등포구 양평동2가 33-1</div>
          </div>
          {/* <div className="_line"/> */}
          <hr/>
          <div className="xy">
            <div classname="x">지역지구</div>
            <div className="y">준공업지역</div>
          </div>
          {/* <div className="_line"/> */}
          <hr/>
          <div className="xy">
            <div classname="x">주용도</div>
            <div className="y">복합문화시설</div>
          </div>
          {/* <div className="_line"/> */}
          <hr/>
          <div className="xy">
            <div classname="x">규모</div>
            <div className="y"></div>
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

export default Han8;