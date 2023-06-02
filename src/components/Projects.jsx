import React from "react";
import lisa from "../assets/lisa.jpeg";
import p1 from "../assets/p1.jpg";
import p2 from "../assets/p2.jpg";
import p4 from "../assets/p4.png";
import p5 from "../assets/p5.png";
import p6 from "../assets/p6.png";


const Projects = () => {
  return (
    <div name="Projects" className="overflow-hidden w-full md:h-full text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-[#00dbfe]">
            Projects
          </p>
        </div>

        <div className="w-full grid sm:grid-cols-2 md:grid-cols-3 gap-4">

        <div data-aos="fade-right"
            style={{ backgroundImage: `url(${p4})`,  }}
            className="rounded-[10px] bg-no-repeat bg-contain bg-center w-[280px] h-[400px] bg- shadow-lg shadow-[#040c16] group container flex justify-center items-center mx-auto content-div ">
            <div className=" opacity-0 pt-[90px]  h-full group-hover:opacity-100 bg-[#040c16] rounded-[10px] bg-opacity-60">
              <span className="text-2xl font-bold text-white tracking-wider text-center">
                <p>Happy Tails</p>
              </span>
              <span className="text-[13px] font-bold text-[#e1e1e1] tracking-wider text-center">
                <p>Happy Tails is a project developed using the MERN stack. It serves as an online platform for managing a private pet shelter located in Kandy</p>
              </span>
              <div className="pt-8 text-center">
                <a target="_blank" href="https://happytails-six.vercel.app/">
                  <button className="blur-none text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a target="_blank" href="https://github.com/GIHAA/itp-project-happy-tails">
                  <button className="blur-none text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg ">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div data-aos="fade-right"
            style={{ backgroundImage: `url(${p6})`,  }}
            className="rounded-[10px] bg-no-repeat bg-contain bg-center w-[280px] h-[400px] bg- shadow-lg shadow-[#040c16] group container flex justify-center items-center mx-auto content-div ">
            <div className=" opacity-0 pt-[90px]  h-full group-hover:opacity-100 bg-[#040c16] rounded-[10px] bg-opacity-60">
              <span className="text-2xl font-bold text-white tracking-wider text-center">
                <p>ONEX Bookshop</p>
              </span>
              <span className="text-[13px] font-bold text-[#e1e1e1] tracking-wider text-center">
                <p>Full-stack web solution to enhance the online shopping experience for customers of Onix Bookshop. The solution is tailored to the needs of the bookstore
and include a user-friendly interface that allows customers to browse and purchase books with ease  </p>     </span>
              <div className="pt-8 text-center">
           
                <a target="_blank" href="https://github.com/GIHAA/ONIX">
                  <button className="blur-none text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg ">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>


          <div data-aos="fade-right"
            style={{ backgroundImage: `url(${p5})`,  }}
            className="rounded-[10px] bg-no-repeat bg-contain bg-center w-[280px] h-[400px] bg- shadow-lg shadow-[#040c16] group container flex justify-center items-center mx-auto content-div ">
            <div className=" opacity-0 pt-[90px]  h-full group-hover:opacity-100 bg-[#040c16] rounded-[10px] bg-opacity-60">
              <span className="text-2xl font-bold text-white tracking-wider text-center">
                <p>Bodima</p>
              </span>
              <span className="text-[13px] font-bold text-[#e1e1e1] tracking-wider text-center">
                <p>Bodima is an app designed to help people find accommodation and connect with sellers.</p>
              </span>
              <div className="pt-8 text-center">
           
                <a target="_blank" href="https://github.com/GIHAA/mad-project-bodima">
                  <button className="blur-none text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg ">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

        <div data-aos="fade-right"
            style={{ backgroundImage: `url(${p1})`,  }}
            className="rounded-[10px] bg-no-repeat bg-contain bg-center w-[280px] h-[400px] bg- shadow-lg shadow-[#040c16] group container flex justify-center items-center mx-auto content-div hover:bg-blur-lg">
            <div className="opacity-0 group-hover:opacity-100 bg-[#040c16] rounded-[10px] bg-opacity-60" >
              <span className="text-2xl font-bold text-white tracking-wider text-center">
                <p>snowy</p>
              </span>
              <div className="pt-8 text-center">
                <a target="_blank" href="https://www.youtube.com/watch?v=dp9w-S6_9bU">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a target="_blank" href="https://github.com/GIHAA/Snowy-open">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg ">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div  data-aos="fade-left"
            style={{ backgroundImage: `url(${lisa})`,  }}
            className="rounded-[10px] bg-no-repeat bg-contain bg-center w-[280px] h-[400px] bg- shadow-lg shadow-[#040c16] group container flex justify-center items-center mx-auto content-div hover:bg-blur-lg">
            <div className="opacity-0 group-hover:opacity-100 bg-[#040c16] rounded-[10px] bg-opacity-60">
              <span className="text-2xl font-bold text-white tracking-wider text-center">
                <p>Lisa</p>
              </span>
              <div className="pt-8 text-center">
                <a target="_blank" href="https://www.youtube.com/watch?v=n-rJGEsWjec&t=64s">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a target="_blank" href="https://ieee.sltc.ac.lk/ies-circuito21/exhibition/index.php?request=13">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg ">
                    Event
                  </button>
                </a>
              </div>
            </div>
          </div>



          <div data-aos="fade-right"
            style={{ backgroundImage: `url(${p2})`,  }}
            className="rounded-[10px] bg-no-repeat bg-contain bg-center w-[280px] h-[400px] bg- shadow-lg shadow-[#040c16] group container flex justify-center items-center mx-auto content-div ">
            <div className="opacity-0 group-hover:opacity-100 bg-[#040c16] rounded-[10px] bg-opacity-60">
              <span className="text-2xl font-bold text-white tracking-wider text-center">
                <p>lucus</p>
              </span>
              <div className="pt-8 text-center">
                <a target="_blank" href="https://www.youtube.com/watch?v=1mxHK4MeRZQ">
                  <button className="blur-none text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a target="_blank" href="https://github.com/GIHAA/LUCUS">
                  <button className="blur-none text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg ">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
      
    
        </div>
      </div>
    </div>
  );
};

export default Projects;
