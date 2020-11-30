import ImageGallery from 'react-image-gallery';

import '../../scss/individual.scss';

import han7_1 from '../../img/project/StudioHan/Han_7/1.jpg';
import han7_2 from '../../img/project/StudioHan/Han_7/2.jpg';
import han7_3 from '../../img/project/StudioHan/Han_7/3.jpg';
import han7_4 from '../../img/project/StudioHan/Han_7/4.jpg';
import han7_5 from '../../img/project/StudioHan/Han_7/5.jpg';
import han7_6 from '../../img/project/StudioHan/Han_7/6.jpg';
import han7_7 from '../../img/project/StudioHan/Han_7/7.jpg';
import han7_8 from '../../img/project/StudioHan/Han_7/8.jpg';
import han7_9 from '../../img/project/StudioHan/Han_7/9.jpg';
import han7_10 from '../../img/project/StudioHan/Han_7/10.jpg';
import han7_11 from '../../img/project/StudioHan/Han_7/11.jpg';
import han7_12 from '../../img/project/StudioHan/Han_7/12.jpg';


const images = [
  {
    original: han7_2,
    thumbnail: han7_2,
  },{
    original: han7_3,
    thumbnail: han7_3,
  },{
    original: han7_4,
    thumbnail: han7_4,
  },{
    original: han7_5,
    thumbnail: han7_5,
  },{
    original: han7_6,
    thumbnail: han7_6,
  },{
    original: han7_7,
    thumbnail: han7_7,
  },{
    original: han7_8,
    thumbnail: han7_8,
  },{
    original: han7_9,
    thumbnail: han7_9,
  },{
    original: han7_10,
    thumbnail: han7_10,
  },{
    original: han7_11,
    thumbnail: han7_11,
  },{
    original: han7_12,
    thumbnail: han7_12,
  }
];

function Han7(){
  return(
    <div className='individual'>
      
      <img className="mainimg" src={han7_1} alt={"asdf"}/>

      <div className="scription">
        <div className="title">
          "인천 우체국"
        </div>
        <div className="author">
          신승민
        </div>
        <div className="subs">
        인천우체국은 100년의 역사를 가지고있는 우리나라 최초의 우체국이다. 하지만 현재 건물의 노후화로 비어져 방치되어있으며 인천시에서 문화공간으로 바꾸자는 계획에있지만 주변 주민들은 주변에 우체국이 사라져 불편을 겪고 있다. 그래서 기존 우체국 뒤쪽에 새로운 우체국을 지어 우체국의 프로그램의 역사를 이어나가야 한다고 생각하여 계획하였다. 기존 우체국과 새로운 우체국을 연결을 하여 오가는 사람들의 휴식공간도 같이 계획하였다.        </div>
        <div className="_table">
          <div className="_line"/>
          <div className="xy">
            <div classname="x">대지면적</div>
            <div className="y">3,200m²</div>
          </div>
          <hr/>
          {/* <div className="_line"/> */}
          <div className="xy">
            <div classname="x">대지위치</div>
            <div className="y">인천광역시 신포로 중구3</div>
          </div>
          {/* <div className="_line"/> */}
          <hr/>
          <div className="xy">
            <div classname="x">지역지구</div>
            <div className="y">일반상업지역</div>
          </div>
          {/* <div className="_line"/> */}
          <hr/>
          <div className="xy">
            <div classname="x">주용도</div>
            <div className="y">우체국 문화시설</div>
          </div>
          {/* <div className="_line"/> */}
          <hr/>
          <div className="xy">
            <div classname="x">규모</div>
            <div className="y">4,500m²</div>
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

export default Han7;