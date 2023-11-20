// import React from 'react';
// import logo from '../images/NOVA.jpg';
// // import blue from '../images/Blue.jpg';
// import { Element } from 'react-scroll';

// export const LandingPage = () => {
//   return (
//     <Element name="Logo">

//   <div className="flex bg-fixed">
//       <div className="items-center justify-center">
//         <div>
//         <div
//           className="h-screen w-screen bg-cover bg-no-repeat"
//           style={{
//             backgroundImage: `url(${logo})`,
//             backgroundSize: '100%',
//             backgroundPosition: 'top',
//           }}>

//         </div>
//         {/* <img src="../imag"/>  */}
//     </div>
//     </div>
//     </div>
//     </Element>
//   );
// };


// export default LandingPage;

import React from 'react';
import logo from '../images/NOVA.jpg';
// import blue from '../images/Blue.jpg';
import { Element } from 'react-scroll';
// import bg from '../images/dark-space-wallpaper-preview.jpg'

export const LandingPage = () => {
  return (
    <Element name="Logo">
<div className="h-screen w-full">
     {/* <div
          className="h-screen w-screen bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: '100%',
            backgroundPosition: 'top',  
            opacity: 0.7,

          }}> */}
  <div className="flex justify-center items-center">
      <img src={logo} alt="Logo of DJS NOVA" className="h-80 mt-32"/>
  </div>
  <p className="text-white text-3xl font-extralight text-center font-sans">The Official Astronomy & Astrophysics Club of DJ Sanghvi</p>
  <p className="text-white text-3xl font-thin text-center font-serif italic mt-12 motion-reduce:animate-spin">Chaos in Calm</p>
  </div>
  {/* </div> */}

    </Element>
  );
};


export default LandingPage;
