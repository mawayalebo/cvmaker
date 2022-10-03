const PersonalDetails: React.FC = () => {
  return (
    <section>
      <div id="personal-details-controllers" className="pt-2">
        <div>
          <h3 className="font-semibold">Personal Details</h3>
        </div>
        <div id="controllers-group" className="flex flex-wrap gap-3">
          <div id="form-field-container" className="flex flex-col">
            <input
              placeholder="First Names"
              id="first-name"
              type="text"
              className="focus:ring-1 focus:ring-blue-300 focus:border-0 ring-1 ring-blue-300 border-0 placeholder:text-gray-400 rounded-md"
            />
          </div>
          <div id="form-field-container" className="flex flex-col">
            <input
              placeholder="Last name"
              id="first-name"
              type="text"
              className="focus:ring-1 focus:ring-blue-300 focus:border-0 ring-1 ring-blue-300 border-0 placeholder:text-gray-400 rounded-md"
            />
          </div>
        </div>
        <div id="controllers-group" className="flex flex-wrap gap-3 pt-3">
          <div id="form-field-container" className="flex flex-col">
            <select
              placeholder="gender"
              id="gender"
              className="focus:ring-1 focus:ring-blue-300 focus:border-0 ring-1 ring-blue-300 border-0 placeholder:text-gray-400 rounded-md"
            >
              <option value="">Gender</option>
              <option value="">Male</option>
              <option value="">Female</option>
              <option value="">Non binary</option>
            </select>
          </div>
          <div id="form-field-container" className="flex flex-col">
            <select
              placeholder="marital status"
              id="marital"
              className="focus:ring-1 focus:ring-blue-300 focus:border-0 ring-1 ring-blue-300 border-0 placeholder:text-gray-400 rounded-md"
            >
              <option value="">Marital Status</option>
              <option value="">Single</option>
              <option value="">Married</option>
              <option value="">Divorced</option>
            </select>
          </div>
          <div id="form-field-container" className="flex flex-col">
            <select
              placeholder="marital status"
              id="marital"
              className="focus:ring-1 focus:ring-blue-300 focus:border-0 ring-1 ring-blue-300 border-0 placeholder:text-gray-400 rounded-md"
            >
              <option value="">Criminal Record</option>
              <option value="">None</option>
              <option value="">Driving While Intoxicated</option>
              <option value="">Driving While License Suspended</option>
              <option value="">Possession of Marijuana</option>
              <option value="">Possession of Controlled Substance</option>
              <option value="">Assault Family Member</option>
              <option value="">Theft By Check</option>
              <option value="">Theft</option>
              <option value="">Evading Arrest/Detention</option>
              <option value="">Assault Causes Bodily Injury</option>
              <option value="">Aggravated Assault</option>
            </select>
          </div>
        </div>
        <div id="controllers-group" className="flex flex-wrap gap-3 pt-3">
          <div id="form-field-container" className="flex flex-col">
            <label htmlFor="date-of-birth">Date of birth:</label>
            <input
              id="Date-of-birth"
              type="date"
              className="focus:ring-1 focus:ring-blue-300 focus:border-0 ring-1 ring-blue-300 border-0 placeholder:text-gray-400 rounded-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalDetails;
