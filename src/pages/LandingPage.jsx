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

export const LandingPage = () => {
  return (
    <Element name="Logo">
<div className="h-screen w-full">
  <div className="flex justify-center items-center">
      <img src={logo} alt="Logo of DJS NOVA" className="h-80 mt-32"/>
  </div>
  <p className="text-white text-3xl font-thin text-center font-serif italic">Chaos in Calm</p>
  <p className="text-white text-3xl font-extralight text-center font-sans mt-12 ">The Official Astronomy & Astrophysics Club of DJ Sanghvi</p>
  </div>

    </Element>
  );
};


export default LandingPage;
