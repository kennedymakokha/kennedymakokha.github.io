import { createSlice } from '@reduxjs/toolkit'
import axios, { setAuthToken } from './axiosService'
const initialStateValue = { name: '', email: "Support", phone: "", type: "General Enquiries", msg: "" }
export const contactSlice = createSlice({
    name: "user",
    initialState: { value: initialStateValue },
    reducers: {
        post: async (state, action) => {
            // state.value = action.payload
            try {
                setAuthToken(axios);
                const response = await axios.post(`/api/octagon`, action.payload);

            } catch (error) {
                throw error;
            }
        },
        clear: (state) => { state.value = initialStateValue }

    }
})



export const { post, clear } = contactSlice.actions
export default contactSlice.reducer