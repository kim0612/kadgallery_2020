import ImageGallery from 'react-image-gallery';

import '../../scss/individual.scss';

import kim5_1 from '../../img/project/StudioKim/Kim_5/1.jpg';
import kim5_2 from '../../img/project/StudioKim/Kim_5/2.jpg';
import kim5_3 from '../../img/project/StudioKim/Kim_5/3.jpg';
import kim5_4 from '../../img/project/StudioKim/Kim_5/4.jpg';
import kim5_5 from '../../img/project/StudioKim/Kim_5/5.jpg';
import kim5_6 from '../../img/project/StudioKim/Kim_5/6.jpg';
import kim5_7 from '../../img/project/StudioKim/Kim_5/7.jpg';
import kim5_8 from '../../img/project/StudioKim/Kim_5/8.jpg';
import kim5_9 from '../../img/project/StudioKim/Kim_5/9.jpg';
import kim5_10 from '../../img/project/StudioKim/Kim_5/10.jpg';
import kim5_11 from '../../img/project/StudioKim/Kim_5/11.jpg';
import kim5_12 from '../../img/project/StudioKim/Kim_5/12.jpg';
import kim5_13 from '../../img/project/StudioKim/Kim_5/13.jpg';
import kim5_14 from '../../img/project/StudioKim/Kim_5/14.jpg';
import kim5_15 from '../../img/project/StudioKim/Kim_5/15.jpg';
import kim5_16 from '../../img/project/StudioKim/Kim_5/16.jpg';
import kim5_17 from '../../img/project/StudioKim/Kim_5/17.jpg';
import kim5_18 from '../../img/project/StudioKim/Kim_5/18.jpg';
import kim5_19 from '../../img/project/StudioKim/Kim_5/19.jpg';
import kim5_20 from '../../img/project/StudioKim/Kim_5/20.jpg';
import kim5_21 from '../../img/project/StudioKim/Kim_5/21.jpg';
import kim5_22 from '../../img/project/StudioKim/Kim_5/22.jpg';
import kim5_23 from '../../img/project/StudioKim/Kim_5/23.jpg';
import kim5_24 from '../../img/project/StudioKim/Kim_5/24.jpg';
import kim5_25 from '../../img/project/StudioKim/Kim_5/25.jpg';

const images = [
  {
    original: kim5_2,
    thumbnail: kim5_2,
  },{
    original: kim5_3,
    thumbnail: kim5_3,
  },{
    original: kim5_4,
    thumbnail: kim5_4,
  },{
    original: kim5_5,
    thumbnail: kim5_5,
  },{
    original: kim5_6,
    thumbnail: kim5_6,
  },{
    original: kim5_7,
    thumbnail: kim5_7,
  },{
    original: kim5_8,
    thumbnail: kim5_8,
  },{
    original: kim5_9,
    thumbnail: kim5_9,
  },{
    original: kim5_10,
    thumbnail: kim5_10,
  },{
    original: kim5_11,
    thumbnail: kim5_11,
  },{
    original: kim5_12,
    thumbnail: kim5_12,
  },{
    original: kim5_13,
    thumbnail: kim5_13,
  },{
    original: kim5_14,
    thumbnail: kim5_14,
  },{
    original: kim5_15,
    thumbnail: kim5_15,
  },{
    original: kim5_16,
    thumbnail: kim5_16,
  },{
    original: kim5_17,
    thumbnail: kim5_17,
  },
  {
    original: kim5_18,
    thumbnail: kim5_18,
  },{
    original: kim5_19,
    thumbnail: kim5_19,
  },{
    original: kim5_20,
    thumbnail: kim5_20,
  },{
    original: kim5_21,
    thumbnail: kim5_21,
  },{
    original: kim5_22,
    thumbnail: kim5_22,
  },{
    original: kim5_23,
    thumbnail: kim5_23,
  },{
    original: kim5_24,
    thumbnail: kim5_24,
  },{
    original: kim5_25,
    thumbnail: kim5_25,
  }
];

function kim5(){
  return(
    <div className='individual'>
      
      <img className="mainimg" src={kim5_1} alt={"asdf"}/>

      <div className="scription">
        <div className="title">
          "公場 [청년 공장]"
        </div>
        <div className="author">
        유수연
        </div>
        <div className="subs">
          제 사이트는 동대문 시장과 청계천이 근접해 있습니다. 사이트는 가운데 세로 형태로 이루어진 도로와 중간에 가로로 된 길 사이로 펼쳐져 있는데, 이 도로는 현재 오토바이와 불법 주차된 차량 때문에 통행이 불편합니다. 혼잡한 통행 문제를 해결하기 위해 편리한 통행 방향을 제시해 도로 공간의 입체적 활용으로 단절된 보행 네트워크를 연결하려고 했습니다.
        </div>
        <div className="_table">
          <div className="_line"/>
          <div className="xy">
            <div classname="x">대지면적</div>
            <div className="y">2,419m²</div>
          </div>
          <hr/>
          {/* <div className="_line"/> */}
          <div className="xy">
            <div classname="x">대지위치</div>
            <div className="y">서울 종로구 종로 258 일대</div>
          </div>
          {/* <div className="_line"/> */}
          <hr/>
          <div className="xy">
            <div classname="x">지역지구</div>
            <div className="y">일반 상업지역, 도시 지역</div>
          </div>
          {/* <div className="_line"/> */}
          <hr/>
          <div className="xy">
            <div classname="x">주용도</div>
            <div className="y">상업 시설 (청년 창업 커뮤니티 시설)</div>
          </div>
          {/* <div className="_line"/> */}
          <hr/>
          <div className="xy">
            <div classname="x">규모</div>
            <div className="y">3,470m², 지하2층 지상3층</div>
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

export default kim5;