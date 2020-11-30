import ImageGallery from 'react-image-gallery';

import '../../scss/individual.scss';

import kim9_1 from '../../img/project/StudioKim/Kim_9/1.jpg';
import kim9_2 from '../../img/project/StudioKim/Kim_9/2.jpg';
import kim9_3 from '../../img/project/StudioKim/Kim_9/3.jpg';
import kim9_4 from '../../img/project/StudioKim/Kim_9/4.jpg';
import kim9_5 from '../../img/project/StudioKim/Kim_9/5.jpg';
import kim9_6 from '../../img/project/StudioKim/Kim_9/6.jpg';
import kim9_7 from '../../img/project/StudioKim/Kim_9/7.jpg';
import kim9_8 from '../../img/project/StudioKim/Kim_9/8.jpg';
import kim9_9 from '../../img/project/StudioKim/Kim_9/9.jpg';
import kim9_10 from '../../img/project/StudioKim/Kim_9/10.jpg';
import kim9_11 from '../../img/project/StudioKim/Kim_9/11.jpg';
import kim9_12 from '../../img/project/StudioKim/Kim_9/12.jpg';
import kim9_13 from '../../img/project/StudioKim/Kim_9/13.jpg';
import kim9_14 from '../../img/project/StudioKim/Kim_9/14.jpg';
import kim9_15 from '../../img/project/StudioKim/Kim_9/15.jpg';
import kim9_16 from '../../img/project/StudioKim/Kim_9/16.jpg';
import kim9_17 from '../../img/project/StudioKim/Kim_9/17.jpg';
import kim9_18 from '../../img/project/StudioKim/Kim_9/18.jpg';
import kim9_19 from '../../img/project/StudioKim/Kim_9/19.jpg';
import kim9_20 from '../../img/project/StudioKim/Kim_9/20.jpg';
import kim9_21 from '../../img/project/StudioKim/Kim_9/21.jpg';
import kim9_22 from '../../img/project/StudioKim/Kim_9/22.jpg';
import kim9_23 from '../../img/project/StudioKim/Kim_9/23.jpg';
import kim9_24 from '../../img/project/StudioKim/Kim_9/24.jpg';

const images = [
  {
    original: kim9_2,
    thumbnail: kim9_2,
  },{
    original: kim9_3,
    thumbnail: kim9_3,
  },{
    original: kim9_4,
    thumbnail: kim9_4,
  },{
    original: kim9_5,
    thumbnail: kim9_5,
  },{
    original: kim9_6,
    thumbnail: kim9_6,
  },{
    original: kim9_7,
    thumbnail: kim9_7,
  },{
    original: kim9_8,
    thumbnail: kim9_8,
  },{
    original: kim9_9,
    thumbnail: kim9_9,
  },{
    original: kim9_10,
    thumbnail: kim9_10,
  },{
    original: kim9_11,
    thumbnail: kim9_11,
  },{
    original: kim9_12,
    thumbnail: kim9_12,
  },{
    original: kim9_13,
    thumbnail: kim9_13,
  },{
    original: kim9_14,
    thumbnail: kim9_14,
  },{
    original: kim9_15,
    thumbnail: kim9_15,
  },{
    original: kim9_16,
    thumbnail: kim9_16,
  },{
    original: kim9_17,
    thumbnail: kim9_17,
  },
  {
    original: kim9_18,
    thumbnail: kim9_18,
  },{
    original: kim9_19,
    thumbnail: kim9_19,
  },{
    original: kim9_20,
    thumbnail: kim9_20,
  },{
    original: kim9_21,
    thumbnail: kim9_21,
  },{
    original: kim9_22,
    thumbnail: kim9_22,
  },{
    original: kim9_23,
    thumbnail: kim9_23,
  },{
    original: kim9_24,
    thumbnail: kim9_24,
  }
];

function kim9(){
  return(
    <div className='individual'>
      
      <img className="mainimg" src={kim9_1} alt={"asdf"}/>

      <div className="scription">
        <div className="title">
          "해방촌 콤마"
        </div>
        <div className="author">
        이준범
        </div>
        <div className="subs">
        해방촌의 거대한 경사 사이에서 일어나는 연결과 쉼, 경사를 이용하여 내부 공간의 레벨을 다르게 하였고
그 사이의 중정과 테라스를 주었다. 포디엄 부분에는 주로 상업시설과 문화 시설이 존재하여 건물 내로
사람들을 유입시키고 중정으로 다다르게 한다. 상부에는 주거시설을 배치하여 해방촌의 뷰를 제공해 준다.</div>
        <div className="_table">
          <div className="_line"/>
          <div className="xy">
            <div classname="x">대지면적</div>
            <div className="y">1,450m²</div>
          </div>
          <hr/>
          {/* <div className="_line"/> */}
          <div className="xy">
            <div classname="x">대지위치</div>
            <div className="y">서울 용산구 신흥로20길 1</div>
          </div>
          {/* <div className="_line"/> */}
          <hr/>
          <div className="xy">
            <div classname="x">지역지구</div>
            <div className="y">제1종일반주거지역</div>
          </div>
          {/* <div className="_line"/> */}
          <hr/>
          <div className="xy">
            <div classname="x">주용도</div>
            <div className="y">주상복합</div>
          </div>
          {/* <div className="_line"/> */}
          <hr/>
          <div className="xy">
            <div classname="x">규모</div>
            <div className="y">4,400m²</div>
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

export default kim9;