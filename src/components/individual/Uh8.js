import ImageGallery from 'react-image-gallery';

import '../../scss/individual.scss';

import uh8_1 from '../../img/project/StudioUh/Uh_8/1.jpg';
import uh8_2 from '../../img/project/StudioUh/Uh_8/2.jpg';
import uh8_3 from '../../img/project/StudioUh/Uh_8/3.jpg';
import uh8_4 from '../../img/project/StudioUh/Uh_8/4.jpg';
import uh8_5 from '../../img/project/StudioUh/Uh_8/5.jpg';
import uh8_6 from '../../img/project/StudioUh/Uh_8/6.jpg';
import uh8_7 from '../../img/project/StudioUh/Uh_8/7.jpg';
import uh8_8 from '../../img/project/StudioUh/Uh_8/8.jpg';
import uh8_9 from '../../img/project/StudioUh/Uh_8/9.jpg';
import uh8_10 from '../../img/project/StudioUh/Uh_8/10.jpg';
import uh8_11 from '../../img/project/StudioUh/Uh_8/11.jpg';
import uh8_12 from '../../img/project/StudioUh/Uh_8/12.jpg';
import uh8_13 from '../../img/project/StudioUh/Uh_8/13.jpg';
import uh8_14 from '../../img/project/StudioUh/Uh_8/14.jpg';
import uh8_15 from '../../img/project/StudioUh/Uh_8/15.jpg';
import uh8_16 from '../../img/project/StudioUh/Uh_8/16.jpg';
import uh8_17 from '../../img/project/StudioUh/Uh_8/17.jpg';
import uh8_18 from '../../img/project/StudioUh/Uh_8/18.jpg';
import uh8_19 from '../../img/project/StudioUh/Uh_8/19.jpg';
import uh8_20 from '../../img/project/StudioUh/Uh_8/20.jpg';
import uh8_21 from '../../img/project/StudioUh/Uh_8/21.jpg';
import uh8_22 from '../../img/project/StudioUh/Uh_8/22.jpg';
import uh8_23 from '../../img/project/StudioUh/Uh_8/23.jpg';
import uh8_24 from '../../img/project/StudioUh/Uh_8/24.jpg';
import uh8_25 from '../../img/project/StudioUh/Uh_8/25.jpg';


const images = [
  {
    original: uh8_2,
    thumbnail: uh8_2,
  },{
    original: uh8_3,
    thumbnail: uh8_3,
  },{
    original: uh8_4,
    thumbnail: uh8_4,
  },{
    original: uh8_5,
    thumbnail: uh8_5,
  },{
    original: uh8_6,
    thumbnail: uh8_6,
  },{
    original: uh8_7,
    thumbnail: uh8_7,
  },{
    original: uh8_8,
    thumbnail: uh8_8,
  },{
    original: uh8_9,
    thumbnail: uh8_9,
  },{
    original: uh8_10,
    thumbnail: uh8_10,
  },{
    original: uh8_11,
    thumbnail: uh8_11,
  },{
    original: uh8_12,
    thumbnail: uh8_12,
  },{
    original: uh8_13,
    thumbnail: uh8_13,
  },{
    original: uh8_14,
    thumbnail: uh8_14,
  },{
    original: uh8_15,
    thumbnail: uh8_15,
  },{
    original: uh8_16,
    thumbnail: uh8_16,
  },{
    original: uh8_17,
    thumbnail: uh8_17,
  },
  {
    original: uh8_18,
    thumbnail: uh8_18,
  },{
    original: uh8_19,
    thumbnail: uh8_19,
  },{
    original: uh8_20,
    thumbnail: uh8_20,
  },{
    original: uh8_21,
    thumbnail: uh8_21,
  },{
    original: uh8_22,
    thumbnail: uh8_22,
  },{
    original: uh8_23,
    thumbnail: uh8_23,
  },{
    original: uh8_24,
    thumbnail: uh8_24,
  },{
    original: uh8_25,
    thumbnail: uh8_25,
  }
];

function Uh8(){
  return(
    <div className='individual'>
      
      <img className="mainimg" src={uh8_1} alt={"asdf"}/>

      <div className="scription">
        <div className="title">
          "萬-歲 : 만-세"
        </div>
        <div className="author">
          강내은
        </div>
        <div className="subs">
        “대한이 살았다”라고 ‘피눈물로 기도’한 이들의 당찬 의지를 건축으로 담고싶으며, ‘아픈 역사에 꺾인 한송이의 꽃’으로 묘사하기 보다, ‘죽음에도 꺾이지 않는 운동가’로서의 의지를 강조하고자 합니다. 비록 역사에는 이름 한 자 남지 못했지만 기개와 용기가 이 추모 및 기념관을 계기로 더욱 많이 알려지길 희망합니다.
        </div>
        <div className="_table">
          <div className="_line"/>
          <div className="xy">
            <div classname="x">대지면적</div>
            <div className="y">4,125m²</div>
          </div>
          <hr/>
          {/* <div className="_line"/> */}
          <div className="xy">
            <div classname="x">대지위치</div>
            <div className="y">서울시 서대문 독립공원</div>
          </div>
          {/* <div className="_line"/> */}
          <hr/>
          <div className="xy">
            <div classname="x">지역지구</div>
            <div className="y">국공유지</div>
          </div>
          {/* <div className="_line"/> */}
          <hr/>
          <div className="xy">
            <div classname="x">주용도</div>
            <div className="y">추모시설</div>
          </div>
          {/* <div className="_line"/> */}
          <hr/>
          <div className="xy">
            <div classname="x">규모</div>
            <div className="y">지하3층, 지상1층</div>
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

export default Uh8;