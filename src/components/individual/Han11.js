import ImageGallery from 'react-image-gallery';

import '../../scss/individual.scss';

import han11_1 from '../../img/project/StudioHan/Han_11/1.jpg';
import han11_2 from '../../img/project/StudioHan/Han_11/2.jpg';
import han11_3 from '../../img/project/StudioHan/Han_11/3.jpg';
import han11_4 from '../../img/project/StudioHan/Han_11/4.jpg';
import han11_5 from '../../img/project/StudioHan/Han_11/5.jpg';
import han11_6 from '../../img/project/StudioHan/Han_11/6.jpg';
import han11_7 from '../../img/project/StudioHan/Han_11/7.jpg';
import han11_8 from '../../img/project/StudioHan/Han_11/8.jpg';
import han11_9 from '../../img/project/StudioHan/Han_11/9.jpg';
import han11_10 from '../../img/project/StudioHan/Han_11/10.jpg';
import han11_11 from '../../img/project/StudioHan/Han_11/11.jpg';
import han11_12 from '../../img/project/StudioHan/Han_11/12.jpg';
import han11_13 from '../../img/project/StudioHan/Han_11/13.jpg';
import han11_14 from '../../img/project/StudioHan/Han_11/14.jpg';
import han11_15 from '../../img/project/StudioHan/Han_11/15.jpg';



const images = [
  {
    original: han11_2,
    thumbnail: han11_2,
  },{
    original: han11_3,
    thumbnail: han11_3,
  },{
    original: han11_4,
    thumbnail: han11_4,
  },{
    original: han11_5,
    thumbnail: han11_5,
  },{
    original: han11_6,
    thumbnail: han11_6,
  },{
    original: han11_7,
    thumbnail: han11_7,
  },{
    original: han11_8,
    thumbnail: han11_8,
  },{
    original: han11_9,
    thumbnail: han11_9,
  },{
    original: han11_10,
    thumbnail: han11_10,
  },{
    original: han11_11,
    thumbnail: han11_11,
  },{
    original: han11_12,
    thumbnail: han11_12,
  },{
    original: han11_13,
    thumbnail: han11_13,
  },{
    original: han11_14,
    thumbnail: han11_14,
  },{
    original: han11_15,
    thumbnail: han11_15,
  }
];

function Han11(){
  return(
    <div className='individual'>
      
      <img className="mainimg" src={han11_1} alt={"asdf"}/>

      <div className="scription">
        <div className="title">
          "성수동과 수제화"
        </div>
        <div className="author">
          선현정
        </div>
        <div className="subs">
        예전에는 수제화를 위해 성수동을 방문하는 사람들이 대부분이었지만 지금은 대부분 카페거리나 서울숲을 방문하기 위해 찾는다. 이에 따라 카페거리와 서울숲 사이에 수제화 관련 복합문화시설을 위치시켜 카페거리와 서울숲을 오가는 사람들이 잠시 쉬었다 가며 수제화를 접할 수 있는 공간을 제안한다. 전시를 보며 작업실의 소리나 실루엣을 접할 수 있도록 의도했다.
        </div>
        <div className="_table">
          <div className="_line"/>
          <div className="xy">
            <div classname="x">대지면적</div>
            <div className="y">1,375m²</div>
          </div>
          <hr/>
          {/* <div className="_line"/> */}
          <div className="xy">
            <div classname="x">대지위치</div>
            <div className="y">서울특별시 성동구 성수동</div>
          </div>
          {/* <div className="_line"/> */}
          <hr/>
          <div className="xy">
            <div classname="x">지역지구</div>
            <div className="y">준공업지역</div>
          </div>
          {/* <div className="_line"/> */}
          <hr/>
          <div className="xy">
            <div classname="x">주용도</div>
            <div className="y">수제화관련 복합문화시설</div>
          </div>
          {/* <div className="_line"/> */}
          <hr/>
          <div className="xy">
            <div classname="x">규모</div>
            <div className="y">건축면적 961m²  연면적 2,698m²</div>
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

export default Han11;