import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    personalDetails:{
        firstName: '',
        lastName: '',
        gender: '',
        dateOfBirth: '',
        maritalStatus: '',
        criminalRecord: '',
        citizenship: '',
    },
    contactDetails:{
        email: '',
        phone: '',
        address: {
            street: '',
            surbub: '',
            city: '',
            postalCode: '',
        },
    },
    education:[
        {
            institution: '',
            qualification: '',
            startDate: '',
            endDate: ''
        }
    ],
    experience:[
        {
            company: '',
            position: '',
            startDate: '',
            endDate: '',
            status: '',
        }
    ],
    skills:[
        {
            skill: '',
        }
    ],
    profile: '',
    references:[
        {
            name: '',
            position: '',
            company: '',
            contact: '',
        }
    ]

}

export const cvSlice = createSlice({
    name: 'cv',
    initialState,
    reducers: {
        setPersonalDetails: (state, action) => {
            state.personalDetails = action.payload;
        },
        setContactDetails: (state, action) => {
            state.contactDetails = action.payload;
        },
        setEducation: (state, action) => {
            state.education = action.payload;
        }, 
        addExperience: (state, action) => {
            state.experience = [...state.experience, action.payload];
        },
        addSkills: (state, action) => {
            state.skills = [...state.skills, action.payload];
        },
        setProfile: (state, action) => {
            state.profile = action.payload;
        },
        addReferences: (state, action) => {
            state.references = [...state.references, action.payload];
        },


    },
});

export const { setPersonalDetails, setContactDetails, setEducation, addExperience, addSkills, setProfile, addReferences } = cvSlice.actions;

export const selectPersonalDetails = (state:any) => state.cv.personalDetails;
export const selectContactDetails = (state:any) => state.cv.contactDetails;
export const selectEducation = (state:any) => state.cv.education;
export const selectExperience = (state:any) => state.cv.experience;
export const selectSkills = (state:any) => state.cv.skills;
export const selectProfile = (state:any) => state.cv.profile;
export const selectReferences = (state:any) => state.cv.references;

export default cvSlice.reducer;
