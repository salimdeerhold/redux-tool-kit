import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface UserListInterface {
    value: string[]
}

const initialState: UserListInterface ={
    value:[],
}

const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{  
        // addUser is a reducer
        addUser(state,action:PayloadAction<string>){
            state.value.push(action.payload);
            //console.log(state);
            
        },
        removeUser(state,action){
            console.log("hii"+ action.payload);
            //use slice method instead of filter
            // simply write >>>
            // state.splice(action.payload,1); 
            state.value = state.value.filter((name)=> name!=action.payload);
            
        },
        clearAllUsers(state,payload){
            state.value = [];
        },
    }
});
 
export const {addUser,removeUser,clearAllUsers} = userSlice.actions;
export default userSlice.reducer;