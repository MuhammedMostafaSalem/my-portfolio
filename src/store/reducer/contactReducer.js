import { createSlice } from "@reduxjs/toolkit";
import { submitContactForm } from "../actions/contactAction";

const initialState = {
    formData: {
        name: '',
        email: '',
        message: ''
    },
    status: 'idle',
    error: null,
    formErrors: {},
}

export const contactReducer = createSlice({
    name: 'contact',
    initialState,
    reducers: {
        updateFormData: (state, action) => {
            state.formData = { ...state.formData, ...action.payload };
        },
        setFormErrors: (state, action) => {
            state.formErrors = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(submitContactForm.pending, (state) => {
            state.status = 'loading';
            state.error = null;
        })
        .addCase(submitContactForm.fulfilled, (state) => {
            state.status = 'succeeded';
            state.formData = { name: '', email: '', message: '' }; 
        })
        .addCase(submitContactForm.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.payload;
        });
    }
})

export const { updateFormData, setFormErrors } = contactReducer.actions

export default contactReducer.reducer