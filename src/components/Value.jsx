import React from "react";


import "./value.css";

const Value = () => {
  return (
    <>
      <h1 className="serviceheading ">Our Services</h1>
      <p className="servicedescription">
        We will provide you Services with 100% satisfaction
      </p>
      {/* card 1 */}
      <div className="cards">
        <div className="max-w-sm rounded overflow-hidden shadow-lg card card1">
          <div className="px-6 py-4">
            <div className="serheading">Denting</div>
            <p className="text-gray-700 text-base">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #Denting
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #Small Dent
                          </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
#Denting service
            </span>
            </p>
          </div>

          <p className="learnmorebtn">Learn More ...</p>
        </div>
        {/* second card */}

        <div className="max-w-sm rounded overflow-hidden shadow-lg card">
          <div className="px-6 py-4">
            <div className="serheading">Painting</div>
            <p className="text-gray-700 text-base"></p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #Painting
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #paint
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #Custom paint
            </span>
            <p className="learnmorebtn">Learn More ...</p>
          </div>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg card">
        
          <div className="px-6 py-4">
            <div className="serheading">Machenics</div>
            <p className="text-gray-700 text-base">
          
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #Car Repairing
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #Repairing
                          </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
#Repair a car
            </span>
            <p className="learnmorebtn">Learn More ...</p>
          </div>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg card">
          
          <div className="px-6 py-4">
            <div className="serheading">Polishing</div>
            <p className="text-gray-700 text-base">
              
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #Polishing
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #polish cars
            </span>
            
            <p className="learnmorebtn">Learn More ...</p>
          </div>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg card">
        
          <div className="px-6 py-4">
            <div className="serheading">AC Service</div>
            <p className="text-gray-700 text-base">
             
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #Car AC Repairing
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #Repair car AC
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #Car AC
            </span>
            <p className="learnmorebtn">Learn More ...</p>
          </div>
        </div>

        {/* 3rd card */}
        <div className="max-w-sm rounded overflow-hidden shadow-lg card">
          <div className="px-6 py-4">
            <div className="serheading">Accident Cases</div>
            <p className="text-gray-700 text-base">
             
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #Accident
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #Cases
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #Accident Cases
            </span>
            <p className="learnmorebtn">Learn More ...</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Value;
