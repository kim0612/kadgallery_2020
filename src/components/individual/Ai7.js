import ImageGallery from 'react-image-gallery';

import '../../scss/individual.scss';

import ai7_1 from '../../img/project/StudioAi/Ai_7/1.jpg';
import ai7_2 from '../../img/project/StudioAi/Ai_7/2.jpg';
import ai7_3 from '../../img/project/StudioAi/Ai_7/3.jpg';
import ai7_4 from '../../img/project/StudioAi/Ai_7/4.jpg';
import ai7_5 from '../../img/project/StudioAi/Ai_7/5.jpg';
import ai7_6 from '../../img/project/StudioAi/Ai_7/6.jpg';
import ai7_7 from '../../img/project/StudioAi/Ai_7/7.jpg';
import ai7_8 from '../../img/project/StudioAi/Ai_7/8.jpg';
import ai7_9 from '../../img/project/StudioAi/Ai_7/9.jpg';
import ai7_10 from '../../img/project/StudioAi/Ai_7/10.jpg';
import ai7_11 from '../../img/project/StudioAi/Ai_7/11.jpg';


const images = [
  {
    original: ai7_2,
    thumbnail: ai7_2,
  },{
    original: ai7_3,
    thumbnail: ai7_3,
  },{
    original: ai7_4,
    thumbnail: ai7_4,
  },{
    original: ai7_5,
    thumbnail: ai7_5,
  },{
    original: ai7_6,
    thumbnail: ai7_6,
  },{
    original: ai7_7,
    thumbnail: ai7_7,
  },{
    original: ai7_8,
    thumbnail: ai7_8,
  },{
    original: ai7_9,
    thumbnail: ai7_9,
  },{
    original: ai7_10,
    thumbnail: ai7_10,
  },{
    original: ai7_11,
    thumbnail: ai7_11,
  }
];

function Ai7(){
  return(
    <div className='individual'>
      
      <img className="mainimg" src={ai7_1} alt={"asdf"}/>

      <div className="scription">
        <div className="title">
          "子時(대구 지하철 화재 추모관)"
        </div>
        <div className="author">
        김민정
        </div>
        <div className="subs">
        子時 <br/>

2003년 2월 18일, 대구 중앙로역 방화 사건으로 사망자 192명 부상자151명, 실종자 68명이 발생했다. 실종자들은 여전히 코드명으로 남아있다. 

이 이야기의 순서는 ‘우리’, ‘너’, 그리고 ‘나’라는 볼륨으로 전개한다. 함께 걸었던 길로부터 ’나’는 사라진 ‘너’에 대한 
기억을 안고 내일을 향해 떠난다. 슬픔을 공유하고 반성한다. 너 없이 걸어온 우리의 이야기로부터 나는 ‘너’의 부재를 읽는다. 

기억하고자 한다. 영원히.
        </div>
        <div className="_table">
          <div className="_line"/>
          <div className="xy">
            <div classname="x">대지면적</div>
            <div className="y">4,188m²</div>
          </div>
          <hr/>
          {/* <div className="_line"/> */}
          <div className="xy">
            <div classname="x">대지위치</div>
            <div className="y">대구광역시 중구 남일동 중앙대로 412</div>
          </div>
          {/* <div className="_line"/> */}
          <hr/>
          <div className="xy">
            <div classname="x">지역지구</div>
            <div className="y">중심상업지역/시가지 경관지구</div>
          </div>
          {/* <div className="_line"/> */}
          <hr/>
          <div className="xy">
            <div classname="x">주용도</div>
            <div className="y">추모관</div>
          </div>
          {/* <div className="_line"/> */}
          <hr/>
          <div className="xy">
            <div classname="x">규모</div>
            <div className="y">지하 2층 지상 1층</div>
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

export default Ai7;