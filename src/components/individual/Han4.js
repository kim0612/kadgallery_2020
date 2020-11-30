import ImageGallery from 'react-image-gallery';

import '../../scss/individual.scss';

import han4_1 from '../../img/project/StudioHan/Han_4/1.jpg';
import han4_2 from '../../img/project/StudioHan/Han_4/2.jpg';
import han4_3 from '../../img/project/StudioHan/Han_4/3.jpg';
import han4_4 from '../../img/project/StudioHan/Han_4/4.jpg';
import han4_5 from '../../img/project/StudioHan/Han_4/5.jpg';
import han4_6 from '../../img/project/StudioHan/Han_4/6.jpg';
import han4_7 from '../../img/project/StudioHan/Han_4/7.jpg';
import han4_8 from '../../img/project/StudioHan/Han_4/8.jpg';
import han4_9 from '../../img/project/StudioHan/Han_4/9.jpg';
import han4_10 from '../../img/project/StudioHan/Han_4/10.jpg';
import han4_11 from '../../img/project/StudioHan/Han_4/11.jpg';
import han4_12 from '../../img/project/StudioHan/Han_4/12.jpg';
import han4_13 from '../../img/project/StudioHan/Han_4/13.jpg';
import han4_14 from '../../img/project/StudioHan/Han_4/14.jpg';
import han4_15 from '../../img/project/StudioHan/Han_4/15.jpg';
import han4_16 from '../../img/project/StudioHan/Han_4/16.jpg';
import han4_17 from '../../img/project/StudioHan/Han_4/17.jpg';
import han4_18 from '../../img/project/StudioHan/Han_4/18.jpg';


const images = [
  {
    original: han4_2,
    thumbnail: han4_2,
  },{
    original: han4_3,
    thumbnail: han4_3,
  },{
    original: han4_4,
    thumbnail: han4_4,
  },{
    original: han4_5,
    thumbnail: han4_5,
  },{
    original: han4_6,
    thumbnail: han4_6,
  },{
    original: han4_7,
    thumbnail: han4_7,
  },{
    original: han4_8,
    thumbnail: han4_8,
  },{
    original: han4_9,
    thumbnail: han4_9,
  },{
    original: han4_10,
    thumbnail: han4_10,
  },{
    original: han4_11,
    thumbnail: han4_11,
  },{
    original: han4_12,
    thumbnail: han4_12,
  },{
    original: han4_13,
    thumbnail: han4_13,
  },{
    original: han4_14,
    thumbnail: han4_14,
  },{
    original: han4_15,
    thumbnail: han4_15,
  },{
    original: han4_16,
    thumbnail: han4_16,
  },{
    original: han4_17,
    thumbnail: han4_17,
  },
  {
    original: han4_18,
    thumbnail: han4_18,
  }
];

function Han4(){
  return(
    <div className='individual'>
      
      <img className="mainimg" src={han4_1} alt={"asdf"}/>

      <div className="scription">
        <div className="title">
          "Landscape of Memory"
        </div>
        <div className="author">
        Hee jin son
        </div>
        <div className="subs">
        Landscape of memory는 사이트와 사이트 주변이 가지고 있는 시간 , 경험, 풍경들을 함께 공유하는 곳입니다. 경주라는 짙은 색을 가진 곳에서 주변 뷰들을 내,외부의 공간에서 공유하며. 생활문화센터로서, 누구나 쉽게 접근할 수 있고, 모든 세대들의 지식과 추억 등을서로 연결할 수 있는 공간이라고 생각하였습니다. 땅 , 건축, 그리고 사람 사이에 지속적인 연결과 중첩을 통해 이공간이 가진 역사, 추억이 오랜 시간 유지 되고자 시작하게 되었습니다.        </div>
        <div className="_table">
          <div className="_line"/>
          <div className="xy">
            <div classname="x">대지면적</div>
            <div className="y">6,568m²</div>
          </div>
          <hr/>
          {/* <div className="_line"/> */}
          <div className="xy">
            <div classname="x">대지위치</div>
            <div className="y">경북 경주시 황남동 금성로 236</div>
          </div>
          {/* <div className="_line"/> */}
          <hr/>
          <div className="xy">
            <div classname="x">지역지구</div>
            <div className="y">제1종일반주거지역, 고도지구(10m이하) , 특화경관지구</div>
          </div>
          {/* <div className="_line"/> */}
          <hr/>
          <div className="xy">
            <div classname="x">주용도</div>
            <div className="y">생활문화센터</div>
          </div>
          {/* <div className="_line"/> */}
          <hr/>
          <div className="xy">
            <div classname="x">규모</div>
            <div className="y">2,300m²</div>
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

export default Han4;