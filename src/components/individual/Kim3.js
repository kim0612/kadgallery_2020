import ImageGallery from 'react-image-gallery';

import '../../scss/individual.scss';

import kim3_1 from '../../img/project/StudioKim/Kim_3/1.jpg';
import kim3_2 from '../../img/project/StudioKim/Kim_3/2.jpg';
import kim3_3 from '../../img/project/StudioKim/Kim_3/3.jpg';
import kim3_4 from '../../img/project/StudioKim/Kim_3/4.jpg';
import kim3_5 from '../../img/project/StudioKim/Kim_3/5.jpg';
import kim3_6 from '../../img/project/StudioKim/Kim_3/6.jpg';
import kim3_7 from '../../img/project/StudioKim/Kim_3/7.jpg';
import kim3_8 from '../../img/project/StudioKim/Kim_3/8.jpg';
import kim3_9 from '../../img/project/StudioKim/Kim_3/9.jpg';
import kim3_10 from '../../img/project/StudioKim/Kim_3/10.jpg';
import kim3_11 from '../../img/project/StudioKim/Kim_3/11.jpg';
import kim3_12 from '../../img/project/StudioKim/Kim_3/12.jpg';
import kim3_13 from '../../img/project/StudioKim/Kim_3/13.jpg';
import kim3_14 from '../../img/project/StudioKim/Kim_3/14.jpg';
import kim3_15 from '../../img/project/StudioKim/Kim_3/15.jpg';


const images = [
  {
    original: kim3_2,
    thumbnail: kim3_2,
  },{
    original: kim3_3,
    thumbnail: kim3_3,
  },{
    original: kim3_4,
    thumbnail: kim3_4,
  },{
    original: kim3_5,
    thumbnail: kim3_5,
  },{
    original: kim3_6,
    thumbnail: kim3_6,
  },{
    original: kim3_7,
    thumbnail: kim3_7,
  },{
    original: kim3_8,
    thumbnail: kim3_8,
  },{
    original: kim3_9,
    thumbnail: kim3_9,
  },{
    original: kim3_10,
    thumbnail: kim3_10,
  },{
    original: kim3_11,
    thumbnail: kim3_11,
  },{
    original: kim3_12,
    thumbnail: kim3_12,
  },{
    original: kim3_13,
    thumbnail: kim3_13,
  },{
    original: kim3_14,
    thumbnail: kim3_14,
  },{
    original: kim3_15,
    thumbnail: kim3_15,
  }
];

function kim3(){
  return(
    <div className='individual'>
      
      <img className="mainimg" src={kim3_1} alt={"asdf"}/>

      <div className="scription">
        <div className="title">
          "Usadan-gil salad"
        </div>
        <div className="author">
        김희지
        </div>
        <div className="subs">
        우사단길 샐러드 프로젝트는 이태원 우사단길의 특색을 이해하고 보존하면서 불법 건축으로 발생한 주거 환경과 가로 환경문제를 해소하기 위한 리노베이션 프로토 타입을 제안하는 프로젝트 입니다.        </div>
        <div className="_table">
          <div className="_line"/>
          <div className="xy">
            <div classname="x">대지면적</div>
            <div className="y">430m² / 200m²</div>
          </div>
          <hr/>
          {/* <div className="_line"/> */}
          <div className="xy">
            <div classname="x">대지위치</div>
            <div className="y">서울 용산구 우사단로 10길</div>
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
            <div className="y"> 상업시설, 주거시설</div>
          </div>
          {/* <div className="_line"/> */}
          <hr/>
          <div className="xy">
            <div classname="x">규모</div>
            <div className="y">600m² / 280m²</div>
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

export default kim3;