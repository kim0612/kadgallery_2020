import ImageGallery from 'react-image-gallery';

import '../../scss/individual.scss';

import kim11_1 from '../../img/project/StudioKim/Kim_11/1.jpg';
import kim11_2 from '../../img/project/StudioKim/Kim_11/2.jpg';
import kim11_3 from '../../img/project/StudioKim/Kim_11/3.jpg';
import kim11_4 from '../../img/project/StudioKim/Kim_11/4.jpg';
import kim11_5 from '../../img/project/StudioKim/Kim_11/5.jpg';
import kim11_6 from '../../img/project/StudioKim/Kim_11/6.jpg';
import kim11_7 from '../../img/project/StudioKim/Kim_11/7.jpg';
import kim11_8 from '../../img/project/StudioKim/Kim_11/8.jpg';
import kim11_9 from '../../img/project/StudioKim/Kim_11/9.jpg';
import kim11_10 from '../../img/project/StudioKim/Kim_11/10.jpg';
import kim11_11 from '../../img/project/StudioKim/Kim_11/11.jpg';
import kim11_12 from '../../img/project/StudioKim/Kim_11/12.jpg';
import kim11_13 from '../../img/project/StudioKim/Kim_11/13.jpg';
import kim11_14 from '../../img/project/StudioKim/Kim_11/14.jpg';
import kim11_15 from '../../img/project/StudioKim/Kim_11/15.jpg';
import kim11_16 from '../../img/project/StudioKim/Kim_11/16.jpg';
import kim11_17 from '../../img/project/StudioKim/Kim_11/17.jpg';
import kim11_18 from '../../img/project/StudioKim/Kim_11/18.jpg';
import kim11_19 from '../../img/project/StudioKim/Kim_11/19.jpg';
import kim11_20 from '../../img/project/StudioKim/Kim_11/20.jpg';
import kim11_21 from '../../img/project/StudioKim/Kim_11/21.jpg';
import kim11_22 from '../../img/project/StudioKim/Kim_11/22.jpg';
import kim11_23 from '../../img/project/StudioKim/Kim_11/23.jpg';


const images = [
  {
    original: kim11_2,
    thumbnail: kim11_2,
  },{
    original: kim11_3,
    thumbnail: kim11_3,
  },{
    original: kim11_4,
    thumbnail: kim11_4,
  },{
    original: kim11_5,
    thumbnail: kim11_5,
  },{
    original: kim11_6,
    thumbnail: kim11_6,
  },{
    original: kim11_7,
    thumbnail: kim11_7,
  },{
    original: kim11_8,
    thumbnail: kim11_8,
  },{
    original: kim11_9,
    thumbnail: kim11_9,
  },{
    original: kim11_10,
    thumbnail: kim11_10,
  },{
    original: kim11_11,
    thumbnail: kim11_11,
  },{
    original: kim11_12,
    thumbnail: kim11_12,
  },{
    original: kim11_13,
    thumbnail: kim11_13,
  },{
    original: kim11_14,
    thumbnail: kim11_14,
  },{
    original: kim11_15,
    thumbnail: kim11_15,
  },{
    original: kim11_16,
    thumbnail: kim11_16,
  },{
    original: kim11_17,
    thumbnail: kim11_17,
  },
  {
    original: kim11_18,
    thumbnail: kim11_18,
  },{
    original: kim11_19,
    thumbnail: kim11_19,
  },{
    original: kim11_20,
    thumbnail: kim11_20,
  },{
    original: kim11_21,
    thumbnail: kim11_21,
  },{
    original: kim11_22,
    thumbnail: kim11_22,
  },{
    original: kim11_23,
    thumbnail: kim11_23,
  }
];

function kim11(){
  return(
    <div className='individual'>
      
      <img className="mainimg" src={kim11_1} alt={"asdf"}/>

      <div className="scription">
        <div className="title">
          "集單住居"
        </div>
        <div className="author">
          최민하
        </div>
        <div className="subs">
        이 프로젝트는 각기 다른 사람들이 왜 획일화된 하나의 평면안에 갇혀살까? 라는 의문점을 가지고 시작한 프로젝트이다. 현재의 집합주거는 대부분 효울만을 계산한 주거환경이 제공되고 있가. 이런 점에서 이 설계는 각자의 건축주를 설정하고 그에 맞는 각기 다른 타입의 주거환경을 제공한다. 이러한 주거는 자신에게 맞는 환경과 여러 사람들이 모여 누릴 수 있는 중간공간이 생성된다. 또한 집합주거환경에서 결여된  수직성의 성질을 이용하여 18m 차이의 경사를 가지는 경사지를 풀어나갔다.
        </div>
        <div className="_table">
          <div className="_line"/>
          <div className="xy">
            <div classname="x">대지면적</div>
            <div className="y">6,300m²</div>
          </div>
          <hr/>
          {/* <div className="_line"/> */}
          <div className="xy">
            <div classname="x">대지위치</div>
            <div className="y">서울시 성북동 대사관로 8길</div>
          </div>
          {/* <div className="_line"/> */}
          <hr/>
          <div className="xy">
            <div classname="x">지역지구</div>
            <div className="y">제2종 일반 주거지역</div>
          </div>
          {/* <div className="_line"/> */}
          <hr/>
          <div className="xy">
            <div classname="x">주용도</div>
            <div className="y">다세대주택</div>
          </div>
          {/* <div className="_line"/> */}
          <hr/>
          <div className="xy">
            <div classname="x">규모</div>
            <div className="y">5,000m²</div>
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

export default kim11;