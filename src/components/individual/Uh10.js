import ImageGallery from 'react-image-gallery';

import '../../scss/individual.scss';

import uh10_1 from '../../img/project/StudioUh/Uh_10/1.jpg';
import uh10_2 from '../../img/project/StudioUh/Uh_10/2.jpg';
import uh10_3 from '../../img/project/StudioUh/Uh_10/3.jpg';
import uh10_4 from '../../img/project/StudioUh/Uh_10/4.jpg';
import uh10_5 from '../../img/project/StudioUh/Uh_10/5.jpg';
import uh10_6 from '../../img/project/StudioUh/Uh_10/6.jpg';
import uh10_7 from '../../img/project/StudioUh/Uh_10/7.jpg';
import uh10_8 from '../../img/project/StudioUh/Uh_10/8.jpg';
import uh10_9 from '../../img/project/StudioUh/Uh_10/9.jpg';
import uh10_10 from '../../img/project/StudioUh/Uh_10/10.jpg';
import uh10_11 from '../../img/project/StudioUh/Uh_10/11.jpg';
import uh10_12 from '../../img/project/StudioUh/Uh_10/12.jpg';
import uh10_13 from '../../img/project/StudioUh/Uh_10/13.jpg';
import uh10_14 from '../../img/project/StudioUh/Uh_10/14.jpg';
import uh10_15 from '../../img/project/StudioUh/Uh_10/15.jpg';
import uh10_16 from '../../img/project/StudioUh/Uh_10/16.jpg';



const images = [
  {
    original: uh10_2,
    thumbnail: uh10_2,
  },{
    original: uh10_3,
    thumbnail: uh10_3,
  },{
    original: uh10_4,
    thumbnail: uh10_4,
  },{
    original: uh10_5,
    thumbnail: uh10_5,
  },{
    original: uh10_6,
    thumbnail: uh10_6,
  },{
    original: uh10_7,
    thumbnail: uh10_7,
  },{
    original: uh10_8,
    thumbnail: uh10_8,
  },{
    original: uh10_9,
    thumbnail: uh10_9,
  },{
    original: uh10_10,
    thumbnail: uh10_10,
  },{
    original: uh10_11,
    thumbnail: uh10_11,
  },{
    original: uh10_12,
    thumbnail: uh10_12,
  },{
    original: uh10_13,
    thumbnail: uh10_13,
  },{
    original: uh10_14,
    thumbnail: uh10_14,
  },{
    original: uh10_15,
    thumbnail: uh10_15,
  },{
    original: uh10_16,
    thumbnail: uh10_16,
  }
];

function Uh10(){
  return(
    <div className='individual'>
      
      <img className="mainimg" src={uh10_1} alt={"asdf"}/>

      <div className="scription">
        <div className="title">
          "자연속에 존재한다는 것은"
        </div>
        <div className="author">
          김대웅
        </div>
        <div className="subs">
        (어떤한 공간에 무엇과 같이 존재하냐에 따라 다가오는 감정과 감각이 달라진다)<br/>현대사회의 급속한 도시화는 인간에게 각종 스트레스를 야기한다. 이에 인간의 육체적인 부분 또한 정신적인 영역까지 치유 되는 복합적인 치유환경이 주목 받기 시작하였으며 현대사회의 이러한 문제 그리고 그 연구에 대한 필요성을 직시하여 인간생명의 근원이라 할 수 있는 자연요소인 물이 그 해결책이 될 수 있다고 생각된다. 이러한 생각을 바탕으로 물을 통한 치유의 가능성을 제시하고 인간과 물의 집적적인 관계를 가진 공간 중 Spa를 대상으로 체험적 치유공간을 제시하고자 한다.
        </div>
        <div className="_table">
          <div className="_line"/>
          <div className="xy">
            <div classname="x">대지면적</div>
            <div className="y">3941.27m²</div>
          </div>
          <hr/>
          {/* <div className="_line"/> */}
          <div className="xy">
            <div classname="x">대지위치</div>
            <div className="y">경기 의왕시 바라산로 84</div>
          </div>
          {/* <div className="_line"/> */}
          <hr/>
          <div className="xy">
            <div classname="x">지역지구</div>
            <div className="y">자연녹지지역</div>
          </div>
          {/* <div className="_line"/> */}
          <hr/>
          <div className="xy">
            <div classname="x">주용도</div>
            <div className="y">온천시설</div>
          </div>
          {/* <div className="_line"/> */}
          <hr/>
          <div className="xy">
            <div classname="x">규모</div>
            <div className="y">1417.73m²</div>
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

export default Uh10;