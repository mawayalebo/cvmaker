const UserForm: React.FC = ()=>{
    return(
        <section className="mx-auto max-w-4xl">
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
                        </div>
                        <div id="controllers-group" className="flex flex-wrap gap-3 pt-3">
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
                        <div id="controllers-group" className="flex flex-wrap gap-3 pt-3">
                            <div id="form-field-container" className="flex flex-col">
                                <label htmlFor="date-of-birth">Date of birth:</label>
                                <input id="Date-of-birth" type="date" className="focus:ring-1 focus:ring-blue-300 focus:border-0 ring-1 ring-blue-300 border-0 placeholder:text-gray-400 rounded-md"/>
                            </div>
                        </div>
                    </div>
                    <div id="contact-details-controllers" className="pt-2">
                        <div>
                            <h3 className="font-semibold">Contact Details</h3>
                        </div>
                        <div id="controllers-group" className="flex flex-wrap gap-3">
                            <div id="form-field-container" className="flex flex-col">
                                 <input placeholder="Contact Number" type="tel" name="phone numbers" id="mobile" className="focus:ring-1 focus:ring-blue-300 focus:border-0 ring-1 ring-blue-300 border-0 placeholder:text-gray-400 rounded-md" />
                            </div>
                            <div id="form-field-container" className="flex flex-col">
                                 <input placeholder="Alternative Number" type="tel" name="alternative_phone_numbers" id="" className="focus:ring-1 focus:ring-blue-300 focus:border-0 ring-1 ring-blue-300 border-0 placeholder:text-gray-400 rounded-md" />
                            </div>
                            <div id="form-field-container" className="flex flex-col">
                                 <input placeholder="Email Address" type="email" name="email" id="email" className="focus:ring-1 focus:ring-blue-300 focus:border-0 ring-1 ring-blue-300 border-0 placeholder:text-gray-400 rounded-md" />
                            </div>
                        </div>
                    </div>
                    <div id="address-controllers" className="pt-2">
                        <div>
                            <h3 className="font-semibold">Address Details</h3>
                        </div>
                        <div id="controllers-group" className="flex flex-wrap gap-3 pt-3">
                            <input type="text" name="Street-address" id="" placeholder="Street Address" className="focus:ring-1 focus:ring-blue-300 focus:border-0 ring-1 ring-blue-300 border-0 placeholder:text-gray-400 rounded-md" />
                            <input type="text" name="Surburb" id="" placeholder="Surburb" className="focus:ring-1 focus:ring-blue-300 focus:border-0 ring-1 ring-blue-300 border-0 placeholder:text-gray-400 rounded-md" />
                            <input type="text" name="City" id="" placeholder="City" className="focus:ring-1 focus:ring-blue-300 focus:border-0 ring-1 ring-blue-300 border-0 placeholder:text-gray-400 rounded-md" />
                            <input type="text" name="Postal Code" id="" placeholder="Postal Code" className="focus:ring-1 focus:ring-blue-300 focus:border-0 ring-1 ring-blue-300 border-0 placeholder:text-gray-400 rounded-md" />
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
                    <div id="skills-controllers" className="mt-2">
                        <div>
                            <h3 className="font-semibold">Skills</h3>
                        </div>
                        <div id="controllers-group" className="flex flex-wrap gap-3">
                            <div id="form-field-container" className="flex flex-col">
                                    <input placeholder="skills" list="skills" name="skill" id="skill" className="focus:ring-1 focus:ring-blue-300 focus:border-0 ring-1 ring-blue-300 border-0 placeholder:text-gray-400 rounded-md p-3"/>
                                    <datalist id="skills">
                                        <option value="Active Listening"/>
                                        <option value="Emphatic"/>
                                        <option value="Problem Solver"/>
                                        <option value="Good Communication"/>
                                        <option value="Customer Service"/>
                                        <option value="Microsoft Office"/>
                                    </datalist>
                            </div>
                        </div>
                    </div>
                    <div id="experience-controllers" className="pt-2">
                    <div>
                            <h3 className="font-semibold">Experience</h3>
                        </div>
                        <div id="controllers-group" className="flex flex-wrap gap-3">
                            <div id="form-field-container" className="flex flex-col">
                                <input placeholder="Employer Name" id="institution-name" type="text" className="focus:ring-1 focus:ring-blue-300 focus:border-0 ring-1 ring-blue-300 border-0 placeholder:text-gray-400 rounded-md"/>
                            </div>
                            <div id="form-field-container" className="flex flex-col">
                                <input placeholder="Position" id="position" type="text" className="focus:ring-1 focus:ring-blue-300 focus:border-0 ring-1 ring-blue-300 border-0 placeholder:text-gray-400 rounded-md"/>
                            </div>
                            <div id="form-field-container" className="flex items-center space-x-2">
                                <label htmlFor="">Current employer?</label>
                                <input type="checkbox" name="current" id="current-controller" className="focus:ring-1 focus:ring-blue-300 focus:border-0 ring-1 ring-blue-300 border-0 placeholder:text-gray-400 rounded-md"/>
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
                    <div id="profile-controllers" className="pt-2">
                        <div>
                            <h3 className="font-semibold">Profile</h3>
                        </div>
                        <div id="controllers-group" className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            <div id="form-field-container" className="flex flex-col">
                                <textarea name="profile" id="profile" cols={30} rows={10} className="focus:ring-1 focus:ring-blue-300 focus:border-0 ring-1 ring-blue-300 border-0 placeholder:text-gray-400 rounded-md"></textarea>
                            </div>
                            <div id="form-field-container" className="flex flex-col">
                                <div className="focus:ring-1 focus:ring-blue-300 focus:border-0 ring-1 ring-blue-300 border-0 placeholder:text-gray-400 rounded-md p-3 overflow-y-auto max-h-64 space-y-2">
                                    <div className="bg-gray-100 p-3">
                                        <button className="bg-blue-500 text-white text-xs px-2 rounded-md">add</button>
                                        <p>Diligent and driven university English student looking to leverage excellent writing and communication skills in journalism. Wrote 3 award-winning articles in university newsletter and wrote one guest blog post that generated 100K in traffic in one month. Eager to further develop researching and interviewing skills at internship at the Daily Gazette.</p>
                                    </div>
                                    <div className="bg-gray-100 p-3">
                                        <button className="bg-blue-500 text-white text-xs px-2 rounded-md">add</button>
                                        <p>Accomplished marketing professional with 4 years of corporate experience in social media management and advertising campaigns. Looking to leverage industry skills and abilities of raising awareness and sales through low or no budget marketing options for local NGO.</p>
                                    </div>
                                    <div className="bg-gray-100 p-3">
                                        <button className="bg-blue-500 text-white text-xs px-2 rounded-md">add</button>
                                        <p>Outgoing project manager with more than 5 years of experience in working on high-level projects with mid-sized teams. Excellent relationship building and management skills which help deliver projects minimum $10K below costs and 10% faster than projected. Looking to leverage project management skills and know-how as a senior project manager at Acme. </p>
                                    </div>
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