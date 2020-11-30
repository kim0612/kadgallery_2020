import ImageGallery from 'react-image-gallery';

import '../../scss/individual.scss';

import ai3_1 from '../../img/project/StudioAi/Ai_3/1.jpg';
import ai3_2 from '../../img/project/StudioAi/Ai_3/2.jpg';
import ai3_3 from '../../img/project/StudioAi/Ai_3/3.jpg';
import ai3_4 from '../../img/project/StudioAi/Ai_3/4.jpg';
import ai3_5 from '../../img/project/StudioAi/Ai_3/5.jpg';
import ai3_6 from '../../img/project/StudioAi/Ai_3/6.jpg';
import ai3_7 from '../../img/project/StudioAi/Ai_3/7.jpg';
import ai3_8 from '../../img/project/StudioAi/Ai_3/8.jpg';
import ai3_9 from '../../img/project/StudioAi/Ai_3/9.jpg';
import ai3_10 from '../../img/project/StudioAi/Ai_3/10.jpg';


const images = [
  {
    original: ai3_2,
    thumbnail: ai3_2,
  },{
    original: ai3_3,
    thumbnail: ai3_3,
  },{
    original: ai3_4,
    thumbnail: ai3_4,
  },{
    original: ai3_5,
    thumbnail: ai3_5,
  },{
    original: ai3_6,
    thumbnail: ai3_6,
  },{
    original: ai3_7,
    thumbnail: ai3_7,
  },{
    original: ai3_8,
    thumbnail: ai3_8,
  },{
    original: ai3_9,
    thumbnail: ai3_9,
  },{
    original: ai3_10,
    thumbnail: ai3_10,
  }
];

function Ai3(){
  return(
    <div className='individual'>
      
      <img className="mainimg" src={ai3_1} alt={"asdf"}/>

      <div className="scription">
        <div className="title">
          " 보석 상자 "
        </div>
        <div className="author">
        남지율
        </div>
        <div className="subs">
        사람들 간의 경험과 그 순간은 보석이며 공간은 그 보석이 담길 상자이다. 패턴을 통해 그 기억과 순간의 중첩을 보여주고, 순간이 머물고 지나가는 흔적을 공간 안에 녹이고자 한다.
프레임과 선으로 이루어진 패턴은 여러 가지 깊이를 가지고 겹쳐서 사라지기도, 형태가 변하기도 한다. 이는 보석이 된 순간들이 머물기도 떠나가기도 하는 것을 의미한다. 
        </div>
        <div className="_table">
          <div className="_line"/>
          <div className="xy">
            <div classname="x">대지면적</div>
            <div className="y">1,478m²</div>
          </div>
          <hr/>
          {/* <div className="_line"/> */}
          <div className="xy">
            <div classname="x">대지위치</div>
            <div className="y">서울 용산구 한남동</div>
          </div>
          {/* <div className="_line"/> */}
          <hr/>
          <div className="xy">
            <div classname="x">지역지구</div>
            <div className="y">제2종일반주거지역</div>
          </div>
          {/* <div className="_line"/> */}
          <hr/>
          <div className="xy">
            <div classname="x">주용도</div>
            <div className="y">상업시설(Flagship store)</div>
          </div>
          {/* <div className="_line"/> */}
          <hr/>
          <div className="xy">
            <div classname="x">규모</div>
            <div className="y">1,399m²</div>
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

export default Ai3;