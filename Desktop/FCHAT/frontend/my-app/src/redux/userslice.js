import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  setauth:null,
  getuserr:null,
  selected:null,
  logindata:null
}

export const userslice = createSlice({
  name: 'userslice',
  initialState,
  reducers: {
   setauthuser(state,action){
state.setauth=action.payload
   },
   getuser(state,action){
state.getuserr=action.payload
   },
   selecteduser(state,action){
state.selected=action.payload;
   },
   logined(state,action){
      state.logindata=action.payload;

   }
  },
})

// Action creators are generated for each case reducer function
export const { setauthuser, getuser,selecteduser,logined} = userslice.actions;

export default userslice.reducer