import React from 'react';
import { Element } from 'react-scroll';
import duck from '../images/Ducks.png';
import ImageCard from '../components/ImageCard';
import blue from '../images/Blue.jpg';

function Departments() {
  return (
    <Element name="Dept">

    {/* <div className="justify-center h-screen w-screen">
      <div className="align-top mt-24 bg-red text-white">
            <h2 className="text-3xl font-semibold">DEPARTMENTS</h2>
        </div>
        <div className="flex flex-row mt-16 justify-evenly">
            <div className="justify-center">
                <div className="bg-white h-32 w-32 rounded-full"> </div>
            <h3 className="mt-5 text-2xl text-black bg-white p-4">Research</h3>
            </div>
            <div className="justify-center">
            <div className="bg-white h-32 w-32 rounded-full"> </div>
            <h3 className="mt-5 text-2xl text-black bg-white p-4">Tech AI ML</h3>
            </div>
            <div>
            <div className="bg-white h-32 w-32 rounded-full justify-center"> </div>
            <h3 className="mt-5 text-2xl text-black bg-white p-4">Tech Web Dev</h3>
            </div>
        </div>
        <div className="flex flex-row mt-16 justify-evenly">
            <div className="justify-center">
                <div className="bg-white h-32 w-32 rounded-full"> </div>
            <h3 className="mt-5 text-2xl text-black bg-white p-4 w-52">Marketing & Public Relations</h3>
            </div>
            <div className="justify-center">
            <div className="bg-white h-32 w-32 rounded-full"> </div>
            <h3 className="mt-5 text-2xl text-black bg-white p-4">Management</h3>
            </div>
            <div>
            <div className="bg-white h-32 w-32 rounded-full justify-center"> </div>
            <h3 className="mt-5 text-2xl text-black bg-white p-4">Creatives</h3>
            </div>
        </div>
    </div> */}


<div className="flex bg-fixed">
  <div className="items-center justify-center">
    <div
          className="h-screen w-screen bg-cover bg-no-repeat overflow-hidden"
          style={{
            backgroundImage: `url(${blue})`,
            backgroundSize: '100%',
            backgroundPosition: 'top',  
            opacity: 0.7,

          }}>

            <h2 className="text-white mt-24 mb-12 text-2xl font-semibold underline font-serif">DEPARTMENTS</h2>
          
            <div className="flex justify-center items-center ">

              <ImageCard imgSrc={duck}>
                <h3 className='text-xl font-bold mb-2 '> RESEARCH </h3>
                {/* <p>
                  blah
                </p> */}
              </ImageCard>

              <ImageCard imgSrc={duck}>
                <h3 className='text-xl font-bold mb-2 '> TECH AI </h3>
                {/* <p>
                  Blah blah blah
                </p> */}
              </ImageCard>

              
              <ImageCard imgSrc={duck}>
                <h3 className='text-xl font-bold mb-2'> TECH WEB DEV </h3>
                {/* <p>
                  Blah blah blah
                </p> */}
              </ImageCard>

              </div>


            <div className="flex justify-center items-center">

              <ImageCard imgSrc={duck}>
                <h3 className='text-xl font-bold mb-2 '> MANAGEMENT </h3>
                {/* <p>
                  Blah blah blah
                </p> */}
              </ImageCard>


              
              <ImageCard imgSrc={duck}>
                <h3 className='text-xl font-bold mb-2 '> MARKETING & PR </h3>
                {/* <p>
                  Blah blah blah
                </p> */}
              </ImageCard>

              <ImageCard imgSrc={duck}>
                <h3 className='text-xl font-bold mb-2 '> CREATIVES </h3>
                {/* <p>
                  Blah blah blah
                </p> */}
              </ImageCard>


              </div>
            </div>
          </div>
        </div>
  

    </Element>
  )
}

export default Departments;
