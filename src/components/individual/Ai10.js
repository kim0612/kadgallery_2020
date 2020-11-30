import ImageGallery from 'react-image-gallery';

import '../../scss/individual.scss';

import ai10_1 from '../../img/project/StudioAi/Ai_10/1.jpg';
import ai10_2 from '../../img/project/StudioAi/Ai_10/2.jpg';
import ai10_3 from '../../img/project/StudioAi/Ai_10/3.jpg';
import ai10_4 from '../../img/project/StudioAi/Ai_10/4.jpg';
import ai10_5 from '../../img/project/StudioAi/Ai_10/5.jpg';
import ai10_6 from '../../img/project/StudioAi/Ai_10/6.jpg';
import ai10_7 from '../../img/project/StudioAi/Ai_10/7.jpg';
import ai10_8 from '../../img/project/StudioAi/Ai_10/8.jpg';
import ai10_9 from '../../img/project/StudioAi/Ai_10/9.jpg';
import ai10_10 from '../../img/project/StudioAi/Ai_10/10.jpg';
import ai10_11 from '../../img/project/StudioAi/Ai_10/11.jpg';
import ai10_12 from '../../img/project/StudioAi/Ai_10/12.jpg';
import ai10_13 from '../../img/project/StudioAi/Ai_10/13.jpg';
import ai10_14 from '../../img/project/StudioAi/Ai_10/14.jpg';
import ai10_15 from '../../img/project/StudioAi/Ai_10/15.jpg';


const images = [
  {
    original: ai10_2,
    thumbnail: ai10_2,
  },{
    original: ai10_3,
    thumbnail: ai10_3,
  },{
    original: ai10_4,
    thumbnail: ai10_4,
  },{
    original: ai10_5,
    thumbnail: ai10_5,
  },{
    original: ai10_6,
    thumbnail: ai10_6,
  },{
    original: ai10_7,
    thumbnail: ai10_7,
  },{
    original: ai10_8,
    thumbnail: ai10_8,
  },{
    original: ai10_9,
    thumbnail: ai10_9,
  },{
    original: ai10_10,
    thumbnail: ai10_10,
  },{
    original: ai10_11,
    thumbnail: ai10_11,
  },{
    original: ai10_12,
    thumbnail: ai10_12,
  },{
    original: ai10_13,
    thumbnail: ai10_13,
  },{
    original: ai10_14,
    thumbnail: ai10_14,
  },{
    original: ai10_15,
    thumbnail: ai10_15,
  }
];

function Ai10(){
  return(
    <div className='individual'>
      
      <img className="mainimg" src={ai10_1} alt={"asdf"}/>

      <div className="scription">
        <div className="title">
          "기억의 조각"
        </div>
        <div className="author">
        이다영
        </div>
        <div className="subs">
        꾸밈 없었으면 좋겠다 딱딱해보일법한 담백함 만이 내가 그들에게 할 수 있는 유일한 말이다
꾸며진 말들을 나는 할 수 없었다. 
기억에 대한 다양한 고찰을 담은 다이어그램들은 건축 요소들로 치환 된다
물직한 덩어리에 새어들어오는 빛과 그때를 회상시켜 주는 물소리, 나를 조이고 늘어지게 하는 빛을 담은 공간만이 
있었으면 좋겠따
아직 풀리지 않은 의문들 처럼 큰 벽을 마주한 사람들 ,작은 문틈, 꼬여진 입구가 꾸밈 없이 위로하고자 했던
나의 마음을 대변해주길 바란다.
        </div>
        <div className="_table">
          <div className="_line"/>
          <div className="xy">
            <div classname="x">대지면적</div>
            <div className="y">33,228m²</div>
          </div>
          <hr/>
          {/* <div className="_line"/> */}
          <div className="xy">
            <div classname="x">대지위치</div>
            <div className="y">경기도 안산시 단원구 산 49-1, 산 81-6외 3필</div>
          </div>
          {/* <div className="_line"/> */}
          <hr/>
          <div className="xy">
            <div classname="x">지역지구</div>
            <div className="y">산</div>
          </div>
          {/* <div className="_line"/> */}
          <hr/>
          <div className="xy">
            <div classname="x">주용도</div>
            <div className="y">추모관</div>
          </div>
          {/* <div className="_line"/> */}
          <hr/>
          <div className="xy">
            <div classname="x">규모</div>
            <div className="y">6,768m²</div>
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

export default Ai10;