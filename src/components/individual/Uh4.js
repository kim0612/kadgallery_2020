import ImageGallery from 'react-image-gallery';

import '../../scss/individual.scss';

import uh4_1 from '../../img/project/StudioUh/Uh_4/1.jpg';
import uh4_2 from '../../img/project/StudioUh/Uh_4/2.jpg';
import uh4_3 from '../../img/project/StudioUh/Uh_4/3.jpg';
import uh4_4 from '../../img/project/StudioUh/Uh_4/4.jpg';
import uh4_5 from '../../img/project/StudioUh/Uh_4/5.jpg';
import uh4_6 from '../../img/project/StudioUh/Uh_4/6.jpg';
import uh4_7 from '../../img/project/StudioUh/Uh_4/7.jpg';
import uh4_8 from '../../img/project/StudioUh/Uh_4/8.jpg';
import uh4_9 from '../../img/project/StudioUh/Uh_4/9.jpg';
import uh4_10 from '../../img/project/StudioUh/Uh_4/10.jpg';
import uh4_11 from '../../img/project/StudioUh/Uh_4/11.jpg';
import uh4_12 from '../../img/project/StudioUh/Uh_4/12.jpg';
import uh4_13 from '../../img/project/StudioUh/Uh_4/13.jpg';
import uh4_14 from '../../img/project/StudioUh/Uh_4/14.jpg';
import uh4_15 from '../../img/project/StudioUh/Uh_4/15.jpg';
import uh4_16 from '../../img/project/StudioUh/Uh_4/16.jpg';
import uh4_17 from '../../img/project/StudioUh/Uh_4/17.jpg';
import uh4_18 from '../../img/project/StudioUh/Uh_4/18.jpg';
import uh4_19 from '../../img/project/StudioUh/Uh_4/19.jpg';
import uh4_20 from '../../img/project/StudioUh/Uh_4/20.jpg';
import uh4_21 from '../../img/project/StudioUh/Uh_4/21.jpg';
import uh4_22 from '../../img/project/StudioUh/Uh_4/22.jpg';
import uh4_23 from '../../img/project/StudioUh/Uh_4/23.jpg';


const images = [
  {
    original: uh4_2,
    thumbnail: uh4_2,
  },{
    original: uh4_3,
    thumbnail: uh4_3,
  },{
    original: uh4_4,
    thumbnail: uh4_4,
  },{
    original: uh4_5,
    thumbnail: uh4_5,
  },{
    original: uh4_6,
    thumbnail: uh4_6,
  },{
    original: uh4_7,
    thumbnail: uh4_7,
  },{
    original: uh4_8,
    thumbnail: uh4_8,
  },{
    original: uh4_9,
    thumbnail: uh4_9,
  },{
    original: uh4_10,
    thumbnail: uh4_10,
  },{
    original: uh4_11,
    thumbnail: uh4_11,
  },{
    original: uh4_12,
    thumbnail: uh4_12,
  },{
    original: uh4_13,
    thumbnail: uh4_13,
  },{
    original: uh4_14,
    thumbnail: uh4_14,
  },{
    original: uh4_15,
    thumbnail: uh4_15,
  },{
    original: uh4_16,
    thumbnail: uh4_16,
  },{
    original: uh4_17,
    thumbnail: uh4_17,
  },
  {
    original: uh4_18,
    thumbnail: uh4_18,
  },{
    original: uh4_19,
    thumbnail: uh4_19,
  },{
    original: uh4_20,
    thumbnail: uh4_20,
  },{
    original: uh4_21,
    thumbnail: uh4_21,
  },{
    original: uh4_22,
    thumbnail: uh4_22,
  },{
    original: uh4_23,
    thumbnail: uh4_23,
  }
];

function Uh4(){
  return(
    <div className='individual'>
      
      <img className="mainimg" src={uh4_1} alt={"asdf"}/>

      <div className="scription">
        <div className="title">
          "SOVEREIGN 사옥"
        </div>
        <div className="author">
        김황조
        </div>
        <div className="subs">
        패션 브랜드 SOVEREIGN의 사옥이다. 패션거리 가로수길에 설계하였고 프로그램에 따라 다른 공간에서의 활동을 할 수 있것에 초점을 두었다. 사옥안에서 가로수길의 부족한 녹지를 보안하려 하였고 브랜드 패턴을 이용한 입면 디자인을 하였다.
        </div>
        <div className="_table">
          <div className="_line"/>
          <div className="xy">
            <div classname="x">대지면적</div>
            <div className="y">2,279.7m²</div>
          </div>
          <hr/>
          {/* <div className="_line"/> */}
          <div className="xy">
            <div classname="x">대지위치</div>
            <div className="y">서울 강남구 도산대로17길</div>
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
            <div className="y">업무시설</div>
          </div>
          {/* <div className="_line"/> */}
          <hr/>
          <div className="xy">
            <div classname="x">규모</div>
            <div className="y">2,500m²</div>
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

export default Uh4;