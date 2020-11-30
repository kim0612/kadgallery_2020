import ImageGallery from 'react-image-gallery';

import '../../scss/individual.scss';

import han9_1 from '../../img/project/StudioHan/Han_9/1.jpg';
import han9_2 from '../../img/project/StudioHan/Han_9/2.jpg';
import han9_3 from '../../img/project/StudioHan/Han_9/3.jpg';
import han9_4 from '../../img/project/StudioHan/Han_9/4.jpg';
import han9_5 from '../../img/project/StudioHan/Han_9/5.jpg';
import han9_6 from '../../img/project/StudioHan/Han_9/6.jpg';
import han9_7 from '../../img/project/StudioHan/Han_9/7.jpg';
import han9_8 from '../../img/project/StudioHan/Han_9/8.jpg';
import han9_9 from '../../img/project/StudioHan/Han_9/9.jpg';
import han9_10 from '../../img/project/StudioHan/Han_9/10.jpg';
import han9_11 from '../../img/project/StudioHan/Han_9/11.jpg';
import han9_12 from '../../img/project/StudioHan/Han_9/12.jpg';


const images = [
  {
    original: han9_2,
    thumbnail: han9_2,
  },{
    original: han9_3,
    thumbnail: han9_3,
  },{
    original: han9_4,
    thumbnail: han9_4,
  },{
    original: han9_5,
    thumbnail: han9_5,
  },{
    original: han9_6,
    thumbnail: han9_6,
  },{
    original: han9_7,
    thumbnail: han9_7,
  },{
    original: han9_8,
    thumbnail: han9_8,
  },{
    original: han9_9,
    thumbnail: han9_9,
  },{
    original: han9_10,
    thumbnail: han9_10,
  },{
    original: han9_11,
    thumbnail: han9_11,
  },{
    original: han9_12,
    thumbnail: han9_12,
  }
];

function Han9(){
  return(
    <div className='individual'>
      
      <img className="mainimg" src={han9_1} alt={"asdf"}/>

      <div className="scription">
        <div className="title">
          "환기"
        </div>
        <div className="author">
          정재은
        </div>
        <div className="subs">
        명상 
[ 冥想 , meditation, contemplation ] 
고요히 눈을 감고 깊이 생각함 또는 그런 생각.
강남역이라는 차가운 자로 잰 듯한 대지에 명상공간을 제공하고자 하였다.
번잡한 가운데 정적인 공간을 제공하면서,?바쁜 현대사회 속에서 자신에 대해 다시 한 번 되돌아보게 해주는 공간이다.
스마트폰, 태블릿pc, 노트북, 데스크탑 등 디지털 매체를 잠시 멀리하고 내면의 생각을 정리하도록 도움을 주는 공간이다.(Digital Detox)        </div>
        <div className="_table">
          <div className="_line"/>
          <div className="xy">
            <div classname="x">대지면적</div>
            <div className="y">945.9m²</div>
          </div>
          <hr/>
          {/* <div className="_line"/> */}
          <div className="xy">
            <div classname="x">대지위치</div>
            <div className="y">서울 강남구 역삼동 621번지 외 1필지.</div>
          </div>
          {/* <div className="_line"/> */}
          <hr/>
          <div className="xy">
            <div classname="x">지역지구</div>
            <div className="y">제 1종 일반주거지역</div>
          </div>
          {/* <div className="_line"/> */}
          <hr/>
          <div className="xy">
            <div classname="x">주용도</div>
            <div className="y">문화시설 (명상공간)</div>
          </div>
          {/* <div className="_line"/> */}
          <hr/>
          <div className="xy">
            <div classname="x">규모</div>
            <div className="y">1,407m²</div>
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

export default Han9;