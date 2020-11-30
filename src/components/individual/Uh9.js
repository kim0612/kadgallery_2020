import ImageGallery from 'react-image-gallery';

import '../../scss/individual.scss';

import uh9_1 from '../../img/project/StudioUh/Uh_9/1.jpg';
import uh9_2 from '../../img/project/StudioUh/Uh_9/2.jpg';
import uh9_3 from '../../img/project/StudioUh/Uh_9/3.jpg';
import uh9_4 from '../../img/project/StudioUh/Uh_9/4.jpg';
import uh9_5 from '../../img/project/StudioUh/Uh_9/5.jpg';
import uh9_6 from '../../img/project/StudioUh/Uh_9/6.jpg';
import uh9_7 from '../../img/project/StudioUh/Uh_9/7.jpg';
import uh9_8 from '../../img/project/StudioUh/Uh_9/8.jpg';
import uh9_9 from '../../img/project/StudioUh/Uh_9/9.jpg';
import uh9_10 from '../../img/project/StudioUh/Uh_9/10.jpg';
import uh9_11 from '../../img/project/StudioUh/Uh_9/11.jpg';
import uh9_12 from '../../img/project/StudioUh/Uh_9/12.jpg';
import uh9_13 from '../../img/project/StudioUh/Uh_9/13.jpg';
import uh9_14 from '../../img/project/StudioUh/Uh_9/14.jpg';
import uh9_15 from '../../img/project/StudioUh/Uh_9/15.jpg';
import uh9_16 from '../../img/project/StudioUh/Uh_9/16.jpg';
import uh9_17 from '../../img/project/StudioUh/Uh_9/17.jpg';
import uh9_18 from '../../img/project/StudioUh/Uh_9/18.jpg';
import uh9_19 from '../../img/project/StudioUh/Uh_9/19.jpg';


const images = [
  {
    original: uh9_2,
    thumbnail: uh9_2,
  },{
    original: uh9_3,
    thumbnail: uh9_3,
  },{
    original: uh9_4,
    thumbnail: uh9_4,
  },{
    original: uh9_5,
    thumbnail: uh9_5,
  },{
    original: uh9_6,
    thumbnail: uh9_6,
  },{
    original: uh9_7,
    thumbnail: uh9_7,
  },{
    original: uh9_8,
    thumbnail: uh9_8,
  },{
    original: uh9_9,
    thumbnail: uh9_9,
  },{
    original: uh9_10,
    thumbnail: uh9_10,
  },{
    original: uh9_11,
    thumbnail: uh9_11,
  },{
    original: uh9_12,
    thumbnail: uh9_12,
  },{
    original: uh9_13,
    thumbnail: uh9_13,
  },{
    original: uh9_14,
    thumbnail: uh9_14,
  },{
    original: uh9_15,
    thumbnail: uh9_15,
  },{
    original: uh9_16,
    thumbnail: uh9_16,
  },{
    original: uh9_17,
    thumbnail: uh9_17,
  },
  {
    original: uh9_18,
    thumbnail: uh9_18,
  },{
    original: uh9_19,
    thumbnail: uh9_19,
  }
];

function Uh9(){
  return(
    <div className='individual'>
      
      <img className="mainimg" src={uh9_1} alt={"asdf"}/>

      <div className="scription">
        <div className="title">
          "너나우리
- 여주시 은퇴자 집합주거 계획안"
        </div>
        <div className="author">
        도승규
        </div>
        <div className="subs">
        이 은퇴자 집합 주거 계획안은 지역주민과 이주민의 화합, 그리고 소통과 일터가 어우러지는 새로운 주거 스타일로써, 하나의 마을 형태를 형성한다. 내 집 창의 방향, 문 바깥의 공간과 정원, 이웃과 만나는 길. 복도, 주차장, 커뮤니티 시설까지 사람간의 “같이”와 “공유”를 유도하며 이웃과 관계를 만들어가는 과정인 프로젝트이다. 주거 공동체가 공간 속에서 가치관을 공유하고 더불어 함께 문화생활을 즐길 수 있는 공간을 두어 지역 사회 소통의 장이 되어가길 기대한다.         </div>
        <div className="_table">
          <div className="_line"/>
          <div className="xy">
            <div classname="x">대지면적</div>
            <div className="y">8,110m²</div>
          </div>
          <hr/>
          {/* <div className="_line"/> */}
          <div className="xy">
            <div classname="x">대지위치</div>
            <div className="y">경기도 여주시 가남읍 금당1리 724-4 ~ 6</div>
          </div>
          {/* <div className="_line"/> */}
          <hr/>
          <div className="xy">
            <div classname="x">지역지구</div>
            <div className="y">생산 관리 지역</div>
          </div>
          {/* <div className="_line"/> */}
          <hr/>
          <div className="xy">
            <div classname="x">주용도</div>
            <div className="y">집합 주거</div>
          </div>
          {/* <div className="_line"/> */}
          <hr/>
          <div className="xy">
            <div classname="x">규모</div>
            <div className="y">2,963.24m²</div>
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

export default Uh9;