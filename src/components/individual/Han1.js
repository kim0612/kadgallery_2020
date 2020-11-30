import ImageGallery from 'react-image-gallery';

import '../../scss/individual.scss';

import han1_1 from '../../img/project/StudioHan/Han_1/1.jpg';
import han1_2 from '../../img/project/StudioHan/Han_1/2.jpg';
import han1_3 from '../../img/project/StudioHan/Han_1/3.jpg';
import han1_4 from '../../img/project/StudioHan/Han_1/4.jpg';
import han1_5 from '../../img/project/StudioHan/Han_1/5.jpg';
import han1_6 from '../../img/project/StudioHan/Han_1/6.jpg';
import han1_7 from '../../img/project/StudioHan/Han_1/7.jpg';
import han1_8 from '../../img/project/StudioHan/Han_1/8.jpg';
import han1_9 from '../../img/project/StudioHan/Han_1/9.jpg';
import han1_10 from '../../img/project/StudioHan/Han_1/10.jpg';
import han1_11 from '../../img/project/StudioHan/Han_1/11.jpg';
import han1_12 from '../../img/project/StudioHan/Han_1/12.jpg';
import han1_13 from '../../img/project/StudioHan/Han_1/13.jpg';
import han1_14 from '../../img/project/StudioHan/Han_1/14.jpg';
import han1_15 from '../../img/project/StudioHan/Han_1/15.jpg';
import han1_16 from '../../img/project/StudioHan/Han_1/16.jpg';
import han1_17 from '../../img/project/StudioHan/Han_1/17.jpg';
import han1_18 from '../../img/project/StudioHan/Han_1/18.jpg';
import han1_19 from '../../img/project/StudioHan/Han_1/19.jpg';
import han1_20 from '../../img/project/StudioHan/Han_1/20.jpg';
import han1_21 from '../../img/project/StudioHan/Han_1/21.jpg';
import han1_22 from '../../img/project/StudioHan/Han_1/22.jpg';


const images = [
  {
    original: han1_2,
    thumbnail: han1_2,
  },{
    original: han1_3,
    thumbnail: han1_3,
  },{
    original: han1_4,
    thumbnail: han1_4,
  },{
    original: han1_5,
    thumbnail: han1_5,
  },{
    original: han1_6,
    thumbnail: han1_6,
  },{
    original: han1_7,
    thumbnail: han1_7,
  },{
    original: han1_8,
    thumbnail: han1_8,
  },{
    original: han1_9,
    thumbnail: han1_9,
  },{
    original: han1_10,
    thumbnail: han1_10,
  },{
    original: han1_11,
    thumbnail: han1_11,
  },{
    original: han1_12,
    thumbnail: han1_12,
  },{
    original: han1_13,
    thumbnail: han1_13,
  },{
    original: han1_14,
    thumbnail: han1_14,
  },{
    original: han1_15,
    thumbnail: han1_15,
  },{
    original: han1_16,
    thumbnail: han1_16,
  },{
    original: han1_17,
    thumbnail: han1_17,
  },
  {
    original: han1_18,
    thumbnail: han1_18,
  },{
    original: han1_19,
    thumbnail: han1_19,
  },{
    original: han1_20,
    thumbnail: han1_20,
  },{
    original: han1_21,
    thumbnail: han1_21,
  },{
    original: han1_22,
    thumbnail: han1_22,
  }
];

function Han1(){
  return(
    <div className='individual'>
      
      <img className="mainimg" src={han1_1} alt={"asdf"}/>

      <div className="scription">
        <div className="title">
          "시네마 빌리지"
        </div>
        <div className="author">
          박경서
        </div>
        <div className="subs">
        하나의 마을의 형태를 가지는 시네마 빌리지라는 주제로 시작한다. 영화관만의 향기를 도심 속에서 독립된 채 느낄 수 있도록 할 순 없을까? 현재의 영화관은 기술의 발달로 내부 형태는 다양해졌다면, 외부 형태는 좌석이 만들어내는 입면의 사선을 숨겨둔 채 온전히 영화관만을 위한 건물이 되지 못했다. 이에 숨어있는 를 드러내고자 한다
        </div>
        <div className="_table">
          <div className="_line"/>
          <div className="xy">
            <div classname="x">대지면적</div>
            <div className="y"></div>
          </div>
          <hr/>
          {/* <div className="_line"/> */}
          <div className="xy">
            <div classname="x">대지위치</div>
            <div className="y">서울 특별시 강남구 도산대로 173일대</div>
          </div>
          {/* <div className="_line"/> */}
          <hr/>
          <div className="xy">
            <div classname="x">지역지구</div>
            <div className="y">상업지역,제3종 일반 주거 지역</div>
          </div>
          {/* <div className="_line"/> */}
          <hr/>
          <div className="xy">
            <div classname="x">주용도</div>
            <div className="y">영화관</div>
          </div>
          {/* <div className="_line"/> */}
          <hr/>
          <div className="xy">
            <div classname="x">건축면적</div>
            <div className="y">817.2m²</div>
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

export default Han1;