import ImageGallery from 'react-image-gallery';

import '../../scss/individual.scss';

import ai4_1 from '../../img/project/StudioAi/Ai_4/1.jpg';
import ai4_2 from '../../img/project/StudioAi/Ai_4/2.jpg';
import ai4_3 from '../../img/project/StudioAi/Ai_4/3.jpg';
import ai4_4 from '../../img/project/StudioAi/Ai_4/4.jpg';
import ai4_5 from '../../img/project/StudioAi/Ai_4/5.jpg';
import ai4_6 from '../../img/project/StudioAi/Ai_4/6.jpg';
import ai4_7 from '../../img/project/StudioAi/Ai_4/7.jpg';
import ai4_8 from '../../img/project/StudioAi/Ai_4/8.jpg';
import ai4_9 from '../../img/project/StudioAi/Ai_4/9.jpg';
import ai4_10 from '../../img/project/StudioAi/Ai_4/10.jpg';
import ai4_11 from '../../img/project/StudioAi/Ai_4/11.jpg';
import ai4_12 from '../../img/project/StudioAi/Ai_4/12.jpg';
import ai4_13 from '../../img/project/StudioAi/Ai_4/13.jpg';
import ai4_14 from '../../img/project/StudioAi/Ai_4/14.jpg';
import ai4_15 from '../../img/project/StudioAi/Ai_4/15.jpg';


const images = [
  {
    original: ai4_2,
    thumbnail: ai4_2,
  },{
    original: ai4_3,
    thumbnail: ai4_3,
  },{
    original: ai4_4,
    thumbnail: ai4_4,
  },{
    original: ai4_5,
    thumbnail: ai4_5,
  },{
    original: ai4_6,
    thumbnail: ai4_6,
  },{
    original: ai4_7,
    thumbnail: ai4_7,
  },{
    original: ai4_8,
    thumbnail: ai4_8,
  },{
    original: ai4_9,
    thumbnail: ai4_9,
  },{
    original: ai4_10,
    thumbnail: ai4_10,
  },{
    original: ai4_11,
    thumbnail: ai4_11,
  },{
    original: ai4_12,
    thumbnail: ai4_12,
  },{
    original: ai4_13,
    thumbnail: ai4_13,
  },{
    original: ai4_14,
    thumbnail: ai4_14,
  },{
    original: ai4_15,
    thumbnail: ai4_15,
  }
];

function Ai4(){
  return(
    <div className='individual'>
      
      <img className="mainimg" src={ai4_1} alt={"asdf"}/>

      <div className="scription">
        <div className="title">
          "소품집"
        </div>
        <div className="author">
        박채원
        </div>
        <div className="subs">
        소품집이란 클래식 음악 용어로, 하나의 주제 안에 여러 개의 소곡이 담겨 있는 것을 말한다. 소품집의 의미를 빌어와, 하나의 공간에 다섯 명의 작가들의 아이덴티티가 자연스럽게 녹아들 수 있게 하였다. 그리드를 사용해 각자의 영역을 지킴과 동시에 소통할 수 있도록 제안한다. 한 공간 안에서 각자의 마을을 형성하듯 건물 내부에서 개개인의 공간을 분절하였다.
        </div>
        <div className="_table">
          <div className="_line"/>
          <div className="xy">
            <div classname="x">대지면적</div>
            <div className="y">1196.4m²</div>
          </div>
          <hr/>
          {/* <div className="_line"/> */}
          <div className="xy">
            <div classname="x">대지위치</div>
            <div className="y">서울특별시 용산구 한남동 738-1,738-4,738-24,738-25,738-27</div>
          </div>
          {/* <div className="_line"/> */}
          <hr/>
          <div className="xy">
            <div classname="x">지역지구</div>
            <div className="y">제 1종 일반주거지역, 제2종 일반주거지역</div>
          </div>
          {/* <div className="_line"/> */}
          <hr/>
          <div className="xy">
            <div classname="x">주용도</div>
            <div className="y">주거, 작업공간</div>
          </div>
          {/* <div className="_line"/> */}
          <hr/>
          <div className="xy">
            <div classname="x">규모</div>
            <div className="y">연면적 2883.3m² | 건축면적925m²</div>
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

export default Ai4;