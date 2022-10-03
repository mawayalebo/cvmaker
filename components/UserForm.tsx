import Address from "./Address";
import ContactDetails from "./ContactDetails";
import Education from "./Education";
import Experience from "./Experience";
import PersonalDetails from "./PersonalDetails";
import Profile from "./Profile";
import Skills from "./Skills";

const UserForm: React.FC = ()=>{
    return(
        <section className="mx-auto max-w-4xl">
            <div>
                <form id="form" className="p-5">
                    <div>
                        <h2 id="form-title" className="">Fill in the form to Generate your cv</h2>
                    </div>
                    <PersonalDetails/>
                    <ContactDetails/>
                    <Address/>
                    <Education/>
                    <Skills/>
                    <Experience/>
                    <Profile/>
                </form>
            </div>
        </section>
    )
}

export default UserForm;