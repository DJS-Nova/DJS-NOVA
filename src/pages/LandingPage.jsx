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

  <div className="flex justify-center">
      <img src={logo} alt="Logo of DJS NOVA" className="h-80"/> 
  </div>
    </Element>
  );
};


export default LandingPage;
