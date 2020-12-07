import ImageGallery from 'react-image-gallery';

import '../../scss/individual.scss';

import ai11_2 from '../../img/project/StudioAi/Ai_11/1.jpg';
import ai11_1 from '../../img/project/StudioAi/Ai_11/2.jpg';
import ai11_3 from '../../img/project/StudioAi/Ai_11/3.jpg';
import ai11_4 from '../../img/project/StudioAi/Ai_11/4.jpg';
import ai11_5 from '../../img/project/StudioAi/Ai_11/5.jpg';
import ai11_6 from '../../img/project/StudioAi/Ai_11/6.jpg';
import ai11_7 from '../../img/project/StudioAi/Ai_11/7.jpg';
import ai11_8 from '../../img/project/StudioAi/Ai_11/8.jpg';
import ai11_9 from '../../img/project/StudioAi/Ai_11/9.jpg';
import ai11_10 from '../../img/project/StudioAi/Ai_11/10.jpg';
import ai11_11 from '../../img/project/StudioAi/Ai_11/11.jpg';
import ai11_12 from '../../img/project/StudioAi/Ai_11/12.jpg';
import ai11_13 from '../../img/project/StudioAi/Ai_11/13.jpg';
import ai11_14 from '../../img/project/StudioAi/Ai_11/14.jpg';
import ai11_15 from '../../img/project/StudioAi/Ai_11/15.jpg';
import ai11_16 from '../../img/project/StudioAi/Ai_11/16.jpg';
import ai11_17 from '../../img/project/StudioAi/Ai_11/17.jpg';
import ai11_18 from '../../img/project/StudioAi/Ai_11/18.jpg';
import ai11_19 from '../../img/project/StudioAi/Ai_11/19.jpg';
import ai11_20 from '../../img/project/StudioAi/Ai_11/20.jpg';
import ai11_21 from '../../img/project/StudioAi/Ai_11/21.jpg';
import ai11_22 from '../../img/project/StudioAi/Ai_11/22.jpg';
import ai11_23 from '../../img/project/StudioAi/Ai_11/23.jpg';
import ai11_24 from '../../img/project/StudioAi/Ai_11/24.jpg';
import ai11_25 from '../../img/project/StudioAi/Ai_11/25.jpg';
import ai11_26 from '../../img/project/StudioAi/Ai_11/26.jpg';
import ai11_27 from '../../img/project/StudioAi/Ai_11/27.jpg';
import ai11_28 from '../../img/project/StudioAi/Ai_11/28.jpg';
import ai11_29 from '../../img/project/StudioAi/Ai_11/29.jpg';
import ai11_30 from '../../img/project/StudioAi/Ai_11/30.jpg';
import ai11_31 from '../../img/project/StudioAi/Ai_11/31.jpg';


const images = [
  {
    original: ai11_2,
    thumbnail: ai11_2,
  },{
    original: ai11_3,
    thumbnail: ai11_3,
  },{
    original: ai11_4,
    thumbnail: ai11_4,
  },{
    original: ai11_5,
    thumbnail: ai11_5,
  },{
    original: ai11_6,
    thumbnail: ai11_6,
  },{
    original: ai11_7,
    thumbnail: ai11_7,
  },{
    original: ai11_8,
    thumbnail: ai11_8,
  },{
    original: ai11_9,
    thumbnail: ai11_9,
  },{
    original: ai11_10,
    thumbnail: ai11_10,
  },{
    original: ai11_11,
    thumbnail: ai11_11,
  },{
    original: ai11_12,
    thumbnail: ai11_12,
  },{
    original: ai11_13,
    thumbnail: ai11_13,
  },{
    original: ai11_14,
    thumbnail: ai11_14,
  },{
    original: ai11_15,
    thumbnail: ai11_15,
  },{
    original: ai11_16,
    thumbnail: ai11_16,
  },{
    original: ai11_17,
    thumbnail: ai11_17,
  },
  {
    original: ai11_18,
    thumbnail: ai11_18,
  },{
    original: ai11_19,
    thumbnail: ai11_19,
  },{
    original: ai11_20,
    thumbnail: ai11_20,
  },{
    original: ai11_21,
    thumbnail: ai11_21,
  },{
    original: ai11_22,
    thumbnail: ai11_22,
  },{
    original: ai11_23,
    thumbnail: ai11_23,
  },{
    original: ai11_24,
    thumbnail: ai11_24,
  },{
    original: ai11_25,
    thumbnail: ai11_25,
  },{
    original: ai11_26,
    thumbnail: ai11_26,
  },{
    original: ai11_27,
    thumbnail: ai11_27,
  },
  {
    original: ai11_28,
    thumbnail: ai11_28,
  },{
    original: ai11_29,
    thumbnail: ai11_29,
  },{
    original: ai11_30,
    thumbnail: ai11_30,
  },{
    original: ai11_31,
    thumbnail: ai11_31,
  }
];

function Ai11(){
  return(
    <div className='individual'>
      
      <img className="mainimg" src={ai11_1} alt={"asdf"}/>


      <div className="imgset">
        <ImageGallery items={images} showPlayButton={false}/>
      </div>


    </div>
  );
}

export default Ai11;