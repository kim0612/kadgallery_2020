import ImageGallery from 'react-image-gallery';

import '../../scss/individual.scss';

import han5_1 from '../../img/project/StudioHan/Han_5/1.jpg';
import han5_2 from '../../img/project/StudioHan/Han_5/2.jpg';
import han5_3 from '../../img/project/StudioHan/Han_5/3.jpg';
import han5_4 from '../../img/project/StudioHan/Han_5/4.jpg';
import han5_5 from '../../img/project/StudioHan/Han_5/5.jpg';
import han5_6 from '../../img/project/StudioHan/Han_5/6.jpg';
import han5_7 from '../../img/project/StudioHan/Han_5/7.jpg';
import han5_8 from '../../img/project/StudioHan/Han_5/8.jpg';
import han5_9 from '../../img/project/StudioHan/Han_5/9.jpg';
import han5_10 from '../../img/project/StudioHan/Han_5/10.jpg';
import han5_11 from '../../img/project/StudioHan/Han_5/11.jpg';
import han5_12 from '../../img/project/StudioHan/Han_5/12.jpg';
import han5_13 from '../../img/project/StudioHan/Han_5/13.jpg';
import han5_14 from '../../img/project/StudioHan/Han_5/14.jpg';
import han5_15 from '../../img/project/StudioHan/Han_5/15.jpg';
import han5_16 from '../../img/project/StudioHan/Han_5/16.jpg';
import han5_17 from '../../img/project/StudioHan/Han_5/17.jpg';
import han5_18 from '../../img/project/StudioHan/Han_5/18.jpg';
import han5_19 from '../../img/project/StudioHan/Han_5/19.jpg';
import han5_20 from '../../img/project/StudioHan/Han_5/20.jpg';
import han5_21 from '../../img/project/StudioHan/Han_5/21.jpg';
import han5_22 from '../../img/project/StudioHan/Han_5/22.jpg';


const images = [
  {
    original: han5_2,
    thumbnail: han5_2,
  },{
    original: han5_3,
    thumbnail: han5_3,
  },{
    original: han5_4,
    thumbnail: han5_4,
  },{
    original: han5_5,
    thumbnail: han5_5,
  },{
    original: han5_6,
    thumbnail: han5_6,
  },{
    original: han5_7,
    thumbnail: han5_7,
  },{
    original: han5_8,
    thumbnail: han5_8,
  },{
    original: han5_9,
    thumbnail: han5_9,
  },{
    original: han5_10,
    thumbnail: han5_10,
  },{
    original: han5_11,
    thumbnail: han5_11,
  },{
    original: han5_12,
    thumbnail: han5_12,
  },{
    original: han5_13,
    thumbnail: han5_13,
  },{
    original: han5_14,
    thumbnail: han5_14,
  },{
    original: han5_15,
    thumbnail: han5_15,
  },{
    original: han5_16,
    thumbnail: han5_16,
  },{
    original: han5_17,
    thumbnail: han5_17,
  },
  {
    original: han5_18,
    thumbnail: han5_18,
  },{
    original: han5_19,
    thumbnail: han5_19,
  },{
    original: han5_20,
    thumbnail: han5_20,
  },{
    original: han5_21,
    thumbnail: han5_21,
  },{
    original: han5_22,
    thumbnail: han5_22,
  }
];

function Han5(){
  return(
    <div className='individual'>
      
      <img className="mainimg" src={han5_1} alt={"asdf"}/>

      <div className="scription">
        <div className="title">
          "New leisure life"
        </div>
        <div className="author">
          김유상
        </div>
        <div className="subs">
        현대인들은 새로운 활동을 찾고 가족들과 함께 할 공간을 찾는다. 바로 주말농장이다. 주말농장은 도시 외곽에 위치하고 대부분의 주 고객이 어린 자녀를 가지고 있고 소작농을 한다. 주말농장과 주 고객간의 거리의 문제를 어떻게 해결해 줄 수 있을까? 라는 의문에서 설계를 진행하였다. 대지의 위치는 한강 서래섬이고 접근성은 좋으나 주변의 다양성이 결여된 활동과 이벤트의 부재를 건축이 동반된 도심속의 주말농장 이라는 흥미로운 여가생활이 대지에 다양성을 부여 할 것이다.        </div>
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
            <div className="y">한강 반포지구 서래섬</div>
          </div>
          {/* <div className="_line"/> */}
          <hr/>
          <div className="xy">
            <div classname="x">지역지구</div>
            <div className="y">서울 서초구</div>
          </div>
          {/* <div className="_line"/> */}
          <hr/>
          <div className="xy">
            <div classname="x">주용도</div>
            <div className="y">주말농장</div>
          </div>
          {/* <div className="_line"/> */}
          <hr/>
          <div className="xy">
            <div classname="x">규모</div>
            <div className="y"></div>
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

export default Han5;