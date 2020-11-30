import ImageGallery from 'react-image-gallery';

import '../../scss/individual.scss';

import uh1_1 from '../../img/project/StudioUh/Uh_1/1.jpg';
import uh1_2 from '../../img/project/StudioUh/Uh_1/2.jpg';
import uh1_3 from '../../img/project/StudioUh/Uh_1/3.jpg';
import uh1_4 from '../../img/project/StudioUh/Uh_1/4.jpg';
import uh1_5 from '../../img/project/StudioUh/Uh_1/5.jpg';
import uh1_6 from '../../img/project/StudioUh/Uh_1/6.jpg';
import uh1_7 from '../../img/project/StudioUh/Uh_1/7.jpg';
import uh1_8 from '../../img/project/StudioUh/Uh_1/8.jpg';
import uh1_9 from '../../img/project/StudioUh/Uh_1/9.jpg';
import uh1_10 from '../../img/project/StudioUh/Uh_1/10.jpg';
import uh1_11 from '../../img/project/StudioUh/Uh_1/11.jpg';
import uh1_12 from '../../img/project/StudioUh/Uh_1/12.jpg';
import uh1_13 from '../../img/project/StudioUh/Uh_1/13.jpg';
import uh1_14 from '../../img/project/StudioUh/Uh_1/14.jpg';
import uh1_15 from '../../img/project/StudioUh/Uh_1/15.jpg';
import uh1_16 from '../../img/project/StudioUh/Uh_1/16.jpg';


const images = [
  {
    original: uh1_2,
    thumbnail: uh1_2,
  },{
    original: uh1_3,
    thumbnail: uh1_3,
  },{
    original: uh1_4,
    thumbnail: uh1_4,
  },{
    original: uh1_5,
    thumbnail: uh1_5,
  },{
    original: uh1_6,
    thumbnail: uh1_6,
  },{
    original: uh1_7,
    thumbnail: uh1_7,
  },{
    original: uh1_8,
    thumbnail: uh1_8,
  },{
    original: uh1_9,
    thumbnail: uh1_9,
  },{
    original: uh1_10,
    thumbnail: uh1_10,
  },{
    original: uh1_11,
    thumbnail: uh1_11,
  },{
    original: uh1_12,
    thumbnail: uh1_12,
  },{
    original: uh1_13,
    thumbnail: uh1_13,
  },{
    original: uh1_14,
    thumbnail: uh1_14,
  },{
    original: uh1_15,
    thumbnail: uh1_15,
  },{
    original: uh1_16,
    thumbnail: uh1_16,
  }
];

function Uh1(){
  return(
    <div className='individual'>
      
      <img className="mainimg" src={uh1_1} alt={"asdf"}/>

      <div className="scription">
        <div className="title">
          "소행성"
        </div>
        <div className="author">
        김승현
        </div>
        <div className="subs">
        태평동에 위치한 협소주택 "소행성"은 소소한 행복과 성공을 추구하는 N포세대로 결혼,연예,출산등을 포기한 세대로 같은 생각을 가진 사람끼리 
   하나의 공동체로써 삶을 살아가고 공유하는 새로운 공동체의 라이프 스타일을 줄길 수 있는 신개념주택입니다. 
   협소한 주택에 스킵플로어를 주어 시야를 확보하여 개방감을 줄 수 있고 이웃집을 염두해 둔 창을 적절히 배치하여 작은 주택이지만
   좁게 느껴지지 않는 주택입니다.        </div>
        <div className="_table">
          <div className="_line"/>
          <div className="xy">
            <div classname="x">대지면적</div>
            <div className="y">124.66m²</div>
          </div>
          <hr/>
          {/* <div className="_line"/> */}
          <div className="xy">
            <div classname="x">대지위치</div>
            <div className="y">경기도 성남시 수정구 태평동 7263-10</div>
          </div>
          {/* <div className="_line"/> */}
          <hr/>
          <div className="xy">
            <div classname="x">지역지구</div>
            <div className="y">제2종일반주거지역</div>
          </div>
          {/* <div className="_line"/> */}
          <hr/>
          <div className="xy">
            <div classname="x">주용도</div>
            <div className="y">협소주택</div>
          </div>
          {/* <div className="_line"/> */}
          <hr/>
          <div className="xy">
            <div classname="x">규모</div>
            <div className="y">173.24m²</div>
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

export default Uh1;