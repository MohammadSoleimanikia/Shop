import { createSlice } from "@reduxjs/toolkit";
const users = [
    {
        id: 0,
        name: "mohammad soleimanikia",
        email: "admin@gmail.com",
        password: 123,
        role: "admin",
        image:'https://avatars.githubusercontent.com/u/121093560?v=4'
    },
    {
        id: 1,
        name: "user",
        email: "user@gmail.com",
        password: 123,
        role: "user",
        image:'https://avatars.githubusercontent.com/u/121093560?v=4'
    },
];
// retrieve from local storage
const savedUser = JSON.parse(localStorage.getItem("user"));

const initialState = {
    isAuthenticated: !!savedUser,
    info: savedUser || null, // { id, name, email, role, ... }
    error: null,
};

const userSlice = createSlice({
    name: "user",
    initialState: initialState,
    reducers: {
        login(state, action) {
            const { email, password } = action.payload;
            const foundUser=users.find((user) =>{
                return user.email == email && user.password === Number(password)
            });
            if(foundUser){
                state.isAuthenticated=true;
                state.info=foundUser;
                state.error=null

                // save in local storage 
                localStorage.setItem('user',JSON.stringify(foundUser));
            }
            if(!foundUser){
                state.isAuthenticated=false;
                state.info=null;
                state.error='Invalid Email or Password'
            }
        },
        logout(state){
            state.isAuthenticated=false;
            state.info=null;
            state.error=null;
            // clear from local storage
            localStorage.removeItem('user')
            
        }
    },
});
export default userSlice.reducer;
export const userAction = userSlice.actions;
