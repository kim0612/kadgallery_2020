import ImageGallery from 'react-image-gallery';

import '../../scss/individual.scss';

import ai1_1 from '../../img/project/StudioAi/Ai_1/1.jpg';
import ai1_2 from '../../img/project/StudioAi/Ai_1/2.jpg';
import ai1_3 from '../../img/project/StudioAi/Ai_1/3.jpg';
import ai1_4 from '../../img/project/StudioAi/Ai_1/4.jpg';
import ai1_5 from '../../img/project/StudioAi/Ai_1/5.jpg';
import ai1_6 from '../../img/project/StudioAi/Ai_1/6.jpg';
import ai1_7 from '../../img/project/StudioAi/Ai_1/7.jpg';
import ai1_8 from '../../img/project/StudioAi/Ai_1/8.jpg';
import ai1_9 from '../../img/project/StudioAi/Ai_1/9.jpg';
import ai1_10 from '../../img/project/StudioAi/Ai_1/10.jpg';
import ai1_11 from '../../img/project/StudioAi/Ai_1/11.jpg';
import ai1_12 from '../../img/project/StudioAi/Ai_1/12.jpg';
import ai1_13 from '../../img/project/StudioAi/Ai_1/13.jpg';
import ai1_14 from '../../img/project/StudioAi/Ai_1/14.jpg';
import ai1_15 from '../../img/project/StudioAi/Ai_1/15.jpg';
import ai1_16 from '../../img/project/StudioAi/Ai_1/16.jpg';
import ai1_17 from '../../img/project/StudioAi/Ai_1/17.jpg';
import ai1_18 from '../../img/project/StudioAi/Ai_1/18.jpg';
import ai1_19 from '../../img/project/StudioAi/Ai_1/19.jpg';


const images = [
  {
    original: ai1_2,
    thumbnail: ai1_2,
  },{
    original: ai1_3,
    thumbnail: ai1_3,
  },{
    original: ai1_4,
    thumbnail: ai1_4,
  },{
    original: ai1_5,
    thumbnail: ai1_5,
  },{
    original: ai1_6,
    thumbnail: ai1_6,
  },{
    original: ai1_7,
    thumbnail: ai1_7,
  },{
    original: ai1_8,
    thumbnail: ai1_8,
  },{
    original: ai1_9,
    thumbnail: ai1_9,
  },{
    original: ai1_10,
    thumbnail: ai1_10,
  },{
    original: ai1_11,
    thumbnail: ai1_11,
  },{
    original: ai1_12,
    thumbnail: ai1_12,
  },{
    original: ai1_13,
    thumbnail: ai1_13,
  },{
    original: ai1_14,
    thumbnail: ai1_14,
  },{
    original: ai1_15,
    thumbnail: ai1_15,
  },{
    original: ai1_16,
    thumbnail: ai1_16,
  },{
    original: ai1_17,
    thumbnail: ai1_17,
  },
  {
    original: ai1_18,
    thumbnail: ai1_18,
  },{
    original: ai1_19,
    thumbnail: ai1_19,
  }
];

function Ai1(){
  return(
    <div className='individual'>
      
      <img className="mainimg" src={ai1_1} alt={"asdf"}/>

      <div className="scription">
        <div className="title">
          "예술가들을 위한 예술공간"
        </div>
        <div className="author">
        오은비
        </div>
        <div className="subs">
        이 건축물은 내가 뮤지컬을 하던 때, 예술가들의 공간에 대해 많이 생각해왔다. 
예술가들은 '자기 자신만의 공간'이 필요함과 동시에 다른사람들에게 자신의 예술을 '보여줘야할 공간' 또한 필요하다. 
그래서 예술가가 많은 연희동과 연남동사이에 대지를 선정하고, 예술가만의 주거와 예술을 공유 할 공간이 공존하는 "예술의 랜드마크"를 계획했다.
        </div>
        <div className="_table">
          <div className="_line"/>
          <div className="xy">
            <div classname="x">대지면적</div>
            <div className="y">1,140m²</div>
          </div>
          <hr/>
          {/* <div className="_line"/> */}
          <div className="xy">
            <div classname="x">대지위치</div>
            <div className="y">서울시 서대문구 연희동 446-274 외3필지</div>
          </div>
          {/* <div className="_line"/> */}
          <hr/>
          <div className="xy">
            <div classname="x">지역지구</div>
            <div className="y">제2종전용주거지역</div>
          </div>
          {/* <div className="_line"/> */}
          <hr/>
          <div className="xy">
            <div classname="x">주용도</div>
            <div className="y">스튜디오+주거</div>
          </div>
          {/* <div className="_line"/> */}
          <hr/>
          <div className="xy">
            <div classname="x">규모</div>
            <div className="y">지하 3층 지상 6층</div>
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

export default Ai1;