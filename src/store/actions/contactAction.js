import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const submitContactForm = createAsyncThunk('contact/submitContactForm', async (formData, { rejectWithValue }) => {
        try {
            const response = await axios.post('https://formspree.io/f/mwpeykln', formData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            return response.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)