import ImageGallery from 'react-image-gallery';

import '../../scss/individual.scss';

import han6_1 from '../../img/project/StudioHan/Han_6/1.jpg';
import han6_2 from '../../img/project/StudioHan/Han_6/2.jpg';
import han6_3 from '../../img/project/StudioHan/Han_6/3.jpg';
import han6_4 from '../../img/project/StudioHan/Han_6/4.jpg';
import han6_5 from '../../img/project/StudioHan/Han_6/5.jpg';
import han6_6 from '../../img/project/StudioHan/Han_6/6.jpg';
import han6_7 from '../../img/project/StudioHan/Han_6/7.jpg';
import han6_8 from '../../img/project/StudioHan/Han_6/8.jpg';
import han6_9 from '../../img/project/StudioHan/Han_6/9.jpg';
import han6_10 from '../../img/project/StudioHan/Han_6/10.jpg';
import han6_11 from '../../img/project/StudioHan/Han_6/11.jpg';
import han6_12 from '../../img/project/StudioHan/Han_6/12.jpg';
import han6_13 from '../../img/project/StudioHan/Han_6/13.jpg';
import han6_14 from '../../img/project/StudioHan/Han_6/14.jpg';
import han6_15 from '../../img/project/StudioHan/Han_6/15.jpg';


const images = [
  {
    original: han6_2,
    thumbnail: han6_2,
  },{
    original: han6_3,
    thumbnail: han6_3,
  },{
    original: han6_4,
    thumbnail: han6_4,
  },{
    original: han6_5,
    thumbnail: han6_5,
  },{
    original: han6_6,
    thumbnail: han6_6,
  },{
    original: han6_7,
    thumbnail: han6_7,
  },{
    original: han6_8,
    thumbnail: han6_8,
  },{
    original: han6_9,
    thumbnail: han6_9,
  },{
    original: han6_10,
    thumbnail: han6_10,
  },{
    original: han6_11,
    thumbnail: han6_11,
  },{
    original: han6_12,
    thumbnail: han6_12,
  },{
    original: han6_13,
    thumbnail: han6_13,
  },{
    original: han6_14,
    thumbnail: han6_14,
  },{
    original: han6_15,
    thumbnail: han6_15,
  }
];

function Han6(){
  return(
    <div className='individual'>
      
      <img className="mainimg" src={han6_1} alt={"asdf"}/>

      <div className="scription">
        <div className="title">
          "SHARE the SQURE!"
        </div>
        <div className="author">
          홍주비
        </div>
        <div className="subs">
        만안구는 동안구에 비해 현저히 문화시설이 부족하다. 안양역 앞 주변에 많은 유동인구들과 많은 상가들과 주거 등 도심 속에서 액티브한 운동을 할 수 있는 프로그램을 설계해보았다. 역 앞이라 교통이 용이하고 유동인구와 사용층이 다양하여 쉽게 접근 가능하다.        </div>
        <div className="_table">
          <div className="_line"/>
          <div className="xy">
            <div classname="x">대지면적</div>
            <div className="y">3,500m²</div>
          </div>
          <hr/>
          {/* <div className="_line"/> */}
          <div className="xy">
            <div classname="x">대지위치</div>
            <div className="y">경기 안양시 만안구 만안로 249 외</div>
          </div>
          {/* <div className="_line"/> */}
          <hr/>
          <div className="xy">
            <div classname="x">지역지구</div>
            <div className="y">상업시설</div>
          </div>
          {/* <div className="_line"/> */}
          <hr/>
          <div className="xy">
            <div classname="x">주용도</div>
            <div className="y">체육관</div>
          </div>
          {/* <div className="_line"/> */}
          <hr/>
          <div className="xy">
            <div classname="x">규모</div>
            <div className="y">9,000m²</div>
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

export default Han6;