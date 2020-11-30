import ImageGallery from 'react-image-gallery';

import '../../scss/individual.scss';

import uh7_1 from '../../img/project/StudioUh/Uh_7/1.jpg';
import uh7_2 from '../../img/project/StudioUh/Uh_7/2.jpg';
import uh7_3 from '../../img/project/StudioUh/Uh_7/3.jpg';
import uh7_4 from '../../img/project/StudioUh/Uh_7/4.jpg';
import uh7_5 from '../../img/project/StudioUh/Uh_7/5.jpg';
import uh7_6 from '../../img/project/StudioUh/Uh_7/6.jpg';
import uh7_7 from '../../img/project/StudioUh/Uh_7/7.jpg';
import uh7_8 from '../../img/project/StudioUh/Uh_7/8.jpg';
import uh7_9 from '../../img/project/StudioUh/Uh_7/9.jpg';
import uh7_10 from '../../img/project/StudioUh/Uh_7/10.jpg';
import uh7_11 from '../../img/project/StudioUh/Uh_7/11.jpg';
import uh7_12 from '../../img/project/StudioUh/Uh_7/12.jpg';
import uh7_13 from '../../img/project/StudioUh/Uh_7/13.jpg';
import uh7_14 from '../../img/project/StudioUh/Uh_7/14.jpg';
import uh7_15 from '../../img/project/StudioUh/Uh_7/15.jpg';
import uh7_16 from '../../img/project/StudioUh/Uh_7/16.jpg';
import uh7_17 from '../../img/project/StudioUh/Uh_7/17.jpg';
import uh7_18 from '../../img/project/StudioUh/Uh_7/18.jpg';


const images = [
  {
    original: uh7_2,
    thumbnail: uh7_2,
  },{
    original: uh7_3,
    thumbnail: uh7_3,
  },{
    original: uh7_4,
    thumbnail: uh7_4,
  },{
    original: uh7_5,
    thumbnail: uh7_5,
  },{
    original: uh7_6,
    thumbnail: uh7_6,
  },{
    original: uh7_7,
    thumbnail: uh7_7,
  },{
    original: uh7_8,
    thumbnail: uh7_8,
  },{
    original: uh7_9,
    thumbnail: uh7_9,
  },{
    original: uh7_10,
    thumbnail: uh7_10,
  },{
    original: uh7_11,
    thumbnail: uh7_11,
  },{
    original: uh7_12,
    thumbnail: uh7_12,
  },{
    original: uh7_13,
    thumbnail: uh7_13,
  },{
    original: uh7_14,
    thumbnail: uh7_14,
  },{
    original: uh7_15,
    thumbnail: uh7_15,
  },{
    original: uh7_16,
    thumbnail: uh7_16,
  },{
    original: uh7_17,
    thumbnail: uh7_17,
  },
  {
    original: uh7_18,
    thumbnail: uh7_18,
  }
];

function Uh7(){
  return(
    <div className='individual'>
      
      <img className="mainimg" src={uh7_1} alt={"asdf"}/>

      <div className="scription">
        <div className="title">
          "사당 5동 슈필리움"
        </div>
        <div className="author">
        최재혁
        </div>
        <div className="subs">
        서울의 경제성장은 급격한 인구밀도 증가로 인한 유후부지 부족을 가져왔다. 
이는 현대사회에서 현대인들이 쉴 수 있는 공간의 부족으로 문제가 되고, 또한 서울의 노인인구 비중이 증가하면서,노령화 사회가 되어가고 있다. 
서울은 인구 밀도를 해결하기 위해 고층 주거 단지화 되어가면서 저층 주거와 고층 주거의 사회적 격차가 커졌다.
이러한 문제는 사회적 소셜 믹스의 공간의 부족으로 이를 해결할 놀이와 휴식을 합칠 공간이 만들고자 한다.
        </div>
        <div className="_table">
          <div className="_line"/>
          <div className="xy">
            <div classname="x">대지면적</div>
            <div className="y">1,637m²</div>
          </div>
          <hr/>
          {/* <div className="_line"/> */}
          <div className="xy">
            <div classname="x">대지위치</div>
            <div className="y">서울특별시 동작구 사당동 일반 228-11, 산 32-121, 32,56</div>
          </div>
          {/* <div className="_line"/> */}
          <hr/>
          <div className="xy">
            <div classname="x">지역지구</div>
            <div className="y">도시지역 , 제2종일반주거지역(7층이하)</div>
          </div>
          {/* <div className="_line"/> */}
          <hr/>
          <div className="xy">
            <div classname="x">주용도</div>
            <div className="y">복합문화공간</div>
          </div>
          {/* <div className="_line"/> */}
          <hr/>
          <div className="xy">
            <div classname="x">규모</div>
            <div className="y">1,217m²</div>
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

export default Uh7;