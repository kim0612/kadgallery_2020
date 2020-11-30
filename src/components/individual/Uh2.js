import ImageGallery from 'react-image-gallery';

import '../../scss/individual.scss';

import uh2_1 from '../../img/project/StudioUh/Uh_2/1.jpg';
import uh2_2 from '../../img/project/StudioUh/Uh_2/2.jpg';
import uh2_3 from '../../img/project/StudioUh/Uh_2/3.jpg';
import uh2_4 from '../../img/project/StudioUh/Uh_2/4.jpg';
import uh2_5 from '../../img/project/StudioUh/Uh_2/5.jpg';
import uh2_6 from '../../img/project/StudioUh/Uh_2/6.jpg';
import uh2_7 from '../../img/project/StudioUh/Uh_2/7.jpg';
import uh2_8 from '../../img/project/StudioUh/Uh_2/8.jpg';
import uh2_9 from '../../img/project/StudioUh/Uh_2/9.jpg';
import uh2_10 from '../../img/project/StudioUh/Uh_2/10.jpg';
import uh2_11 from '../../img/project/StudioUh/Uh_2/11.jpg';
import uh2_12 from '../../img/project/StudioUh/Uh_2/12.jpg';
import uh2_13 from '../../img/project/StudioUh/Uh_2/13.jpg';
import uh2_14 from '../../img/project/StudioUh/Uh_2/14.jpg';
import uh2_15 from '../../img/project/StudioUh/Uh_2/15.jpg';
import uh2_16 from '../../img/project/StudioUh/Uh_2/16.jpg';
import uh2_17 from '../../img/project/StudioUh/Uh_2/17.jpg';
import uh2_18 from '../../img/project/StudioUh/Uh_2/18.jpg';
import uh2_19 from '../../img/project/StudioUh/Uh_2/19.jpg';
import uh2_20 from '../../img/project/StudioUh/Uh_2/20.jpg';
import uh2_21 from '../../img/project/StudioUh/Uh_2/21.jpg';
import uh2_22 from '../../img/project/StudioUh/Uh_2/22.jpg';
import uh2_23 from '../../img/project/StudioUh/Uh_2/23.jpg';
import uh2_24 from '../../img/project/StudioUh/Uh_2/24.jpg';
import uh2_25 from '../../img/project/StudioUh/Uh_2/25.jpg';
import uh2_26 from '../../img/project/StudioUh/Uh_2/26.jpg';


const images = [
  {
    original: uh2_2,
    thumbnail: uh2_2,
  },{
    original: uh2_3,
    thumbnail: uh2_3,
  },{
    original: uh2_4,
    thumbnail: uh2_4,
  },{
    original: uh2_5,
    thumbnail: uh2_5,
  },{
    original: uh2_6,
    thumbnail: uh2_6,
  },{
    original: uh2_7,
    thumbnail: uh2_7,
  },{
    original: uh2_8,
    thumbnail: uh2_8,
  },{
    original: uh2_9,
    thumbnail: uh2_9,
  },{
    original: uh2_10,
    thumbnail: uh2_10,
  },{
    original: uh2_11,
    thumbnail: uh2_11,
  },{
    original: uh2_12,
    thumbnail: uh2_12,
  },{
    original: uh2_13,
    thumbnail: uh2_13,
  },{
    original: uh2_14,
    thumbnail: uh2_14,
  },{
    original: uh2_15,
    thumbnail: uh2_15,
  },{
    original: uh2_16,
    thumbnail: uh2_16,
  },{
    original: uh2_17,
    thumbnail: uh2_17,
  },
  {
    original: uh2_18,
    thumbnail: uh2_18,
  },{
    original: uh2_19,
    thumbnail: uh2_19,
  },{
    original: uh2_20,
    thumbnail: uh2_20,
  },{
    original: uh2_21,
    thumbnail: uh2_21,
  },{
    original: uh2_22,
    thumbnail: uh2_22,
  },{
    original: uh2_23,
    thumbnail: uh2_23,
  },{
    original: uh2_24,
    thumbnail: uh2_24,
  },{
    original: uh2_25,
    thumbnail: uh2_25,
  },{
    original: uh2_26,
    thumbnail: uh2_26,
  }
];

function Uh2(){
  return(
    <div className='individual'>
      
      <img className="mainimg" src={uh2_1} alt={"asdf"}/>

      <div className="scription">
        <div className="title">
          "경상북도 향토학숙 계획안"
        </div>
        <div className="author">
          정민수
        </div>
        <div className="subs">
        경기, 강원, 충북, 전북, 전남, 광주, 제주
7개의 각 지역을 대상으로 지역학사가 서울 내에서 운영되고 있고,
경우에 따라 2개의 학사가 운영되는 경우도 있다.
반면 경상북도를 대상으로 한 지역학숙이 부재한 상황이고,
경상북도 학생들을 대상으로 운영되는 향토학숙을 계획 하고자했다.
기존의 높은 경쟁력, 열악한 시설, 과도한 통제 등의 문제점 보완하여
합리적 비용으로 꿈을  위해 타지에서 살아가는 학생들을 위한 공공기숙사를 계획했다.
        </div>
        <div className="_table">
          <div className="_line"/>
          <div className="xy">
            <div classname="x">대지면적</div>
            <div className="y">2,672m²</div>
          </div>
          <hr/>
          {/* <div className="_line"/> */}
          <div className="xy">
            <div classname="x">대지위치</div>
            <div className="y">서울시 용산구 한강대로 50길 33</div>
          </div>
          {/* <div className="_line"/> */}
          <hr/>
          <div className="xy">
            <div classname="x">지역지구</div>
            <div className="y">제 2종 일반주거지역</div>
          </div>
          {/* <div className="_line"/> */}
          <hr/>
          <div className="xy">
            <div classname="x">주용도</div>
            <div className="y">기숙사</div>
          </div>
          {/* <div className="_line"/> */}
          <hr/>
          <div className="xy">
            <div classname="x">규모</div>
            <div className="y">1,454m²</div>
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

export default Uh2;