import React from 'react';
import blue from '../images/Blue.jpg';
import { Element } from 'react-scroll';

export const AboutUs = () => {
  return (
    <Element name="About">

  {/* <div className = "flex bg-fixed bg-cover bg-center h-screen w-screen opacity-60" style={{ backgroundImage: `url(${blue})`}}>
    <div className= "items-center justify-end right-10 left-96 absolute z-10">
      <div className=" bg-white bg-opacity-100 text-black ">
            <h2 className="text-2xl font-semibold">About Us</h2>
            <p className="mt-2">DJS NOVA is a student club founded by the students of Dwarkadas J. Sanghvi College of Engineering in the domain of astronomy and astrophysics. NOVA is a non-profit organization dedicated to space research and technology. The club's mission is to raise awareness about the technological advancements in astronomy, explore the wonders of the cosmos, and rekindle the spirit of Indian astronomy.</p>
        </div>
    </div>
</div> */}

<div className="h-screen w-screen flex">
  <div className="items-center justify-center">
    {/* <div
          className="h-screen w-screen bg-cover bg-no-repeat overflow-hidden z-0"
          style={{
            backgroundImage: `url(${blue})`,
            backgroundSize: '100%',
            backgroundPosition: 'top',  
            opacity: 0.7,
          }}> */}

        <div className="left-40 bg-black bg-opacity-60 h-96 w-96 mt-52 px-8 absolute z-10 text-white border-2 border-white rounded-2xl font-serif">
            <h2 className="mt-5 text-2xl font-semibold underline">ABOUT US</h2>
            <p className="flex mt-10">DJS NOVA is a student club founded by the students of Dwarkadas J. Sanghvi College of Engineering in the domain of astronomy and astrophysics. NOVA is a non-profit organization dedicated to space research and technology.  The club's mission is to raise awareness about the technological advancements in astronomy, explore the wonders of the cosmos, and rekindle the spirit of Indian astronomy.</p>
       </div>
        {/* </div> */}
    </div>
  </div>
  </Element>
  );
};


export default AboutUs;
