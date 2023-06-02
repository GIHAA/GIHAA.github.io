import React from 'react';
import HTML from '../assets/html.png';
import arduino from '../assets/arduino.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import CPP from '../assets/C++.png';
import FireBase from '../assets/firebase.png';
import pi from '../assets/pi.png';
import GitHub from '../assets/github.png';
import n1 from '../assets/n1.png';
import n2 from '../assets/n2.png';
import n3 from '../assets/n3.png';
import n4 from '../assets/n4.png';
import n5 from '../assets/n5.png';
import n6 from '../assets/n6.png';
import n7 from '../assets/n7.png';

const Experience = () => {
  return (
      
    <div name = "Experience" className='overflow-hidden w-full h-full bg-[#0a192f] text-gray-300 '>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-auto mb[300px]'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-[#00dbfe] '>Experience</p>
            </div>

            <div  className='w-full mt-[30px] grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div data-aos="fade-right" className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' alt = "img"src ={HTML} />
                    <p className='my-4'>HTML</p>
                </div>
                <div data-aos="fade-down" className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' alt = "img" src ={CSS} />
                    <p className='my-4'>CSS</p>
                </div>

                <div data-aos="fade-down" className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' alt = "img" src ={JavaScript} />
                    <p className='my-4'>JAVASCRPIT</p>
                </div>
                <div data-aos="fade-down" className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' alt = "img" src ={n2} />
                    <p className='my-4 uppercase '>react</p>
                </div>
                <div data-aos="fade-down" className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' alt = "img" src ={n1} />
                    <p className='my-4 uppercase '>mongoDB</p>
                </div>
                <div data-aos="fade-down" className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' alt = "img" src ={n3} />
                    <p className='my-4 uppercase '>Nodejs</p>
                </div>
                <div data-aos="fade-down" className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' alt = "img" src ={n4} />
                    <p className='my-4 uppercase '>Tailwind</p>
                </div>
                <div data-aos="fade-down" className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' alt = "img" src ={n5} />
                    <p className='my-4 uppercase '>Expressjs</p>
                </div>
                <div data-aos="fade-left" className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' alt = "img" src ={n6} />
                    <p className='my-4'>github</p>
                </div>
                <div data-aos="fade-left" className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' alt = "img" src ={n7} />
                    <p className='my-4'>figma</p>
                </div>
       
                <div data-aos="fade-left" className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' alt = "img" src ={arduino} />
                    <p className='my-4'>ARDUINO</p>
                </div>
                <div data-aos="fade-up-right" className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' alt = "img" src ={pi} />
                    <p className='my-4'>Raspberry pi pico</p>
                </div>
                <div data-aos="fade-up" className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' alt = "img" src ={CPP} />
                    <p className='my-4'>C++</p>
                </div>
                <div data-aos="fade-up" className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' alt = "img" src ={FireBase} />
                    <p className='my-4'>FIREBASE</p>
                </div>
                <div data-aos="fade-up-left" className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' alt = "img" src ={GitHub} />
                    <p className='my-4'>GitHub</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Experience