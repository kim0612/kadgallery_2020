import ImageGallery from 'react-image-gallery';

import '../../scss/individual.scss';

import ai8_1 from '../../img/project/StudioAi/Ai_8/1.jpg';
import ai8_2 from '../../img/project/StudioAi/Ai_8/2.jpg';
import ai8_3 from '../../img/project/StudioAi/Ai_8/3.jpg';
import ai8_4 from '../../img/project/StudioAi/Ai_8/4.jpg';
import ai8_5 from '../../img/project/StudioAi/Ai_8/5.jpg';
import ai8_6 from '../../img/project/StudioAi/Ai_8/6.jpg';
import ai8_7 from '../../img/project/StudioAi/Ai_8/7.jpg';
import ai8_8 from '../../img/project/StudioAi/Ai_8/8.jpg';
import ai8_9 from '../../img/project/StudioAi/Ai_8/9.jpg';
import ai8_10 from '../../img/project/StudioAi/Ai_8/10.jpg';
import ai8_11 from '../../img/project/StudioAi/Ai_8/11.jpg';
import ai8_12 from '../../img/project/StudioAi/Ai_8/12.jpg';
import ai8_13 from '../../img/project/StudioAi/Ai_8/13.jpg';
import ai8_14 from '../../img/project/StudioAi/Ai_8/14.jpg';
import ai8_15 from '../../img/project/StudioAi/Ai_8/15.jpg';
import ai8_16 from '../../img/project/StudioAi/Ai_8/16.jpg';
import ai8_17 from '../../img/project/StudioAi/Ai_8/17.jpg';
import ai8_18 from '../../img/project/StudioAi/Ai_8/18.jpg';
import ai8_19 from '../../img/project/StudioAi/Ai_8/19.jpg';
import ai8_20 from '../../img/project/StudioAi/Ai_8/20.jpg';
import ai8_21 from '../../img/project/StudioAi/Ai_8/21.jpg';
import ai8_22 from '../../img/project/StudioAi/Ai_8/22.jpg';
import ai8_23 from '../../img/project/StudioAi/Ai_8/23.jpg';
import ai8_24 from '../../img/project/StudioAi/Ai_8/24.jpg';
import ai8_25 from '../../img/project/StudioAi/Ai_8/25.jpg';
import ai8_26 from '../../img/project/StudioAi/Ai_8/26.jpg';
import ai8_27 from '../../img/project/StudioAi/Ai_8/27.jpg';
import ai8_28 from '../../img/project/StudioAi/Ai_8/28.jpg';
import ai8_29 from '../../img/project/StudioAi/Ai_8/29.jpg';
import ai8_30 from '../../img/project/StudioAi/Ai_8/30.jpg';
import ai8_31 from '../../img/project/StudioAi/Ai_8/31.jpg';
import ai8_32 from '../../img/project/StudioAi/Ai_8/32.jpg';
import ai8_33 from '../../img/project/StudioAi/Ai_8/33.jpg';
import ai8_34 from '../../img/project/StudioAi/Ai_8/34.jpg';
import ai8_35 from '../../img/project/StudioAi/Ai_8/35.jpg';
import ai8_36 from '../../img/project/StudioAi/Ai_8/36.jpg';


const images = [
  {
    original: ai8_2,
    thumbnail: ai8_2,
  },{
    original: ai8_3,
    thumbnail: ai8_3,
  },{
    original: ai8_4,
    thumbnail: ai8_4,
  },{
    original: ai8_5,
    thumbnail: ai8_5,
  },{
    original: ai8_6,
    thumbnail: ai8_6,
  },{
    original: ai8_7,
    thumbnail: ai8_7,
  },{
    original: ai8_8,
    thumbnail: ai8_8,
  },{
    original: ai8_9,
    thumbnail: ai8_9,
  },{
    original: ai8_10,
    thumbnail: ai8_10,
  },{
    original: ai8_11,
    thumbnail: ai8_11,
  },{
    original: ai8_12,
    thumbnail: ai8_12,
  },{
    original: ai8_13,
    thumbnail: ai8_13,
  },{
    original: ai8_14,
    thumbnail: ai8_14,
  },{
    original: ai8_15,
    thumbnail: ai8_15,
  },{
    original: ai8_16,
    thumbnail: ai8_16,
  },{
    original: ai8_17,
    thumbnail: ai8_17,
  },
  {
    original: ai8_18,
    thumbnail: ai8_18,
  },{
    original: ai8_19,
    thumbnail: ai8_19,
  },{
    original: ai8_20,
    thumbnail: ai8_20,
  },{
    original: ai8_21,
    thumbnail: ai8_21,
  },{
    original: ai8_22,
    thumbnail: ai8_22,
  },{
    original: ai8_23,
    thumbnail: ai8_23,
  },{
    original: ai8_24,
    thumbnail: ai8_24,
  },{
    original: ai8_25,
    thumbnail: ai8_25,
  },{
    original: ai8_26,
    thumbnail: ai8_26,
  },{
    original: ai8_27,
    thumbnail: ai8_27,
  },
  {
    original: ai8_28,
    thumbnail: ai8_28,
  },{
    original: ai8_29,
    thumbnail: ai8_29,
  },{
    original: ai8_30,
    thumbnail: ai8_30,
  },{
    original: ai8_31,
    thumbnail: ai8_31,
  },{
    original: ai8_32,
    thumbnail: ai8_32,
  },{
    original: ai8_33,
    thumbnail: ai8_33,
  },{
    original: ai8_34,
    thumbnail: ai8_34,
  },{
    original: ai8_35,
    thumbnail: ai8_35,
  },{
    original: ai8_36,
    thumbnail: ai8_36,
  }
];

function Ai8(){
  return(
    <div className='individual'>
      
      <img className="mainimg" src={ai8_1} alt={"asdf"}/>

      <div className="scription">
        <div className="title">
          "Demilitarized"
        </div>
        <div className="author">
        김현호
        </div>
        <div className="subs">
        남북 전쟁 이후 비무장지대는 비무장화를 약속한 곳이었다. 하지만 이는 지켜지지 않았고 오히려 가장 위험한 곳으로 선정되기도 한다. 

비무장지대에서의 망가지지 않은 깊숙한 자연은 수많은 위험들을 품고 있고 우리는 이런 위험요소들을 제거하되 그 상처와 궤적은 갖고있어야한다.
        </div>
        <div className="_table">
          <div className="_line"/>
          <div className="xy">
            <div classname="x">대지면적</div>
            <div className="y">2km*1km</div>
          </div>
          <hr/>
          {/* <div className="_line"/> */}
          <div className="xy">
            <div classname="x">대지위치</div>
            <div className="y">비무장지대 / 강원도 철원군 대마리 화살머리고지</div>
          </div>
          {/* <div className="_line"/> */}
          <hr/>
          <div className="xy">
            <div classname="x">지역지구</div>
            <div className="y">자연녹지지역</div>
          </div>
          {/* <div className="_line"/> */}
          <hr/>
          <div className="xy">
            <div classname="x">주용도</div>
            <div className="y">위령공원</div>
          </div>
          {/* <div className="_line"/> */}
          <hr/>
          <div className="xy">
            <div classname="x">규모</div>
            <div className="y">108,631.44m²</div>
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

export default Ai8;