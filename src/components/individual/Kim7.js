import ImageGallery from 'react-image-gallery';

import '../../scss/individual.scss';

import kim7_1 from '../../img/project/StudioKim/Kim_7/1.jpg';
import kim7_2 from '../../img/project/StudioKim/Kim_7/2.jpg';
import kim7_3 from '../../img/project/StudioKim/Kim_7/3.jpg';
import kim7_4 from '../../img/project/StudioKim/Kim_7/4.jpg';
import kim7_5 from '../../img/project/StudioKim/Kim_7/5.jpg';
import kim7_6 from '../../img/project/StudioKim/Kim_7/6.jpg';
import kim7_7 from '../../img/project/StudioKim/Kim_7/7.jpg';
import kim7_8 from '../../img/project/StudioKim/Kim_7/8.jpg';
import kim7_9 from '../../img/project/StudioKim/Kim_7/9.jpg';
import kim7_10 from '../../img/project/StudioKim/Kim_7/10.jpg';
import kim7_11 from '../../img/project/StudioKim/Kim_7/11.jpg';
import kim7_12 from '../../img/project/StudioKim/Kim_7/12.jpg';
import kim7_13 from '../../img/project/StudioKim/Kim_7/13.jpg';
import kim7_14 from '../../img/project/StudioKim/Kim_7/14.jpg';
import kim7_15 from '../../img/project/StudioKim/Kim_7/15.jpg';
import kim7_16 from '../../img/project/StudioKim/Kim_7/16.jpg';
import kim7_17 from '../../img/project/StudioKim/Kim_7/17.jpg';
import kim7_18 from '../../img/project/StudioKim/Kim_7/18.jpg';
import kim7_19 from '../../img/project/StudioKim/Kim_7/19.jpg';
import kim7_20 from '../../img/project/StudioKim/Kim_7/20.jpg';
import kim7_21 from '../../img/project/StudioKim/Kim_7/21.jpg';
import kim7_22 from '../../img/project/StudioKim/Kim_7/22.jpg';
import kim7_23 from '../../img/project/StudioKim/Kim_7/23.jpg';
import kim7_24 from '../../img/project/StudioKim/Kim_7/24.jpg';

const images = [
  {
    original: kim7_2,
    thumbnail: kim7_2,
  },{
    original: kim7_3,
    thumbnail: kim7_3,
  },{
    original: kim7_4,
    thumbnail: kim7_4,
  },{
    original: kim7_5,
    thumbnail: kim7_5,
  },{
    original: kim7_6,
    thumbnail: kim7_6,
  },{
    original: kim7_7,
    thumbnail: kim7_7,
  },{
    original: kim7_8,
    thumbnail: kim7_8,
  },{
    original: kim7_9,
    thumbnail: kim7_9,
  },{
    original: kim7_10,
    thumbnail: kim7_10,
  },{
    original: kim7_11,
    thumbnail: kim7_11,
  },{
    original: kim7_12,
    thumbnail: kim7_12,
  },{
    original: kim7_13,
    thumbnail: kim7_13,
  },{
    original: kim7_14,
    thumbnail: kim7_14,
  },{
    original: kim7_15,
    thumbnail: kim7_15,
  },{
    original: kim7_16,
    thumbnail: kim7_16,
  },{
    original: kim7_17,
    thumbnail: kim7_17,
  },
  {
    original: kim7_18,
    thumbnail: kim7_18,
  },{
    original: kim7_19,
    thumbnail: kim7_19,
  },{
    original: kim7_20,
    thumbnail: kim7_20,
  },{
    original: kim7_21,
    thumbnail: kim7_21,
  },{
    original: kim7_22,
    thumbnail: kim7_22,
  },{
    original: kim7_23,
    thumbnail: kim7_23,
  },{
    original: kim7_24,
    thumbnail: kim7_24,
  }
];

function kim7(){
  return(
    <div className='individual'>
      
      <img className="mainimg" src={kim7_1} alt={"asdf"}/>

      <div className="scription">
        <div className="title">
          "백사정양"
        </div>
        <div className="author">
        이서연
        </div>
        <div className="subs">
      백사마을은 현재 지역 노후화가 많이 되어 있는 곳으로 기존에 사신던 분들 모두 고령측에 속하신다. 하지만 백사마을 주위에는 독거노인분들이 편히 쉴수 있는 쉼터나 작은 치료를 처치할수 없는 곳이 없어 생각 해놓은 곳이 바로 요양원이다.
       </div>
        <div className="_table">
          <div className="_line"/>
          <div className="xy">
            <div classname="x">대지면적</div>
            <div className="y">5,015m²</div>
          </div>
          <hr/>
          {/* <div className="_line"/> */}
          <div className="xy">
            <div classname="x">대지위치</div>
            <div className="y">서울 중계동 노원구 104-3</div>
          </div>
          {/* <div className="_line"/> */}
          <hr/>
          <div className="xy">
            <div classname="x">지역지구</div>
            <div className="y">제 2종 주거단지구역</div>
          </div>
          {/* <div className="_line"/> */}
          <hr/>
          <div className="xy">
            <div classname="x">주용도</div>
            <div className="y">주거단지 또는 상가</div>
          </div>
          {/* <div className="_line"/> */}
          <hr/>
          <div className="xy">
            <div classname="x">규모</div>
            <div className="y">4,372m² | 지하 2층 지상 4층</div>
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

export default kim7;