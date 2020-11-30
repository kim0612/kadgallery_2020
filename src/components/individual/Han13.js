import ImageGallery from 'react-image-gallery';

import '../../scss/individual.scss';

import han13_1 from '../../img/project/StudioHan/Han_13/1.jpg';
import han13_2 from '../../img/project/StudioHan/Han_13/2.jpg';
import han13_3 from '../../img/project/StudioHan/Han_13/3.jpg';
import han13_4 from '../../img/project/StudioHan/Han_13/4.jpg';
import han13_5 from '../../img/project/StudioHan/Han_13/5.jpg';
import han13_6 from '../../img/project/StudioHan/Han_13/6.jpg';
import han13_7 from '../../img/project/StudioHan/Han_13/7.jpg';
import han13_8 from '../../img/project/StudioHan/Han_13/8.jpg';
import han13_9 from '../../img/project/StudioHan/Han_13/9.jpg';
import han13_10 from '../../img/project/StudioHan/Han_13/10.jpg';
import han13_11 from '../../img/project/StudioHan/Han_13/11.jpg';
import han13_12 from '../../img/project/StudioHan/Han_13/12.jpg';
import han13_13 from '../../img/project/StudioHan/Han_13/13.jpg';
import han13_14 from '../../img/project/StudioHan/Han_13/14.jpg';
import han13_15 from '../../img/project/StudioHan/Han_13/15.jpg';
import han13_16 from '../../img/project/StudioHan/Han_13/16.jpg';
import han13_17 from '../../img/project/StudioHan/Han_13/17.jpg';
import han13_18 from '../../img/project/StudioHan/Han_13/18.jpg';
import han13_19 from '../../img/project/StudioHan/Han_13/19.jpg';

const images = [
  {
    original: han13_2,
    thumbnail: han13_2,
  },{
    original: han13_3,
    thumbnail: han13_3,
  },{
    original: han13_4,
    thumbnail: han13_4,
  },{
    original: han13_5,
    thumbnail: han13_5,
  },{
    original: han13_6,
    thumbnail: han13_6,
  },{
    original: han13_7,
    thumbnail: han13_7,
  },{
    original: han13_8,
    thumbnail: han13_8,
  },{
    original: han13_9,
    thumbnail: han13_9,
  },{
    original: han13_10,
    thumbnail: han13_10,
  },{
    original: han13_11,
    thumbnail: han13_11,
  },{
    original: han13_12,
    thumbnail: han13_12,
  },{
    original: han13_13,
    thumbnail: han13_13,
  },{
    original: han13_14,
    thumbnail: han13_14,
  },{
    original: han13_15,
    thumbnail: han13_15,
  },{
    original: han13_16,
    thumbnail: han13_16,
  },{
    original: han13_17,
    thumbnail: han13_17,
  },
  {
    original: han13_18,
    thumbnail: han13_18,
  },{
    original: han13_19,
    thumbnail: han13_19,
  }
];

function Han13(){
  return(
    <div className='individual'>
      
      <img className="mainimg" src={han13_1} alt={"asdf"}/>

      

      <div className="imgset">
        <ImageGallery items={images} showPlayButton={false}/>
      </div>


    </div>
  );
}

export default Han13;