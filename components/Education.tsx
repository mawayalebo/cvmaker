const Education: React.FC = () => {
  return (
    <section>
      <div id="educational-details-controllers" className="pt-2">
        <div>
          <h3 className="font-semibold">Education</h3>
        </div>
        <div id="controllers-group" className="flex flex-wrap gap-3">
          <div id="form-field-container" className="flex flex-col">
            <input
              placeholder="Institution Name"
              id="institution-name"
              type="text"
              className="focus:ring-1 focus:ring-blue-300 focus:border-0 ring-1 ring-blue-300 border-0 placeholder:text-gray-400 rounded-md"
            />
          </div>
          <div id="form-field-container" className="flex flex-col">
            <input
              placeholder="Qualification"
              id="qualification"
              type="text"
              className="focus:ring-1 focus:ring-blue-300 focus:border-0 ring-1 ring-blue-300 border-0 placeholder:text-gray-400 rounded-md"
            />
          </div>
        </div>
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
      </div>
    </section>
  );
};

export default Education;
