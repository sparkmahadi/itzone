import { postUser } from "./userAPI";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
    user: null,
    userLoading: false,
    registerSuccess: false,
    loginSuccess: false,
    error: ""
};

export const registerUser = createAsyncThunk("user/registeringUser", async (userData) => {
    const user = postUser(userData);
    return user;
})

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        userLogin: (state, action) => {

        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state) => {
                state.userLoading = true;
                state.registerSuccess = false;
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.userLoading = false;
                state.user = action.payload;
                state.registerSuccess = true;
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.userLoading = false;
                state.error = action.error.message;
                state.registerSuccess = false;
            })
    }
});

export const { userLogin } = userSlice.actions;

export default userSlice.reducer;