import ImageGallery from 'react-image-gallery';

import '../../scss/individual.scss';

import han12_1 from '../../img/project/StudioHan/Han_12/1.jpg';
import han12_2 from '../../img/project/StudioHan/Han_12/2.jpg';
import han12_3 from '../../img/project/StudioHan/Han_12/3.jpg';
import han12_4 from '../../img/project/StudioHan/Han_12/4.jpg';
import han12_5 from '../../img/project/StudioHan/Han_12/5.jpg';
import han12_6 from '../../img/project/StudioHan/Han_12/6.jpg';
import han12_7 from '../../img/project/StudioHan/Han_12/7.jpg';
import han12_8 from '../../img/project/StudioHan/Han_12/8.jpg';
import han12_9 from '../../img/project/StudioHan/Han_12/9.jpg';
import han12_10 from '../../img/project/StudioHan/Han_12/10.jpg';
import han12_11 from '../../img/project/StudioHan/Han_12/11.jpg';
import han12_12 from '../../img/project/StudioHan/Han_12/12.jpg';
import han12_13 from '../../img/project/StudioHan/Han_12/13.jpg';
import han12_14 from '../../img/project/StudioHan/Han_12/14.jpg';
import han12_15 from '../../img/project/StudioHan/Han_12/15.jpg';
import han12_16 from '../../img/project/StudioHan/Han_12/16.jpg';
import han12_17 from '../../img/project/StudioHan/Han_12/17.jpg';
import han12_18 from '../../img/project/StudioHan/Han_12/18.jpg';
import han12_19 from '../../img/project/StudioHan/Han_12/19.jpg';
import han12_20 from '../../img/project/StudioHan/Han_12/20.jpg';
import han12_21 from '../../img/project/StudioHan/Han_12/21.jpg';
import han12_22 from '../../img/project/StudioHan/Han_12/22.jpg';
import han12_23 from '../../img/project/StudioHan/Han_12/23.jpg';
import han12_24 from '../../img/project/StudioHan/Han_12/24.jpg';
import han12_25 from '../../img/project/StudioHan/Han_12/25.jpg';


const images = [
  {
    original: han12_2,
    thumbnail: han12_2,
  },{
    original: han12_3,
    thumbnail: han12_3,
  },{
    original: han12_4,
    thumbnail: han12_4,
  },{
    original: han12_5,
    thumbnail: han12_5,
  },{
    original: han12_6,
    thumbnail: han12_6,
  },{
    original: han12_7,
    thumbnail: han12_7,
  },{
    original: han12_8,
    thumbnail: han12_8,
  },{
    original: han12_9,
    thumbnail: han12_9,
  },{
    original: han12_10,
    thumbnail: han12_10,
  },{
    original: han12_11,
    thumbnail: han12_11,
  },{
    original: han12_12,
    thumbnail: han12_12,
  },{
    original: han12_13,
    thumbnail: han12_13,
  },{
    original: han12_14,
    thumbnail: han12_14,
  },{
    original: han12_15,
    thumbnail: han12_15,
  },{
    original: han12_16,
    thumbnail: han12_16,
  },{
    original: han12_17,
    thumbnail: han12_17,
  },
  {
    original: han12_18,
    thumbnail: han12_18,
  },{
    original: han12_19,
    thumbnail: han12_19,
  },{
    original: han12_20,
    thumbnail: han12_20,
  },{
    original: han12_21,
    thumbnail: han12_21,
  },{
    original: han12_22,
    thumbnail: han12_22,
  },{
    original: han12_23,
    thumbnail: han12_23,
  },{
    original: han12_24,
    thumbnail: han12_24,
  },{
    original: han12_25,
    thumbnail: han12_25,
  }
];

function Han12(){
  return(
    <div className='individual'>
      
      <img className="mainimg" src={han12_1} alt={"asdf"}/>

      <div className="scription">
        <div className="title">
          "SHARE In share"
        </div>
        <div className="author">
          유민지
        </div>
        <div className="subs">
        'Share in share'란 기숙사 자체를 큰 공유공간으로 생각하였고, 그 속에서 나누어지는 사이공간, 중앙라운지, 방 등을 큰 공유공간 속의 작은 공유공간이라고 생각하여 나오게 된 이름이다.
여러학교, 여러지역에서 모인 학생들에게 잠, 소통, 공부를 해결 할 수 있도록 한 기숙사이다.        </div>
        <div className="_table">
          <div className="_line"/>
          <div className="xy">
            <div classname="x">대지면적</div>
            <div className="y">3,436m²</div>
          </div>
          <hr/>
          {/* <div className="_line"/> */}
          <div className="xy">
            <div classname="x">대지위치</div>
            <div className="y">충남 천안시 동남구 대흥로 339</div>
          </div>
          {/* <div className="_line"/> */}
          <hr/>
          <div className="xy">
            <div classname="x">지역지구</div>
            <div className="y">제2종 일반주거지역</div>
          </div>
          {/* <div className="_line"/> */}
          <hr/>
          <div className="xy">
            <div classname="x">주용도</div>
            <div className="y">기숙사</div>
          </div>
          {/* <div className="_line"/> */}
          <hr/>
          <div className="xy">
            <div classname="x">규모</div>
            <div className="y">12,000m²</div>
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

export default Han12;