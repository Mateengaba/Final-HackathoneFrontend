import { configureStore } from '@reduxjs/toolkit'
import loginSlice from './slices/loginSlice.js'
import createUserSlice from './Slices/createUserSlice.js'
import getUsersSlice from './Slices/getUserSlice.js'
import AttendenceSlice from './Slices/getAttendanceSlice.js'

const store = configureStore({
    reducer: {
        loginSlice,
        createUserSlice,
        getUsersSlice,
        AttendenceSlice
    },
  })
  
  export default store