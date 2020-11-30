import ImageGallery from 'react-image-gallery';

import '../../scss/individual.scss';

import ai5_1 from '../../img/project/StudioAi/Ai_5/1.jpg';
import ai5_2 from '../../img/project/StudioAi/Ai_5/2.jpg';
import ai5_3 from '../../img/project/StudioAi/Ai_5/3.jpg';
import ai5_4 from '../../img/project/StudioAi/Ai_5/4.jpg';
import ai5_5 from '../../img/project/StudioAi/Ai_5/5.jpg';
import ai5_6 from '../../img/project/StudioAi/Ai_5/6.jpg';
import ai5_7 from '../../img/project/StudioAi/Ai_5/7.jpg';
import ai5_8 from '../../img/project/StudioAi/Ai_5/8.jpg';
import ai5_9 from '../../img/project/StudioAi/Ai_5/9.jpg';
import ai5_10 from '../../img/project/StudioAi/Ai_5/10.jpg';


const images = [
  {
    original: ai5_2,
    thumbnail: ai5_2,
  },{
    original: ai5_3,
    thumbnail: ai5_3,
  },{
    original: ai5_4,
    thumbnail: ai5_4,
  },{
    original: ai5_5,
    thumbnail: ai5_5,
  },{
    original: ai5_6,
    thumbnail: ai5_6,
  },{
    original: ai5_7,
    thumbnail: ai5_7,
  },{
    original: ai5_8,
    thumbnail: ai5_8,
  },{
    original: ai5_9,
    thumbnail: ai5_9,
  },{
    original: ai5_10,
    thumbnail: ai5_10,
  }
];

function Ai5(){
  return(
    <div className='individual'>
      
      <img className="mainimg" src={ai5_1} alt={"asdf"}/>

      <div className="scription">
        <div className="title">
          "The Weaving of Shade"
        </div>
        <div className="author">
        한재선
        </div>
        <div className="subs">
        그늘은 언제나 사람들이 모이는 장소가 된다. 햇빛을 피하거나 무더운 여름에는 사람들에게 휴식처가 되고 사람들이 활동할 수 있는 공간이 된다. 서울로 7017 고가공원의 그늘 부족으로 인한 문제점과 그 밖의 문제점을 해결하며 그냥 지나치는 육교가 아닌 사람들이 휴식하고 모일 수 있는 공원으로 재구성해보았다.
        </div>
        <div className="_table">
          <div className="_line"/>
          <div className="xy">
            <div classname="x">대지면적</div>
            <div className="y">-</div>
          </div>
          <hr/>
          {/* <div className="_line"/> */}
          <div className="xy">
            <div classname="x">대지위치</div>
            <div className="y">서울특별시 중구 봉래동 122-14</div>
          </div>
          {/* <div className="_line"/> */}
          <hr/>
          <div className="xy">
            <div classname="x">지역지구</div>
            <div className="y">도로</div>
          </div>
          {/* <div className="_line"/> */}
          <hr/>
          <div className="xy">
            <div classname="x">주용도</div>
            <div className="y">공원</div>
          </div>
          {/* <div className="_line"/> */}
          <hr/>
          <div className="xy">
            <div classname="x">규모</div>
            <div className="y">2300m²</div>
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

export default Ai5;