const ContactDetails: React.FC = () => {
  return (
    <section>
      <div id="contact-details-controllers" className="pt-2">
        <div>
          <h3 className="font-semibold">Contact Details</h3>
        </div>
        <div id="controllers-group" className="flex flex-wrap gap-3">
          <div id="form-field-container" className="flex flex-col">
            <input
              placeholder="Contact Number"
              type="tel"
              name="phone numbers"
              id="mobile"
              className="focus:ring-1 focus:ring-blue-300 focus:border-0 ring-1 ring-blue-300 border-0 placeholder:text-gray-400 rounded-md"
            />
          </div>
          <div id="form-field-container" className="flex flex-col">
            <input
              placeholder="Alternative Number"
              type="tel"
              name="alternative_phone_numbers"
              id=""
              className="focus:ring-1 focus:ring-blue-300 focus:border-0 ring-1 ring-blue-300 border-0 placeholder:text-gray-400 rounded-md"
            />
          </div>
          <div id="form-field-container" className="flex flex-col">
            <input
              placeholder="Email Address"
              type="email"
              name="email"
              id="email"
              className="focus:ring-1 focus:ring-blue-300 focus:border-0 ring-1 ring-blue-300 border-0 placeholder:text-gray-400 rounded-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactDetails;
