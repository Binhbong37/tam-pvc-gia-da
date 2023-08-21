import React from 'react';
import C2004 from '../../assets/imgs/nano/C2004.jpg';
import A50072 from '../../assets/imgs/nano/5007-2.jpg';
import A816 from '../../assets/imgs/nano/A816.jpg';
import C2005 from '../../assets/imgs/nano/C2005.jpg';
import E1004 from '../../assets/imgs/nano/E1004.jpg';
import FX14 from '../../assets/imgs/nano/FX14.jpg';
import FX19 from '../../assets/imgs/nano/FX19.jpg';
import FX34 from '../../assets/imgs/nano/FX34.jpg';
import FX866 from '../../assets/imgs/nano/FX866.jpg';
import HJL from '../../assets/imgs/nano/HJL.jpg';
import KJM from '../../assets/imgs/nano/KJM.jpg';
import FX237 from '../../assets/imgs/nano/FX237.jpg';

const Nano = () => {
  return (
    <div className='cards'>
      <img src={C2004} alt='C2004' style={{width:"200px"}} />
      <img src={FX14} alt='FX14' style={{width:"200px"}} />
      <img src={FX237} alt='FX237' style={{width:"200px"}} />
      <img src={C2005} alt='C2005' style={{width:"200px"}} />
      <img src={KJM} alt='KJM' style={{width:"200px"}} />
      <img src={E1004} alt='E1004' style={{width:"200px"}} />
      <img src={FX866} alt='FX866' style={{width:"200px"}} />
    </div>
  )
}

export default Nano