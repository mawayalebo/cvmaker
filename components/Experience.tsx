

import { useDispatch } from "react-redux";
import { useState } from "react";


const Experience: React.FC = () => {
  const dispatch = useDispatch();

  const [isCurrent, setIsCurrent] = useState<Boolean>(true)

  const handleClick = ()=>{
    setIsCurrent(!isCurrent)
  }

  return (
    <section>
      <div id="experience-controllers" className="pt-2">
        <div>
          <h3 className="font-semibold">Experience</h3>
        </div>
        <div id="controllers-group" className="flex flex-wrap gap-3">
          <div id="form-field-container" className="flex flex-col">
            <input
              placeholder="Employer Name"
              id="institution-name"
              type="text"
              className="focus:ring-1 focus:ring-blue-300 focus:border-0 ring-1 ring-blue-300 border-0 placeholder:text-gray-400 rounded-md"
            />
          </div>
          <div id="form-field-container" className="flex flex-col">
            <input
              placeholder="Position"
              id="position"
              type="text"
              className="focus:ring-1 focus:ring-blue-300 focus:border-0 ring-1 ring-blue-300 border-0 placeholder:text-gray-400 rounded-md"
            />
          </div>
          <div
            id="form-field-container"
            className="flex items-center space-x-2"
          >
            <label htmlFor="">Current employer?</label>
            <input onClick={handleClick}
              type="checkbox"
              name="current"
              id="current-controller"
              className="focus:ring-1 focus:ring-blue-300 focus:border-0 ring-1 ring-blue-300 border-0 placeholder:text-gray-400 rounded-md"
            />
          </div>
        </div>
        {
          isCurrent &&
          <div id="controllers-group" className="flex flex-wrap gap-3 pt-3">
          <div id="form-field-container" className="flex flex-col">
            <label htmlFor="start-date">Start Date:</label>
            <input
              placeholder="Start Date"
              id="start-date"
              type="date"
              className="focus:ring-1 focus:ring-blue-300 focus:border-0 ring-1 ring-blue-300 border-0 placeholder:text-gray-400 rounded-md"
            />
          </div>
          <div id="form-field-container" className="flex flex-col">
            <label htmlFor="end-date">End Date:</label>
            <input
              placeholder="End Date"
              id="end-date"
              type="date"
              className="focus:ring-1 focus:ring-blue-300 focus:border-0 ring-1 ring-blue-300 border-0 placeholder:text-gray-400 rounded-md"
            />
          </div>
        </div>

        }
        
        <div id="controllers-group" className="flex flex-wrap gap-3 pt-3">
          <div id="form-field-container" className="flex flex-col">
            <button 
              className="bg-blue-400 rounded-md px-4 font-semibold text-white py-2 hover:bg-white hover:ring ring-blue-400 hover:text-blue-400 hover:transition duration-300 delay-100 ease-in-out"
            >
              Add Experience
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
