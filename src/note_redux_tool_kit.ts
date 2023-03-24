


// // redux tool kit - rtk



// 1) slice 
//     it is a function that accept a slice name, 
//     an initial state and object of reducer functions,
//     and automatically generates action createors and 
//     action types that correspond to the reducers and state.
    
//     code >> 
//     const userSlice = createSlice({
//         name : "user",
//         initialState: [],
//         reducer: {
//             // action that need to do in app
//             addUser(state,action){},
//             removeUser(state,action){},
//         }
//     })