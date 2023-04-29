import { fetchUser, postUser } from "./userAPI";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
    user: null,
    userLoading: false,
    userError: false,
    registerSuccess: false,
    loginSuccess: false,
    error: "",
    invalidMobile: "",
};

export const getUser = createAsyncThunk("user/getUser", async (mobile) => {
    const user = fetchUser(mobile);
    return user;
})

export const registerUser = createAsyncThunk("user/registeringUser", async (userData) => {
    const user = postUser(userData);
    return user;
})

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserProfile: (state, action) => {
            state.user = action.payload;
            if (!action.payload) {
                state.loginSuccess = false;
                state.userLoading = false;
            }
        },
        toggleRegisterSuccess: (state) => {
            state.registerSuccess = false;
        },
        toggleLoginSuccess: (state) => {
            state.loginSuccess = false;
        },
        throughErrorMessage: (state, action) => {
            state.invalidMobile = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state) => {
                state.userLoading = true;
                state.registerSuccess = false;
                state.invalidMobile = "";
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.user = action.payload;
                state.userLoading = false;
                state.registerSuccess = true;
                state.invalidMobile = "";
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.userLoading = false;
                state.error = action.error.message;
                state.registerSuccess = false;
                state.invalidMobile = "";
            })


            .addCase(getUser.pending, (state) => {
                state.userLoading = true;
                state.loginSuccess = false;
                state.invalidMobile = "";
            })
            .addCase(getUser.fulfilled, (state, action) => {
                state.userLoading = false;
                state.user = action.payload;
                state.loginSuccess = true;
                state.invalidMobile = "";
            })
            .addCase(getUser.rejected, (state, action) => {
                state.user = null;
                state.userError = true;
                state.error = action.error.message;
                state.userLoading = false;
                state.loginSuccess = false;
                state.invalidMobile = "";
            })
    }
});

export const { toggleLoginSuccess, toggleRegisterSuccess, throughErrorMessage, setUserProfile } = userSlice.actions;

export default userSlice.reducer;