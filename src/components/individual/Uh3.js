import ImageGallery from 'react-image-gallery';

import '../../scss/individual.scss';

import uh3_1 from '../../img/project/StudioUh/Uh_3/1.jpg';
import uh3_2 from '../../img/project/StudioUh/Uh_3/2.jpg';
import uh3_3 from '../../img/project/StudioUh/Uh_3/3.jpg';
import uh3_4 from '../../img/project/StudioUh/Uh_3/4.jpg';
import uh3_5 from '../../img/project/StudioUh/Uh_3/5.jpg';
import uh3_6 from '../../img/project/StudioUh/Uh_3/6.jpg';
import uh3_7 from '../../img/project/StudioUh/Uh_3/7.jpg';
import uh3_8 from '../../img/project/StudioUh/Uh_3/8.jpg';
import uh3_9 from '../../img/project/StudioUh/Uh_3/9.jpg';
import uh3_10 from '../../img/project/StudioUh/Uh_3/10.jpg';
import uh3_11 from '../../img/project/StudioUh/Uh_3/11.jpg';
import uh3_12 from '../../img/project/StudioUh/Uh_3/12.jpg';
import uh3_13 from '../../img/project/StudioUh/Uh_3/13.jpg';
import uh3_14 from '../../img/project/StudioUh/Uh_3/14.jpg';
import uh3_15 from '../../img/project/StudioUh/Uh_3/15.jpg';
import uh3_16 from '../../img/project/StudioUh/Uh_3/16.jpg';
import uh3_17 from '../../img/project/StudioUh/Uh_3/17.jpg';
import uh3_18 from '../../img/project/StudioUh/Uh_3/18.jpg';
import uh3_19 from '../../img/project/StudioUh/Uh_3/19.jpg';
import uh3_20 from '../../img/project/StudioUh/Uh_3/20.jpg';
import uh3_21 from '../../img/project/StudioUh/Uh_3/21.jpg';
import uh3_22 from '../../img/project/StudioUh/Uh_3/22.jpg';
import uh3_23 from '../../img/project/StudioUh/Uh_3/23.jpg';
import uh3_24 from '../../img/project/StudioUh/Uh_3/24.jpg';
import uh3_25 from '../../img/project/StudioUh/Uh_3/25.jpg';


const images = [
  {
    original: uh3_2,
    thumbnail: uh3_2,
  },{
    original: uh3_3,
    thumbnail: uh3_3,
  },{
    original: uh3_4,
    thumbnail: uh3_4,
  },{
    original: uh3_5,
    thumbnail: uh3_5,
  },{
    original: uh3_6,
    thumbnail: uh3_6,
  },{
    original: uh3_7,
    thumbnail: uh3_7,
  },{
    original: uh3_8,
    thumbnail: uh3_8,
  },{
    original: uh3_9,
    thumbnail: uh3_9,
  },{
    original: uh3_10,
    thumbnail: uh3_10,
  },{
    original: uh3_11,
    thumbnail: uh3_11,
  },{
    original: uh3_12,
    thumbnail: uh3_12,
  },{
    original: uh3_13,
    thumbnail: uh3_13,
  },{
    original: uh3_14,
    thumbnail: uh3_14,
  },{
    original: uh3_15,
    thumbnail: uh3_15,
  },{
    original: uh3_16,
    thumbnail: uh3_16,
  },{
    original: uh3_17,
    thumbnail: uh3_17,
  },
  {
    original: uh3_18,
    thumbnail: uh3_18,
  },{
    original: uh3_19,
    thumbnail: uh3_19,
  },{
    original: uh3_20,
    thumbnail: uh3_20,
  },{
    original: uh3_21,
    thumbnail: uh3_21,
  },{
    original: uh3_22,
    thumbnail: uh3_22,
  },{
    original: uh3_23,
    thumbnail: uh3_23,
  },{
    original: uh3_24,
    thumbnail: uh3_24,
  },{
    original: uh3_25,
    thumbnail: uh3_25,
  }
];

function Uh3(){
  return(
    <div className='individual'>
      
      <img className="mainimg" src={uh3_1} alt={"asdf"}/>

      <div className="scription">
        <div className="title">
          "오순도순 노인 문화 복지관"
        </div>
        <div className="author">
        김창석
        </div>
        <div className="subs">
        우리나라는 현재 고령화사회로 인구의 40%가 노인이다. 강원도는 전국에서 두번째로 높은 비율의 노인들이 거주하고 있으며 그중에 홍천군은 강원도 내에서 두번째로 높은 비율이다. 
그래서 자연들을 사이트 안으로 끌어 들여와 쾌적한 공간들과 오픈된 공간에서 교류를 통해 다양한 효과들을 발생시켜 노인들에게 삶에 다양한 취미와 방향성을 제시하여 삶의 긍정적인 효과를 내려고한다.
        </div>
        <div className="_table">
          <div className="_line"/>
          <div className="xy">
            <div classname="x">대지면적</div>
            <div className="y">3,859m²</div>
          </div>
          <hr/>
          {/* <div className="_line"/> */}
          <div className="xy">
            <div classname="x">대지위치</div>
            <div className="y">강원도 홍천군 홍천읍 희망리 94-33</div>
          </div>
          {/* <div className="_line"/> */}
          <hr/>
          <div className="xy">
            <div classname="x">지역지구</div>
            <div className="y">제 2종 주거지역</div>
          </div>
          {/* <div className="_line"/> */}
          <hr/>
          <div className="xy">
            <div classname="x">주용도</div>
            <div className="y">문화복지관</div>
          </div>
          {/* <div className="_line"/> */}
          <hr/>
          <div className="xy">
            <div classname="x">규모</div>
            <div className="y">지상 2층, 지하 1층</div>
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

export default Uh3;