const Skills: React.FC = () => {
  return (
    <section>
      <div id="skills-controllers" className="mt-2">
        <div>
          <h3 className="font-semibold">Skills</h3>
        </div>
        <div id="controllers-group" className="flex flex-wrap gap-3">
          <div id="form-field-container" className="flex flex-col">
            <input
              placeholder="skills"
              list="skills"
              name="skill"
              id="skill"
              className="focus:ring-1 focus:ring-blue-300 focus:border-0 ring-1 ring-blue-300 border-0 placeholder:text-gray-400 rounded-md p-3"
            />
            <div id="form-field-container" className="flex flex-col mt-2">
            <button 
              className="bg-blue-400 rounded-md px-4 font-semibold text-white py-2 hover:bg-white hover:ring ring-blue-400 hover:text-blue-400 hover:transition duration-300 delay-100 ease-in-out"
            >
              Add Skill
            </button>
          </div>
            <datalist id="skills">
              <option value="Active Listening" />
              <option value="Emphatic" />
              <option value="Problem Solver" />
              <option value="Good Communication" />
              <option value="Customer Service" />
              <option value="Microsoft Office" />
            </datalist>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
