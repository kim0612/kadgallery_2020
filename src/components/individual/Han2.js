import ImageGallery from 'react-image-gallery';

import '../../scss/individual.scss';

import han2_1 from '../../img/project/StudioHan/Han_2/1.jpg';
import han2_2 from '../../img/project/StudioHan/Han_2/2.jpg';
import han2_3 from '../../img/project/StudioHan/Han_2/3.jpg';
import han2_4 from '../../img/project/StudioHan/Han_2/4.jpg';
import han2_5 from '../../img/project/StudioHan/Han_2/5.jpg';
import han2_6 from '../../img/project/StudioHan/Han_2/6.jpg';
import han2_7 from '../../img/project/StudioHan/Han_2/7.jpg';
import han2_8 from '../../img/project/StudioHan/Han_2/8.jpg';
import han2_9 from '../../img/project/StudioHan/Han_2/9.jpg';
import han2_10 from '../../img/project/StudioHan/Han_2/10.jpg';
import han2_11 from '../../img/project/StudioHan/Han_2/11.jpg';
import han2_12 from '../../img/project/StudioHan/Han_2/12.jpg';
import han2_13 from '../../img/project/StudioHan/Han_2/13.jpg';
import han2_14 from '../../img/project/StudioHan/Han_2/14.jpg';
import han2_15 from '../../img/project/StudioHan/Han_2/15.jpg';
import han2_16 from '../../img/project/StudioHan/Han_2/16.jpg';
import han2_17 from '../../img/project/StudioHan/Han_2/17.jpg';
import han2_18 from '../../img/project/StudioHan/Han_2/18.jpg';
import han2_19 from '../../img/project/StudioHan/Han_2/19.jpg';


const images = [
  {
    original: han2_2,
    thumbnail: han2_2,
  },{
    original: han2_3,
    thumbnail: han2_3,
  },{
    original: han2_4,
    thumbnail: han2_4,
  },{
    original: han2_5,
    thumbnail: han2_5,
  },{
    original: han2_6,
    thumbnail: han2_6,
  },{
    original: han2_7,
    thumbnail: han2_7,
  },{
    original: han2_8,
    thumbnail: han2_8,
  },{
    original: han2_9,
    thumbnail: han2_9,
  },{
    original: han2_10,
    thumbnail: han2_10,
  },{
    original: han2_11,
    thumbnail: han2_11,
  },{
    original: han2_12,
    thumbnail: han2_12,
  },{
    original: han2_13,
    thumbnail: han2_13,
  },{
    original: han2_14,
    thumbnail: han2_14,
  },{
    original: han2_15,
    thumbnail: han2_15,
  },{
    original: han2_16,
    thumbnail: han2_16,
  },{
    original: han2_17,
    thumbnail: han2_17,
  },
  {
    original: han2_18,
    thumbnail: han2_18,
  },{
    original: han2_19,
    thumbnail: han2_19,
  }
];

function Han2(){
  return(
    <div className='individual'>
      
      <img className="mainimg" src={han2_1} alt={"asdf"}/>

      <div className="scription">
        <div className="title">
          "Gradation"
        </div>
        <div className="author">
          백승관
        </div>
        <div className="subs">
        그라데이션은 흑백과 같은 대립되는 두 요소사이를 완화시켜주는 회색층이 존재해야 보인다. 이 그라데이션을 표현하기 위해 도시의 모습중 고가도로로 단절된 한강변 부지에 복합문화공간을 계획하여 단절된 환경을 완화하며, 그라데이션을 표현하고자 한다.
        </div>
        <div className="_table">
          <div className="_line"/>
          <div className="xy">
            <div classname="x">대지면적</div>
            <div className="y">8,300m²</div>
          </div>
          <hr/>
          {/* <div className="_line"/> */}
          <div className="xy">
            <div classname="x">대지위치</div>
            <div className="y">서울 마포구 망원동 동교로1길변</div>
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
            <div className="y">복합문화시설</div>
          </div>
          {/* <div className="_line"/> */}
          <hr/>
          <div className="xy">
            <div classname="x">규모</div>
            <div className="y">6,340m²</div>
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

export default Han2;