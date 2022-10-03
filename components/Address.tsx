const Address: React.FC = () => {
  return (
    <section>
      <div id="address-controllers" className="pt-2">
        <div>
          <h3 className="font-semibold">Address Details</h3>
        </div>
        <div id="controllers-group" className="flex flex-wrap gap-3 pt-3">
          <input
            type="text"
            name="Street-address"
            id=""
            placeholder="Street Address"
            className="focus:ring-1 focus:ring-blue-300 focus:border-0 ring-1 ring-blue-300 border-0 placeholder:text-gray-400 rounded-md"
          />
          <input
            type="text"
            name="Surburb"
            id=""
            placeholder="Surburb"
            className="focus:ring-1 focus:ring-blue-300 focus:border-0 ring-1 ring-blue-300 border-0 placeholder:text-gray-400 rounded-md"
          />
          <input
            type="text"
            name="City"
            id=""
            placeholder="City"
            className="focus:ring-1 focus:ring-blue-300 focus:border-0 ring-1 ring-blue-300 border-0 placeholder:text-gray-400 rounded-md"
          />
          <input
            type="text"
            name="Postal Code"
            id=""
            placeholder="Postal Code"
            className="focus:ring-1 focus:ring-blue-300 focus:border-0 ring-1 ring-blue-300 border-0 placeholder:text-gray-400 rounded-md"
          />
        </div>
      </div>
    </section>
  );
};

export default Address;
