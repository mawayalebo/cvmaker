const UserForm: React.FC = ()=>{
    return(
        <section>
            <div>
                <form id="form" className="p-5">
                    <div>
                        <h2 id="form-title" className="">Fill in the form to Generate your cv</h2>
                    </div>
                    <div id="personal-details-controllers" className="pt-2">
                        <div>
                            <h3 className="font-semibold">Personal Details</h3>
                        </div>
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
                                    <option value="">Marital Status</option>
                                    <option value="">Single</option>
                                    <option value="">Married</option>
                                    <option value="">Divorced</option>
                                </select>
                            </div>
                            <div id="form-field-container" className="flex flex-col">
                                <select placeholder="marital status" id="marital" className="focus:ring-1 focus:ring-blue-300 focus:border-0 ring-1 ring-blue-300 border-0 placeholder:text-gray-400 rounded-md">
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
                    </div>
                        
                    </div>
                    <div id="contact-details-controllers" className="pt-2">
                        <div>
                            <h3 className="font-semibold">Contact Details</h3>
                        </div>
                        <div id="controllers-group" className="flex flex-wrap gap-3">
                            <div id="form-field-container" className="flex flex-col">
                                 <input placeholder="Contact Number" type="tel" name="phone numbers" id="" className="focus:ring-1 focus:ring-blue-300 focus:border-0 ring-1 ring-blue-300 border-0 placeholder:text-gray-400 rounded-md" />
                            </div>
                            <div id="form-field-container" className="flex flex-col">
                                 <input placeholder="Alternative Number" type="tel" name="alternative phone numbers" id="" className="focus:ring-1 focus:ring-blue-300 focus:border-0 ring-1 ring-blue-300 border-0 placeholder:text-gray-400 rounded-md" />
                            </div>
                        </div>
                        <div id="controllers-group" className="flex flex-wrap gap-3 pt-3">
                            <div id="form-field-container" className="flex flex-col border-gray-400 border-solid border rounded-md p-5 gap-3">
                                <input type="text" name="Street-address" id="" placeholder="Street Address" className="focus:ring-1 focus:ring-blue-300 focus:border-0 ring-1 ring-blue-300 border-0 placeholder:text-gray-400 rounded-md" />
                                <input type="text" name="Surburb" id="" placeholder="Surburb" className="focus:ring-1 focus:ring-blue-300 focus:border-0 ring-1 ring-blue-300 border-0 placeholder:text-gray-400 rounded-md" />
                                <input type="text" name="City" id="" placeholder="City" className="focus:ring-1 focus:ring-blue-300 focus:border-0 ring-1 ring-blue-300 border-0 placeholder:text-gray-400 rounded-md" />
                                <input type="text" name="Postal Code" id="" placeholder="Postal Code" className="focus:ring-1 focus:ring-blue-300 focus:border-0 ring-1 ring-blue-300 border-0 placeholder:text-gray-400 rounded-md" />
                            </div>
                        </div>
                    </div>
                    <div id="educational-details-controllers" className="pt-2">
                    <div>
                            <h3 className="font-semibold">Education</h3>
                        </div>
                        <div id="controllers-group" className="flex flex-wrap gap-3">
                            <div id="form-field-container" className="flex flex-col">
                                <input placeholder="Institution Name" id="institution-name" type="text" className="focus:ring-1 focus:ring-blue-300 focus:border-0 ring-1 ring-blue-300 border-0 placeholder:text-gray-400 rounded-md"/>
                            </div>
                            <div id="form-field-container" className="flex flex-col">
                                <input placeholder="Qualification" id="qualification" type="text" className="focus:ring-1 focus:ring-blue-300 focus:border-0 ring-1 ring-blue-300 border-0 placeholder:text-gray-400 rounded-md"/>
                            </div>
                        </div>
                        <div id="controllers-group" className="flex flex-wrap gap-3 pt-3">
                            <div id="form-field-container" className="flex flex-col">
                                <label htmlFor="start-date">Start Date:</label>
                                <input placeholder="Start Date" id="start-date" type="date" className="focus:ring-1 focus:ring-blue-300 focus:border-0 ring-1 ring-blue-300 border-0 placeholder:text-gray-400 rounded-md"/>
                            </div>
                            <div id="form-field-container" className="flex flex-col">
                                <label htmlFor="end-date">End Date:</label>
                                <input placeholder="End Date" id="end-date" type="date" className="focus:ring-1 focus:ring-blue-300 focus:border-0 ring-1 ring-blue-300 border-0 placeholder:text-gray-400 rounded-md"/>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h3 className="font-semibold">Skills</h3>
                        </div>
                        <div id="controllers-group" className="flex flex-wrap gap-3">
                            <div id="form-field-container" className="flex flex-col">
                                <input placeholder="Institution Name" id="institution-name" type="text" className="focus:ring-1 focus:ring-blue-300 focus:border-0 ring-1 ring-blue-300 border-0 placeholder:text-gray-400 rounded-md"/>
                            </div>
                            <div id="form-field-container" className="flex flex-col">
                                <input placeholder="Qualification" id="qualification" type="text" className="focus:ring-1 focus:ring-blue-300 focus:border-0 ring-1 ring-blue-300 border-0 placeholder:text-gray-400 rounded-md"/>
                            </div>
                        </div>
                    </div>
                
                </form>
            </div>
        </section>
    )
}

export default UserForm;