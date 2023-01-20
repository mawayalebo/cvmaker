import { useState, useRef } from "react";


const Profile: React.FC = () => {
  const [profile, setProfile] = useState<null | string>();
  const profileOption = useRef();

  
  const handleClick: ()=>void = ()=>{

  }
  return (
    <section>
      <div id="profile-controllers" className="pt-2">
        <div>
          <h3 className="font-semibold">Profile</h3>
        </div>
        <div
          id="controllers-group"
          className="grid grid-cols-1 md:grid-cols-2 gap-3"
        >
          <div id="form-field-container" className="flex flex-col">
            <textarea
              name="profile"
              id="profile"
              cols={30}
              rows={10}
              className="focus:ring-1 focus:ring-blue-300 focus:border-0 ring-1 ring-blue-300 border-0 placeholder:text-gray-400 rounded-md"
            ></textarea>
          </div>
          <div id="form-field-container" className="flex flex-col">
            <div className="focus:ring-1 focus:ring-blue-300 focus:border-0 ring-1 ring-blue-300 border-0 placeholder:text-gray-400 rounded-md p-3 overflow-y-auto max-h-64 space-y-2">
              <div className="bg-gray-100 p-3">
                <button className="bg-blue-500 text-white text-xs px-2 rounded-md">
                  add
                </button>
                <p>
                  Diligent and driven university English student looking to
                  leverage excellent writing and communication skills in
                  journalism. Wrote 3 award-winning articles in university
                  newsletter and wrote one guest blog post that generated 100K
                  in traffic in one month. Eager to further develop researching
                  and interviewing skills at internship at the Daily Gazette.
                </p>
              </div>
              <div className="bg-gray-100 p-3">
                <button className="bg-blue-500 text-white text-xs px-2 rounded-md">
                  add
                </button>
                <p>
                  Accomplished marketing professional with 4 years of corporate
                  experience in social media management and advertising
                  campaigns. Looking to leverage industry skills and abilities
                  of raising awareness and sales through low or no budget
                  marketing options for local NGO.
                </p>
              </div>
              <div className="bg-gray-100 p-3">
                <button className="bg-blue-500 text-white text-xs px-2 rounded-md">
                  add
                </button>
                <p>
                  Outgoing project manager with more than 5 years of experience
                  in working on high-level projects with mid-sized teams.
                  Excellent relationship building and management skills which
                  help deliver projects minimum $10K below costs and 10% faster
                  than projected. Looking to leverage project management skills
                  and know-how as a senior project manager at Acme.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
