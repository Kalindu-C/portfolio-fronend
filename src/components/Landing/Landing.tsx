import React from 'react';

const Landing: React.FC = () => {
  return (
    <div>
      <div id="home" className="container mx-auto first-section py-5 xl:px-40">
        <div className="flex flex-col md:flex-row justify-start items-start pt-5 xl:space-x-16 flex-nowrap">
          
          {/* Profile Section */}
          <div className="w-full md:w-1/3 lg:w-1/4 flex-shrink-0 text-center profile-section mb-10 sm:mb-0 mr-4">
            <div className="w-64 h-64 mx-auto overflow-hidden border-[3px] border-gray-300">
              <img
                src="/1.4.png"
                alt="Kalindu Chathuranga"
                className="w-64 h-64 object-cover mx-auto"
              />
            </div>
            <h1 className="mt-2 text-3xl font-light">Kalindu Chathuranga</h1>
            <p className="text-gray-500 text-lg font-light">
              AI Undergraduate
              <br />
              University of Moratuwa, LK
            </p>
            <div className="mt-4">
              <a href="https://github.com/Kalindu-C" className="text-2xl mx-2 text-gray-600 hover:text-gray-600">
                <i className="fab fa-github hover:scale-110"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/chathuranga-thilakarathna/"
                className="text-2xl mx-2 text-gray-600 hover:text-gray-600"
              >
                <i className="fab fa-linkedin hover:scale-110"></i>
              </a>
              <a
                href="/public/My_CV.pdf" // add your CV file to the public folder
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl mx-2 text-gray-600 hover:text-gray-600"
              >
                <i className="ai ai-cv hover:scale-110"></i>
              </a>
              <a
                href="mailto:johndoe@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl mx-2 text-gray-600 hover:text-gray-600"
              >
                <i className="fas fa-envelope hover:scale-110"></i>
              </a>
            </div>
          </div>

          {/* Biography Section */}
          <div className="w-full md:w-2/3 lg:w-3/4 flex-grow">
            <h2 className="text-xl md:text-2xl font-light">Biography</h2>
            <p className="text-sm sm:text-base md:text-lg mt-2 font-light">
            I am a second-year undergraduate specializing in Artificial Intelligence,
            with strong interests in machine learning, data science, backend, and DevOps. 
            I have hands-on experience with Python, Java, C, and JavaScript, 
            and I work with databases such as MySQL, PostgreSQL, and MongoDB. 
            I develop scalable backend services using FastAPI and build responsive web applications 
            with modern JavaScript frameworks. My goal is to become a Machine Learning Engineer, 
            focused on building intelligent, data-driven solutions that deliver real-world impact.
            </p>

            {/* Sections for Education and Accomplishments */}
            <div className="flex flex-wrap mt-8 space-y-8 md:space-y-0">
              {/* Education Section */}
              <div className="w-full max-w-2xl mx-auto mb-4">
                <h3 className="text-lg md:text-xl font-light">Education</h3>
                <hr className="my-2" />
                <ul className="list-none mt-2 space-y-2">
                  <li className="text-xs md:text-sm text-left">
                    <i className="fas fa-graduation-cap text-gray-600 pl-1"></i> Bsc. Hons in Artificial Intelligence, 2023 - Present
                    <p className="text-xs md:text-sm text-gray-600 pl-4 font-light">University of Moratuwa</p>
                    {/* <p className="text-xs md:text-sm text-gray-600 pl-7 font-light"></p> (for GPA kind of thing) */}
                  </li>
                  {/* <li className="text-xs md:text-sm">
                    <i className="fas fa-graduation-cap text-gray-600"></i> BSc. in Electrical Engineering, 2006 - 2010
                    <p className="text-xs md:text-sm text-gray-600 pl-7 font-light">University of California, Berkeley</p>
                    <p className="text-xs md:text-sm text-gray-600 pl-7 font-light">GPA: 3.8 / 4.0</p>
                  </li> */}
                </ul>
              </div>

              {/* Accomplishments Section */}
              {/* <div className="w-full md:w-1/2 pr-5 mb-4">
                <h3 className="text-lg md:text-xl font-light">Accomplishments</h3>
                <hr className="my-2" />
                <ul className="list-none mt-2 space-y-2"> */}
                  {/* <li className="text-xs md:text-sm">
                    <i className="fas fa-trophy text-gray-600"></i> Google Developer Expert for Cloud (2018)
                  </li>
                  <li className="text-xs md:text-sm">
                    <i className="fas fa-trophy text-gray-600"></i> Lead Architect for XYZ Startup Acquisition (2019)
                  </li>
                  <li className="text-xs md:text-sm">
                    <i className="fas fa-trophy text-gray-600"></i> Speaker at Global Tech Summit (2020)
                  </li>
                  <li className="text-xs md:text-sm">
                    <i className="fas fa-trophy text-gray-600"></i> Contributor to Popular Open-Source Projects
                  </li> */}
                {/* </ul> */}
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
