import ImageGallery from 'react-image-gallery';

import '../../scss/individual.scss';

import han3_1 from '../../img/project/StudioHan/Han_3/1.jpg';
import han3_2 from '../../img/project/StudioHan/Han_3/2.jpg';
import han3_3 from '../../img/project/StudioHan/Han_3/3.jpg';
import han3_4 from '../../img/project/StudioHan/Han_3/4.jpg';
import han3_5 from '../../img/project/StudioHan/Han_3/5.jpg';
import han3_6 from '../../img/project/StudioHan/Han_3/6.jpg';
import han3_7 from '../../img/project/StudioHan/Han_3/7.jpg';
import han3_8 from '../../img/project/StudioHan/Han_3/8.jpg';
import han3_9 from '../../img/project/StudioHan/Han_3/9.jpg';
import han3_10 from '../../img/project/StudioHan/Han_3/10.jpg';
import han3_11 from '../../img/project/StudioHan/Han_3/11.jpg';
import han3_12 from '../../img/project/StudioHan/Han_3/12.jpg';
import han3_13 from '../../img/project/StudioHan/Han_3/13.jpg';
import han3_14 from '../../img/project/StudioHan/Han_3/14.jpg';
import han3_15 from '../../img/project/StudioHan/Han_3/15.jpg';
import han3_16 from '../../img/project/StudioHan/Han_3/16.jpg';
import han3_17 from '../../img/project/StudioHan/Han_3/17.jpg';


const images = [
  {
    original: han3_2,
    thumbnail: han3_2,
  },{
    original: han3_3,
    thumbnail: han3_3,
  },{
    original: han3_4,
    thumbnail: han3_4,
  },{
    original: han3_5,
    thumbnail: han3_5,
  },{
    original: han3_6,
    thumbnail: han3_6,
  },{
    original: han3_7,
    thumbnail: han3_7,
  },{
    original: han3_8,
    thumbnail: han3_8,
  },{
    original: han3_9,
    thumbnail: han3_9,
  },{
    original: han3_10,
    thumbnail: han3_10,
  },{
    original: han3_11,
    thumbnail: han3_11,
  },{
    original: han3_12,
    thumbnail: han3_12,
  },{
    original: han3_13,
    thumbnail: han3_13,
  },{
    original: han3_14,
    thumbnail: han3_14,
  },{
    original: han3_15,
    thumbnail: han3_15,
  },{
    original: han3_16,
    thumbnail: han3_16,
  },{
    original: han3_17,
    thumbnail: han3_17,
  }
];

function Han3(){
  return(
    <div className='individual'>
      
      <img className="mainimg" src={han3_1} alt={"asdf"}/>

      <div className="scription">
        <div className="title">
          "INSERT JOY"
        </div>
        <div className="author">
          이수진
        </div>
        <div className="subs">
        학생들이 흥미는 가지고 있으나 방법을 몰랐던 자신의 창작물을 제작할 수 있는 공간을 제공하고싶었습니다. 학원가 속 비어 있는 시간을 잠시 즐길 수 있게끔 전시나 체험 등 다양한 경험을 쌓을 수 있는 공간을 배치하였고 학생들이 수업을 듣거나 자신들의 창작물을 만들 때 필요한 공간, 창의력을 펼칠 수 있는 공간으로 크게 구성했습니다.        </div>
        <div className="_table">
          <div className="_line"/>
          <div className="xy">
            <div classname="x">대지면적</div>
            <div className="y">4,900m²</div>
          </div>
          <hr/>
          {/* <div className="_line"/> */}
          <div className="xy">
            <div classname="x">대지위치</div>
            <div className="y">서울특별시 양천구 신정로 324-11</div>
          </div>
          {/* <div className="_line"/> */}
          <hr/>
          <div className="xy">
            <div classname="x">지역지구</div>
            <div className="y">상업지역</div>
          </div>
          {/* <div className="_line"/> */}
          <hr/>
          <div className="xy">
            <div classname="x">주용도</div>
            <div className="y">청소년 복합문화시설</div>
          </div>
          {/* <div className="_line"/> */}
          <hr/>
          <div className="xy">
            <div classname="x">규모</div>
            <div className="y">2,900m²</div>
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

export default Han3;