import ImageGallery from 'react-image-gallery';

import '../../scss/individual.scss';

import ai2_1 from '../../img/project/StudioAi/Ai_2/1.jpg';
import ai2_2 from '../../img/project/StudioAi/Ai_2/2.jpg';
import ai2_3 from '../../img/project/StudioAi/Ai_2/3.jpg';
import ai2_4 from '../../img/project/StudioAi/Ai_2/4.jpg';
import ai2_5 from '../../img/project/StudioAi/Ai_2/5.jpg';
import ai2_6 from '../../img/project/StudioAi/Ai_2/6.jpg';
import ai2_7 from '../../img/project/StudioAi/Ai_2/7.jpg';
import ai2_8 from '../../img/project/StudioAi/Ai_2/8.jpg';
import ai2_9 from '../../img/project/StudioAi/Ai_2/9.jpg';
import ai2_10 from '../../img/project/StudioAi/Ai_2/10.jpg';
import ai2_11 from '../../img/project/StudioAi/Ai_2/11.jpg';
import ai2_12 from '../../img/project/StudioAi/Ai_2/12.jpg';
import ai2_13 from '../../img/project/StudioAi/Ai_2/13.jpg';


const images = [
  {
    original: ai2_2,
    thumbnail: ai2_2,
  },{
    original: ai2_3,
    thumbnail: ai2_3,
  },{
    original: ai2_4,
    thumbnail: ai2_4,
  },{
    original: ai2_5,
    thumbnail: ai2_5,
  },{
    original: ai2_6,
    thumbnail: ai2_6,
  },{
    original: ai2_7,
    thumbnail: ai2_7,
  },{
    original: ai2_8,
    thumbnail: ai2_8,
  },{
    original: ai2_9,
    thumbnail: ai2_9,
  },{
    original: ai2_10,
    thumbnail: ai2_10,
  },{
    original: ai2_11,
    thumbnail: ai2_11,
  },{
    original: ai2_12,
    thumbnail: ai2_12,
  },{
    original: ai2_13,
    thumbnail: ai2_13,
  }
];

function Ai2(){
  return(
    <div className='individual'>
      
      <img className="mainimg" src={ai2_1} alt={"asdf"}/>

      <div className="scription">
        <div className="title">
          "Active senior Fashion Designer＆Model Entertainment"
        </div>
        <div className="author">
        김예진
        </div>
        <div className="subs">
        표상을 통해 환대하다.<br/>
            다른 시니어들이 나이 들어가는 것과 다르게 두명의 시니어들은 액티브시니어라는 새로운 사회적 역할에 문을 열고 젊은 사람들이 많은 곳에 들어가 자신의 위치를 찾아가면서, 다른 시니어들이 따라들어올 수 있도록 한다. 사회 안에서 그들은 사람들을 즐겁게 해주고 환영해주며, 그에 따라 노인들은 사회에서 환영 받는다. 
        </div>
        <div className="_table">
          <div className="_line"/>
          <div className="xy">
            <div classname="x">대지면적</div>
            <div className="y">2624.4m²</div>
          </div>
          <hr/>
          {/* <div className="_line"/> */}
          <div className="xy">
            <div classname="x">대지위치</div>
            <div className="y">서울특별시 종로구 창신동 444-14외 15필지</div>
          </div>
          {/* <div className="_line"/> */}
          <hr/>
          <div className="xy">
            <div classname="x">지역지구</div>
            <div className="y">일반상업지역, 역사도심</div>
          </div>
          {/* <div className="_line"/> */}
          <hr/>
          <div className="xy">
            <div classname="x">주용도</div>
            <div className="y">제2종 근린생활시설, 시니어 모델, 디자이너 사무실</div>
          </div>
          {/* <div className="_line"/> */}
          <hr/>
          <div className="xy">
            <div classname="x">규모</div>
            <div className="y">6,258m²</div>
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

export default Ai2;