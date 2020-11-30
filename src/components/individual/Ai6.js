import ImageGallery from 'react-image-gallery';

import '../../scss/individual.scss';

import ai6_1 from '../../img/project/StudioAi/Ai_6/1.jpg';
import ai6_2 from '../../img/project/StudioAi/Ai_6/2.jpg';
import ai6_3 from '../../img/project/StudioAi/Ai_6/3.jpg';
import ai6_4 from '../../img/project/StudioAi/Ai_6/4.jpg';
import ai6_5 from '../../img/project/StudioAi/Ai_6/5.jpg';
import ai6_6 from '../../img/project/StudioAi/Ai_6/6.jpg';
import ai6_7 from '../../img/project/StudioAi/Ai_6/7.jpg';
import ai6_8 from '../../img/project/StudioAi/Ai_6/8.jpg';
import ai6_9 from '../../img/project/StudioAi/Ai_6/9.jpg';
import ai6_10 from '../../img/project/StudioAi/Ai_6/10.jpg';


const images = [
  {
    original: ai6_2,
    thumbnail: ai6_2,
  },{
    original: ai6_3,
    thumbnail: ai6_3,
  },{
    original: ai6_4,
    thumbnail: ai6_4,
  },{
    original: ai6_5,
    thumbnail: ai6_5,
  },{
    original: ai6_6,
    thumbnail: ai6_6,
  },{
    original: ai6_7,
    thumbnail: ai6_7,
  },{
    original: ai6_8,
    thumbnail: ai6_8,
  },{
    original: ai6_9,
    thumbnail: ai6_9,
  },{
    original: ai6_10,
    thumbnail: ai6_10,
  }
];

function Ai6(){
  return(
    <div className='individual'>
      
      <img className="mainimg" src={ai6_1} alt={"asdf"}/>

      <div className="scription">
        <div className="title">
          "함께 움직이는 다독임"
        </div>
        <div className="author">
        이서영
        </div>
        <div className="subs">
        이웃과의 공동체 의식이 점점 줄어들고 있는 요즘 함께 일상을 나눌 수 있는 공원을 조성하고자 한다.
현 사이트는 경기도 시흥시 은행동에 위치한 공원으로, 구 주거지역과 신 주거지역 사이에 있다.
연령대 상관없이 가장 가까운 가족에서부터 시작하여, 주변 이웃들과 함께 생활과 마음을 나누며 
자연스럽게 가족적인 공동체 의식을 키워가고, 그것이  앞으로 나아가 지역 사람들 전체가 
보다 건강한 도시를 만들어 나아갈 수 있도록 한다.
        </div>
        <div className="_table">
          <div className="_line"/>
          <div className="xy">
            <div classname="x">대지면적</div>
            <div className="y">29,830m²</div>
          </div>
          <hr/>
          {/* <div className="_line"/> */}
          <div className="xy">
            <div classname="x">대지위치</div>
            <div className="y">경기도 시흥시 은행동</div>
          </div>
          {/* <div className="_line"/> */}
          <hr/>
          <div className="xy">
            <div classname="x">지역지구</div>
            <div className="y">도시지역,자연녹지지역,근린공원</div>
          </div>
          {/* <div className="_line"/> */}
          <hr/>
          <div className="xy">
            <div classname="x">주용도</div>
            <div className="y">공원</div>
          </div>
          {/* <div className="_line"/> */}
          <hr/>
          <div className="xy">
            <div classname="x">규모</div>
            <div className="y">8,270m²</div>
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

export default Ai6;