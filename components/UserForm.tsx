const UserForm: React.FC = ()=>{
    return(
        <section>
            <div>
                <form id="form" className="p-5">
                    <div>
                        <h2 id="form-title" className="">Fill in the form to Generate your cv</h2>
                    </div>
                    <div id="form-controllers" className="">
                        <div id="controllers-group" className="flex flex-wrap gap-3">
                            <div id="form-field-container" className="flex flex-col">
                                <input placeholder="First Names" id="first-name" type="text" className="focus:ring-1 focus:ring-blue-300 focus:border-0 ring-1 ring-blue-300 border-0 placeholder:text-gray-400 rounded-md"/>
                            </div>
                            <div id="form-field-container" className="flex flex-col">
                                <input placeholder="Last name" id="first-name" type="text" className="focus:ring-1 focus:ring-blue-300 focus:border-0 ring-1 ring-blue-300 border-0 placeholder:text-gray-400 rounded-md"/>
                        </div>
                        <div id="controllers-group" className="flex flex-wrap gap-3">
                            <div id="form-field-container" className="flex flex-col">
                                <input placeholder="Date of Birth" id="Date-of-birth" type="date" className="focus:ring-1 focus:ring-blue-300 focus:border-0 ring-1 ring-blue-300 border-0 placeholder:text-gray-400 rounded-md"/>
                            </div>
                            <div id="form-field-container" className="flex flex-col">
                                <select placeholder="gender" id="gender" className="focus:ring-1 focus:ring-blue-300 focus:border-0 ring-1 ring-blue-300 border-0 placeholder:text-gray-400 rounded-md">
                                    <option value="">Gender</option>
                                    <option value="">Male</option>
                                    <option value="">Female</option>
                                    <option value="">Non binary</option>
                                </select>
                            </div>
                            <div id="form-field-container" className="flex flex-col">
                                <select placeholder="marital status" id="marital" className="focus:ring-1 focus:ring-blue-300 focus:border-0 ring-1 ring-blue-300 border-0 placeholder:text-gray-400 rounded-md">
                                    <option value="">Date of birth</option>
                                    <option value="">Single</option>
                                    <option value="">Married</option>
                                </select>
                            </div>
                        </div>
                    </div>
                        
                    </div>
                </form>
            </div>
        </section>
    )
}

export default UserForm;