import ImageGallery from 'react-image-gallery';

import '../../scss/individual.scss';

import uh5_1 from '../../img/project/StudioUh/Uh_5/1.jpg';
import uh5_2 from '../../img/project/StudioUh/Uh_5/2.jpg';
import uh5_3 from '../../img/project/StudioUh/Uh_5/3.jpg';
import uh5_4 from '../../img/project/StudioUh/Uh_5/4.jpg';
import uh5_5 from '../../img/project/StudioUh/Uh_5/5.jpg';
import uh5_6 from '../../img/project/StudioUh/Uh_5/6.jpg';
import uh5_7 from '../../img/project/StudioUh/Uh_5/7.jpg';
import uh5_8 from '../../img/project/StudioUh/Uh_5/8.jpg';
import uh5_9 from '../../img/project/StudioUh/Uh_5/9.jpg';
import uh5_10 from '../../img/project/StudioUh/Uh_5/10.jpg';
import uh5_11 from '../../img/project/StudioUh/Uh_5/11.jpg';
import uh5_12 from '../../img/project/StudioUh/Uh_5/12.jpg';
import uh5_13 from '../../img/project/StudioUh/Uh_5/13.jpg';
import uh5_14 from '../../img/project/StudioUh/Uh_5/14.jpg';
import uh5_15 from '../../img/project/StudioUh/Uh_5/15.jpg';
import uh5_16 from '../../img/project/StudioUh/Uh_5/16.jpg';
import uh5_17 from '../../img/project/StudioUh/Uh_5/17.jpg';
import uh5_18 from '../../img/project/StudioUh/Uh_5/18.jpg';
import uh5_19 from '../../img/project/StudioUh/Uh_5/19.jpg';
import uh5_20 from '../../img/project/StudioUh/Uh_5/20.jpg';


const images = [
  {
    original: uh5_2,
    thumbnail: uh5_2,
  },{
    original: uh5_3,
    thumbnail: uh5_3,
  },{
    original: uh5_4,
    thumbnail: uh5_4,
  },{
    original: uh5_5,
    thumbnail: uh5_5,
  },{
    original: uh5_6,
    thumbnail: uh5_6,
  },{
    original: uh5_7,
    thumbnail: uh5_7,
  },{
    original: uh5_8,
    thumbnail: uh5_8,
  },{
    original: uh5_9,
    thumbnail: uh5_9,
  },{
    original: uh5_10,
    thumbnail: uh5_10,
  },{
    original: uh5_11,
    thumbnail: uh5_11,
  },{
    original: uh5_12,
    thumbnail: uh5_12,
  },{
    original: uh5_13,
    thumbnail: uh5_13,
  },{
    original: uh5_14,
    thumbnail: uh5_14,
  },{
    original: uh5_15,
    thumbnail: uh5_15,
  },{
    original: uh5_16,
    thumbnail: uh5_16,
  },{
    original: uh5_17,
    thumbnail: uh5_17,
  },
  {
    original: uh5_18,
    thumbnail: uh5_18,
  },{
    original: uh5_19,
    thumbnail: uh5_19,
  },{
    original: uh5_20,
    thumbnail: uh5_20,
  }
];

function Uh5(){
  return(
    <div className='individual'>
      
      <img className="mainimg" src={uh5_1} alt={"asdf"}/>

      <div className="scription">
        <div className="title">
          "in CIRCLE_박달동 자연 속 오감 유치원 계획안"
        </div>
        <div className="author">
        김수빈
        </div>
        <div className="subs">
        오늘날 현대 아이들은 급속한 도시화로 인해 자연과 소통이 단절되었다. 
7세 미만의 영유아기는 인간의 모든 발달에 있어서 결정적인 시기이다. 
하지만 오늘날 아이들은 자연에서 느낄 수 있는 복합적인 감각을 배우는 기회가 적다.
또한 우리는 아이들의 몸을 해방시키기보단 몸을 통제하는 데 급급하다. 
이렇게 주변의 자극으로부터 섬세하게 영향을 받는 아이들을 안전만 중시하는 놀이와 도전이 없는 놀이는 
유아의 성장과 발달의 최대치를 이끌어내지 못할 것이라는 주장이 있다. 
따라서 아이들은 다양하고 복합적인 감각을 통해 온 몸으로 자연을 느끼고, 
자연 속에서 어떻게 살아가는지 자연스럽게 배우도록 해야 한다.
가득찬 호기심을 안고 인생의 첫걸음을 내딛는 어린이들에게 다양하면서도 
능동적인 경험을 할 수 있는 자연 속 오감 유치원을 계획하고자 한다.
        </div>
        <div className="_table">
          <div className="_line"/>
          <div className="xy">
            <div classname="x">대지면적</div>
            <div className="y">1,936m²</div>
          </div>
          <hr/>
          {/* <div className="_line"/> */}
          <div className="xy">
            <div classname="x">대지위치</div>
            <div className="y">경기도 안양시 만안구 박달 2동 602-5</div>
          </div>
          {/* <div className="_line"/> */}
          <hr/>
          <div className="xy">
            <div classname="x">지역지구</div>
            <div className="y">제2종 일반주거지</div>
          </div>
          {/* <div className="_line"/> */}
          <hr/>
          <div className="xy">
            <div classname="x">주용도</div>
            <div className="y">교육시설(유치원)</div>
          </div>
          {/* <div className="_line"/> */}
          <hr/>
          <div className="xy">
            <div classname="x">규모</div>
            <div className="y">740m² | 지상4층</div>
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

export default Uh5;