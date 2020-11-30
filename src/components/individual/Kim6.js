import ImageGallery from 'react-image-gallery';

import '../../scss/individual.scss';

import kim6_1 from '../../img/project/StudioKim/Kim_6/1.jpg';
import kim6_2 from '../../img/project/StudioKim/Kim_6/2.jpg';
import kim6_3 from '../../img/project/StudioKim/Kim_6/3.jpg';
import kim6_4 from '../../img/project/StudioKim/Kim_6/4.jpg';
import kim6_5 from '../../img/project/StudioKim/Kim_6/5.jpg';
import kim6_6 from '../../img/project/StudioKim/Kim_6/6.jpg';
import kim6_7 from '../../img/project/StudioKim/Kim_6/7.jpg';
import kim6_8 from '../../img/project/StudioKim/Kim_6/8.jpg';
import kim6_9 from '../../img/project/StudioKim/Kim_6/9.jpg';
import kim6_10 from '../../img/project/StudioKim/Kim_6/10.jpg';
import kim6_11 from '../../img/project/StudioKim/Kim_6/11.jpg';
import kim6_12 from '../../img/project/StudioKim/Kim_6/12.jpg';
import kim6_13 from '../../img/project/StudioKim/Kim_6/13.jpg';
import kim6_14 from '../../img/project/StudioKim/Kim_6/14.jpg';
import kim6_15 from '../../img/project/StudioKim/Kim_6/15.jpg';
import kim6_16 from '../../img/project/StudioKim/Kim_6/16.jpg';
import kim6_17 from '../../img/project/StudioKim/Kim_6/17.jpg';
import kim6_18 from '../../img/project/StudioKim/Kim_6/18.jpg';
import kim6_19 from '../../img/project/StudioKim/Kim_6/19.jpg';
import kim6_20 from '../../img/project/StudioKim/Kim_6/20.jpg';
import kim6_21 from '../../img/project/StudioKim/Kim_6/21.jpg';
import kim6_22 from '../../img/project/StudioKim/Kim_6/22.jpg';
import kim6_23 from '../../img/project/StudioKim/Kim_6/23.jpg';
import kim6_24 from '../../img/project/StudioKim/Kim_6/24.jpg';
import kim6_25 from '../../img/project/StudioKim/Kim_6/25.jpg';

const images = [
  {
    original: kim6_2,
    thumbnail: kim6_2,
  },{
    original: kim6_3,
    thumbnail: kim6_3,
  },{
    original: kim6_4,
    thumbnail: kim6_4,
  },{
    original: kim6_5,
    thumbnail: kim6_5,
  },{
    original: kim6_6,
    thumbnail: kim6_6,
  },{
    original: kim6_7,
    thumbnail: kim6_7,
  },{
    original: kim6_8,
    thumbnail: kim6_8,
  },{
    original: kim6_9,
    thumbnail: kim6_9,
  },{
    original: kim6_10,
    thumbnail: kim6_10,
  },{
    original: kim6_11,
    thumbnail: kim6_11,
  },{
    original: kim6_12,
    thumbnail: kim6_12,
  },{
    original: kim6_13,
    thumbnail: kim6_13,
  },{
    original: kim6_14,
    thumbnail: kim6_14,
  },{
    original: kim6_15,
    thumbnail: kim6_15,
  },{
    original: kim6_16,
    thumbnail: kim6_16,
  },{
    original: kim6_17,
    thumbnail: kim6_17,
  },
  {
    original: kim6_18,
    thumbnail: kim6_18,
  },{
    original: kim6_19,
    thumbnail: kim6_19,
  },{
    original: kim6_20,
    thumbnail: kim6_20,
  },{
    original: kim6_21,
    thumbnail: kim6_21,
  },{
    original: kim6_22,
    thumbnail: kim6_22,
  },{
    original: kim6_23,
    thumbnail: kim6_23,
  },{
    original: kim6_24,
    thumbnail: kim6_24,
  },{
    original: kim6_25,
    thumbnail: kim6_25,
  }
];

function kim6(){
  return(
    <div className='individual'>
      
      <img className="mainimg" src={kim6_1} alt={"asdf"}/>

      <div className="scription">
        <div className="title">
          " 집 합 "
        </div>
        <div className="author">
        유영서
        </div>
        <div className="subs">
        기존의 삼청동 문화거리의 문제인 오픈스페이스의 결핍, 불법 증축등 돌아다닐 수 없는 골목길 등의 문제점을 해결하여 삼청동 문화거리의 중심이 되어서
유동인구를 유입과 분포 시켜서 사람들을 순환시키고 사이트을 산책하도록 유도한다. 주변 골목길들의 축이나 건물들의 스케일 등을 이용해서 골목길을 재정의하여 이동에
불편함을 덜어주고 관관객이나 현지인들에게 팔판길과 문화거리를 가로지르는 길을 제공해준다.        </div>
        <div className="_table">
          <div className="_line"/>
          <div className="xy">
            <div classname="x">대지면적</div>
            <div className="y">2,714m²</div>
          </div>
          <hr/>
          {/* <div className="_line"/> */}
          <div className="xy">
            <div classname="x">대지위치</div>
            <div className="y">서울 종로구 삼청로 91</div>
          </div>
          {/* <div className="_line"/> */}
          <hr/>
          <div className="xy">
            <div classname="x">지역지구</div>
            <div className="y">제1종 일반주거지역</div>
          </div>
          {/* <div className="_line"/> */}
          <hr/>
          <div className="xy">
            <div classname="x">주용도</div>
            <div className="y">상업지시설 및 문화시설</div>
          </div>
          {/* <div className="_line"/> */}
          <hr/>
          <div className="xy">
            <div classname="x">규모</div>
            <div className="y">4,720m²</div>
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

export default kim6;