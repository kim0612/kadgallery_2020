import ImageGallery from 'react-image-gallery';

import '../../scss/individual.scss';

import ai9_1 from '../../img/project/StudioAi/Ai_9/1.jpg';
import ai9_2 from '../../img/project/StudioAi/Ai_9/2.jpg';
import ai9_3 from '../../img/project/StudioAi/Ai_9/3.jpg';
import ai9_4 from '../../img/project/StudioAi/Ai_9/4.jpg';
import ai9_5 from '../../img/project/StudioAi/Ai_9/5.jpg';
import ai9_6 from '../../img/project/StudioAi/Ai_9/6.jpg';
import ai9_7 from '../../img/project/StudioAi/Ai_9/7.jpg';
import ai9_8 from '../../img/project/StudioAi/Ai_9/8.jpg';


const images = [
  {
    original: ai9_2,
    thumbnail: ai9_2,
  },{
    original: ai9_3,
    thumbnail: ai9_3,
  },{
    original: ai9_4,
    thumbnail: ai9_4,
  },{
    original: ai9_5,
    thumbnail: ai9_5,
  },{
    original: ai9_6,
    thumbnail: ai9_6,
  },{
    original: ai9_7,
    thumbnail: ai9_7,
  },{
    original: ai9_8,
    thumbnail: ai9_8,
  }
];

function Ai9(){
  return(
    <div className='individual'>
      
      <img className="mainimg" src={ai9_1} alt={"asdf"}/>

      <div className="scription">
        <div className="title">
          "계원예대 가족_교수와 선배와 새내기, 0학년 적응하기"
        </div>
        <div className="author">
        손연주
        </div>
        <div className="subs">
        대학교 입학 후 학교 안에서 학생들 간의 대인관계로 힘들어하고 학과교육에 어려움이 있어 자신의 전공에 대한 흥미를 잃고 중도포기를 결정하는 학생들을 보았다. 지도자와 학생들간 생활권공유, 정보, 지식, 문화교류, 교과, 비교과프로그램운영으로 강의실 안의 수직적관계를 그들만의 연결공간을 통해 수평적관계로 보완하고 학생들에게 같은 전공자 개념이 아닌 같은 학교라는 소속감을 주어 신입생의 기초학력 증진과 학교환경 적응에 도움주는 레지덴션컬리지를 제안한다.
        </div>
        <div className="_table">
          <div className="_line"/>
          <div className="xy">
            <div classname="x">대지면적</div>
            <div className="y">5,800m²</div>
          </div>
          <hr/>
          {/* <div className="_line"/> */}
          <div className="xy">
            <div classname="x">대지위치</div>
            <div className="y">의왕시 내손동 계원예술대학교 캠퍼스</div>
          </div>
          {/* <div className="_line"/> */}
          <hr/>
          <div className="xy">
            <div classname="x">지역지구</div>
            <div className="y">대학, 자연녹지지역</div>
          </div>
          {/* <div className="_line"/> */}
          <hr/>
          <div className="xy">
            <div classname="x">주용도</div>
            <div className="y">교육연구시설</div>
          </div>
          {/* <div className="_line"/> */}
          <hr/>
          <div className="xy">
            <div classname="x">규모</div>
            <div className="y">40,000m²</div>
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

export default Ai9;