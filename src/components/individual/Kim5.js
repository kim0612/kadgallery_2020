import ImageGallery from 'react-image-gallery';

import '../../scss/individual.scss';

import kim5_1 from '../../img/project/StudioKim/Kim_5/1.jpg';
import kim5_2 from '../../img/project/StudioKim/Kim_5/2.jpg';
import kim5_3 from '../../img/project/StudioKim/Kim_5/3.jpg';
import kim5_4 from '../../img/project/StudioKim/Kim_5/4.jpg';
import kim5_5 from '../../img/project/StudioKim/Kim_5/5.jpg';
import kim5_6 from '../../img/project/StudioKim/Kim_5/6.jpg';
import kim5_7 from '../../img/project/StudioKim/Kim_5/7.jpg';
import kim5_8 from '../../img/project/StudioKim/Kim_5/8.jpg';
import kim5_9 from '../../img/project/StudioKim/Kim_5/9.jpg';
import kim5_10 from '../../img/project/StudioKim/Kim_5/10.jpg';
import kim5_11 from '../../img/project/StudioKim/Kim_5/11.jpg';
import kim5_12 from '../../img/project/StudioKim/Kim_5/12.jpg';
import kim5_13 from '../../img/project/StudioKim/Kim_5/13.jpg';
import kim5_14 from '../../img/project/StudioKim/Kim_5/14.jpg';
import kim5_15 from '../../img/project/StudioKim/Kim_5/15.jpg';
import kim5_16 from '../../img/project/StudioKim/Kim_5/16.jpg';
import kim5_17 from '../../img/project/StudioKim/Kim_5/17.jpg';
import kim5_18 from '../../img/project/StudioKim/Kim_5/18.jpg';
import kim5_19 from '../../img/project/StudioKim/Kim_5/19.jpg';
import kim5_20 from '../../img/project/StudioKim/Kim_5/20.jpg';
import kim5_21 from '../../img/project/StudioKim/Kim_5/21.jpg';
import kim5_22 from '../../img/project/StudioKim/Kim_5/22.jpg';
import kim5_23 from '../../img/project/StudioKim/Kim_5/23.jpg';
import kim5_24 from '../../img/project/StudioKim/Kim_5/24.jpg';
import kim5_25 from '../../img/project/StudioKim/Kim_5/25.jpg';

const images = [
  {
    original: kim5_2,
    thumbnail: kim5_2,
  },{
    original: kim5_3,
    thumbnail: kim5_3,
  },{
    original: kim5_4,
    thumbnail: kim5_4,
  },{
    original: kim5_5,
    thumbnail: kim5_5,
  },{
    original: kim5_6,
    thumbnail: kim5_6,
  },{
    original: kim5_7,
    thumbnail: kim5_7,
  },{
    original: kim5_8,
    thumbnail: kim5_8,
  },{
    original: kim5_9,
    thumbnail: kim5_9,
  },{
    original: kim5_10,
    thumbnail: kim5_10,
  },{
    original: kim5_11,
    thumbnail: kim5_11,
  },{
    original: kim5_12,
    thumbnail: kim5_12,
  },{
    original: kim5_13,
    thumbnail: kim5_13,
  },{
    original: kim5_14,
    thumbnail: kim5_14,
  },{
    original: kim5_15,
    thumbnail: kim5_15,
  },{
    original: kim5_16,
    thumbnail: kim5_16,
  },{
    original: kim5_17,
    thumbnail: kim5_17,
  },
  {
    original: kim5_18,
    thumbnail: kim5_18,
  },{
    original: kim5_19,
    thumbnail: kim5_19,
  },{
    original: kim5_20,
    thumbnail: kim5_20,
  },{
    original: kim5_21,
    thumbnail: kim5_21,
  },{
    original: kim5_22,
    thumbnail: kim5_22,
  },{
    original: kim5_23,
    thumbnail: kim5_23,
  },{
    original: kim5_24,
    thumbnail: kim5_24,
  },{
    original: kim5_25,
    thumbnail: kim5_25,
  }
];

function kim5(){
  return(
    <div className='individual'>
      
      <img className="mainimg" src={kim5_1} alt={"asdf"}/>

      

      <div className="imgset">
        <ImageGallery items={images} showPlayButton={false}/>
      </div>


    </div>
  );
}

export default kim5;