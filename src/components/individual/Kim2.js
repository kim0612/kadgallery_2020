import ImageGallery from 'react-image-gallery';

import '../../scss/individual.scss';

import kim2_1 from '../../img/project/StudioKim/Kim_2/1.jpg';
import kim2_2 from '../../img/project/StudioKim/Kim_2/2.jpg';
import kim2_3 from '../../img/project/StudioKim/Kim_2/3.jpg';
import kim2_4 from '../../img/project/StudioKim/Kim_2/4.jpg';
import kim2_5 from '../../img/project/StudioKim/Kim_2/5.jpg';
import kim2_6 from '../../img/project/StudioKim/Kim_2/6.jpg';
import kim2_7 from '../../img/project/StudioKim/Kim_2/7.jpg';
import kim2_8 from '../../img/project/StudioKim/Kim_2/8.jpg';
import kim2_9 from '../../img/project/StudioKim/Kim_2/9.jpg';
import kim2_10 from '../../img/project/StudioKim/Kim_2/10.jpg';
import kim2_11 from '../../img/project/StudioKim/Kim_2/11.jpg';
import kim2_12 from '../../img/project/StudioKim/Kim_2/12.jpg';
import kim2_13 from '../../img/project/StudioKim/Kim_2/13.jpg';
import kim2_14 from '../../img/project/StudioKim/Kim_2/14.jpg';
import kim2_15 from '../../img/project/StudioKim/Kim_2/15.jpg';
import kim2_16 from '../../img/project/StudioKim/Kim_2/16.jpg';
import kim2_17 from '../../img/project/StudioKim/Kim_2/17.jpg';
import kim2_18 from '../../img/project/StudioKim/Kim_2/18.jpg';
import kim2_19 from '../../img/project/StudioKim/Kim_2/19.jpg';


const images = [
  {
    original: kim2_2,
    thumbnail: kim2_2,
  },{
    original: kim2_3,
    thumbnail: kim2_3,
  },{
    original: kim2_4,
    thumbnail: kim2_4,
  },{
    original: kim2_5,
    thumbnail: kim2_5,
  },{
    original: kim2_6,
    thumbnail: kim2_6,
  },{
    original: kim2_7,
    thumbnail: kim2_7,
  },{
    original: kim2_8,
    thumbnail: kim2_8,
  },{
    original: kim2_9,
    thumbnail: kim2_9,
  },{
    original: kim2_10,
    thumbnail: kim2_10,
  },{
    original: kim2_11,
    thumbnail: kim2_11,
  },{
    original: kim2_12,
    thumbnail: kim2_12,
  },{
    original: kim2_13,
    thumbnail: kim2_13,
  },{
    original: kim2_14,
    thumbnail: kim2_14,
  },{
    original: kim2_15,
    thumbnail: kim2_15,
  },{
    original: kim2_16,
    thumbnail: kim2_16,
  },{
    original: kim2_17,
    thumbnail: kim2_17,
  },
  {
    original: kim2_18,
    thumbnail: kim2_18,
  },{
    original: kim2_19,
    thumbnail: kim2_19,
  }
];

function kim2(){
  return(
    <div className='individual'>
      
      <img className="mainimg" src={kim2_1} alt={"asdf"}/>

      <div className="scription">
        <div className="title">
          "Add value to gunsan"
        </div>
        <div className="author">
        황태웅
        </div>
        <div className="subs">
        군산의 대표적인 관광지 이면서 전국 100대 명소중 하나인 은파호수의 역사적인 가치를
   더욱 높여줄수 있도록 은파호수와 관련된 역사,지명유래 등과 그밖의 것들을 전시하면서
   은파호수에 대해서 더 알아갈수 있는 곳을 만들어주고 싶었습니다. 이번 설계를 통해서
   은파호수를 알림과 동시에 군산까지 알릴수 있는 전시과 되었으면 합니다.        </div>
        <div className="_table">
          <div className="_line"/>
          <div className="xy">
            <div classname="x">대지면적</div>
            <div className="y">4,817m²</div>
          </div>
          <hr/>
          {/* <div className="_line"/> */}
          <div className="xy">
            <div classname="x">대지위치</div>
            <div className="y">전라북도 군산시 나운동 산374-5</div>
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
            <div className="y">전시시설</div>
          </div>
          {/* <div className="_line"/> */}
          <hr/>
          <div className="xy">
            <div classname="x">규모</div>
            <div className="y">3,423m²</div>
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

export default kim2;