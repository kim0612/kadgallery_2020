import ImageGallery from 'react-image-gallery';

import '../../scss/individual.scss';

import uh6_1 from '../../img/project/StudioUh/Uh_6/1.jpg';
import uh6_2 from '../../img/project/StudioUh/Uh_6/2.jpg';
import uh6_3 from '../../img/project/StudioUh/Uh_6/3.jpg';
import uh6_4 from '../../img/project/StudioUh/Uh_6/4.jpg';
import uh6_5 from '../../img/project/StudioUh/Uh_6/5.jpg';
import uh6_6 from '../../img/project/StudioUh/Uh_6/6.jpg';
import uh6_7 from '../../img/project/StudioUh/Uh_6/7.jpg';
import uh6_8 from '../../img/project/StudioUh/Uh_6/8.jpg';
import uh6_9 from '../../img/project/StudioUh/Uh_6/9.jpg';
import uh6_10 from '../../img/project/StudioUh/Uh_6/10.jpg';
import uh6_11 from '../../img/project/StudioUh/Uh_6/11.jpg';
import uh6_12 from '../../img/project/StudioUh/Uh_6/12.jpg';
import uh6_13 from '../../img/project/StudioUh/Uh_6/13.jpg';
import uh6_14 from '../../img/project/StudioUh/Uh_6/14.jpg';


const images = [
  {
    original: uh6_2,
    thumbnail: uh6_2,
  },{
    original: uh6_3,
    thumbnail: uh6_3,
  },{
    original: uh6_4,
    thumbnail: uh6_4,
  },{
    original: uh6_5,
    thumbnail: uh6_5,
  },{
    original: uh6_6,
    thumbnail: uh6_6,
  },{
    original: uh6_7,
    thumbnail: uh6_7,
  },{
    original: uh6_8,
    thumbnail: uh6_8,
  },{
    original: uh6_9,
    thumbnail: uh6_9,
  },{
    original: uh6_10,
    thumbnail: uh6_10,
  },{
    original: uh6_11,
    thumbnail: uh6_11,
  },{
    original: uh6_12,
    thumbnail: uh6_12,
  },{
    original: uh6_13,
    thumbnail: uh6_13,
  },{
    original: uh6_14,
    thumbnail: uh6_14,
  }
];

function Uh6(){
  return(
    <div className='individual'>
      
      <img className="mainimg" src={uh6_1} alt={"asdf"}/>

      <div className="scription">
        <div className="title">
          "대면(對面)하다 : 망국의 역사, 경술년의 치욕과 마주하다"
        </div>
        <div className="author">
        김주익
        </div>
        <div className="subs">
        대한민국은 식민지로서의 아픈 역사와 기억을 가지고 있다. 
우리가 살았던 시대가 아니기 때문에 교과서 또는 매체들을 통해서 접하는게 전부이다. 
일제강점기의 대략적인 내용은 알지만 과정과 원인에 대해서 아는 사람은 많지 않다. 
“역사를 잊은 민족에게 미래는 없다” 라는 말이 있듯이 
역사를 통해서 교훈을 얻고 반복하지 않기 위해서는 
과정과 진행되게 된 원인을 재대로 알고있어야 한다고 생각한다. 
내가 하고자 하는 역사관도 이러한 생각으로부터 출발한다.
        </div>
        <div className="_table">
          <div className="_line"/>
          <div className="xy">
            <div classname="x">대지면적</div>
            <div className="y">1,182m²</div>
          </div>
          <hr/>
          {/* <div className="_line"/> */}
          <div className="xy">
            <div classname="x">대지위치</div>
            <div className="y">서울시 중구 퇴계로 20길 49~71</div>
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
            <div className="y">박물관(역사)</div>
          </div>
          {/* <div className="_line"/> */}
          <hr/>
          <div className="xy">
            <div classname="x">규모</div>
            <div className="y">800m²</div>
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

export default Uh6;