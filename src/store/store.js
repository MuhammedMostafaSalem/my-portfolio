import { configureStore } from '@reduxjs/toolkit'
import darkModeReducer from './reducer/darkModeReducer'
import languageReducer from './reducer/languageReducer'
import contactReducer from './reducer/contactReducer'

export const store = configureStore({
    reducer: {
        darkMode: darkModeReducer,
        lang: languageReducer,
        contact: contactReducer
    },
})