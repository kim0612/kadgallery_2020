import ImageGallery from 'react-image-gallery';

import '../../scss/individual.scss';

import han10_1 from '../../img/project/StudioHan/Han_10/1.jpg';
import han10_2 from '../../img/project/StudioHan/Han_10/2.jpg';
import han10_3 from '../../img/project/StudioHan/Han_10/3.jpg';
import han10_4 from '../../img/project/StudioHan/Han_10/4.jpg';
import han10_5 from '../../img/project/StudioHan/Han_10/5.jpg';
import han10_6 from '../../img/project/StudioHan/Han_10/6.jpg';
import han10_7 from '../../img/project/StudioHan/Han_10/7.jpg';
import han10_8 from '../../img/project/StudioHan/Han_10/8.jpg';
import han10_9 from '../../img/project/StudioHan/Han_10/9.jpg';
import han10_10 from '../../img/project/StudioHan/Han_10/10.jpg';
import han10_11 from '../../img/project/StudioHan/Han_10/11.jpg';


const images = [
  {
    original: han10_2,
    thumbnail: han10_2,
  },{
    original: han10_3,
    thumbnail: han10_3,
  },{
    original: han10_4,
    thumbnail: han10_4,
  },{
    original: han10_5,
    thumbnail: han10_5,
  },{
    original: han10_6,
    thumbnail: han10_6,
  },{
    original: han10_7,
    thumbnail: han10_7,
  },{
    original: han10_8,
    thumbnail: han10_8,
  },{
    original: han10_9,
    thumbnail: han10_9,
  },{
    original: han10_10,
    thumbnail: han10_10,
  },{
    original: han10_11,
    thumbnail: han10_11,
  }
];

function Han10(){
  return(
    <div className='individual'>
      
      <img className="mainimg" src={han10_1} alt={"asdf"}/>

      <div className="scription">
        <div className="title">
          "CONTEMPORT"
        </div>
        <div className="author">
        김수민
        </div>
        <div className="subs">
        contemporary(동시대,현대의)와 port(항구,데이터를 주고 받을 수 있는 통로)를 합친 contemport. 아마도 예술공간이 위치하고 있지만 동시대 현대예술을 담기에는 부족하다. 빠르게 바뀌고 발달하는 현대시대와 현대예술은 형태를 정의하기 힘들고 고전적인 살롱의 문화와 의미는 변질되었다. 현대예술과 과거의 살롱 아티스트를 위한 공간이다.        </div>
        <div className="_table">
          <div className="_line"/>
          <div className="xy">
            <div classname="x">대지면적</div>
            <div className="y">1,600m²</div>
          </div>
          <hr/>
          {/* <div className="_line"/> */}
          <div className="xy">
            <div classname="x">대지위치</div>
            <div className="y">서울 용산구 이태원로54길 8</div>
          </div>
          {/* <div className="_line"/> */}
          <hr/>
          <div className="xy">
            <div classname="x">지역지구</div>
            <div className="y">상대보호구역</div>
          </div>
          {/* <div className="_line"/> */}
          <hr/>
          <div className="xy">
            <div classname="x">주용도</div>
            <div className="y">문화복합공간</div>
          </div>
          {/* <div className="_line"/> */}
          <hr/>
          <div className="xy">
            <div classname="x">규모</div>
            <div className="y">3,600m²</div>
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

export default Han10;