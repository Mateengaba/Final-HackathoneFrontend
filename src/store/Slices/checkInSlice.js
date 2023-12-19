import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"


const initialState = {
    loading: false,
    error: null,
    data: {},
}

const checkInSlice = createSlice({
    name:"login",
    initialState,
    reducers:{},
    extraReducers : (builder) =>{
        builder.addCase(checkinAction.pending,(state,action)=>{
                state.loading = true
        })
        builder.addCase(checkinAction.fulfilled,(state,action)=>{
                state.loading = false
                state.error = null
                state.data = action.payload.data
                alert("attendence checkIn successfully")
        })
        builder.addCase(checkinAction.rejected,(state,action)=>{
                state.loading = false
                state.error = action.payload
                alert(action.payload)
                state.data = {}
        })
    }
})



//checkOutAction
export const checkOutAction = createAsyncThunk("checkout/performCheckOut", async (studentId, { rejectWithValue, dispatch }) => {
    try {
      const token = localStorage.getItem("authToken");
      
      // Assuming you have a check-out API endpoint on the frontend
      const response = await axios.post("http://localhost:5000/api/v1/checkout", { studentId }, { headers: { Authorization: `Bearer ${token}` } });
  
      // Assuming you have a fetchUserDataAction to fetch updated user data
      dispatch(fetchUserDataAction({}));
  
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || 'An error occurred during check-out.');
    }
  });

  //checkinAction

export const checkinAction = createAsyncThunk("login/auth", async ({_id, course_name, roll_no, picture ,name},{rejectWithValue, dispatch}) => {

    try{
        const token = localStorage.getItem("authToken")
       
        const response = await axios.post("http://localhost:5000/api/v1/checkin",{studentId : _id, courseName : course_name, rollNo: roll_no, picture ,name },{ headers: { Authorization: `Bearer ${token}` } })
        return response.data
    }catch(err){
        return rejectWithValue(err.response.data.message)
    }
    
  });
  
export default checkInSlice.reducer


