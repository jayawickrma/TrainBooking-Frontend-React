import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {TrainModel} from "../Model/TrainModel.ts";
import {api} from "../Services/api.ts";


const initialState :
    {train:TrainModel[]}={
        train :[]
}
export const getAllTrains =createAsyncThunk(
    '/train',
        async()=>{
                try {
                        const resp =await api.get("/train");
                        console.log(resp)
                        return resp.data
                }catch (e){
                    console.log(e)
                    throw e
                }
        }
)

const TrainSlice =createSlice({
        name:"train",
        initialState,
        reducers:{},

        extraReducers:(builder)=>{
            builder.addCase(getAllTrains.fulfilled,(state, action)=>{
                        state.train =action.payload || []
                })
            builder.addCase(getAllTrains.pending,()=>{
                console.log("pending get All Trains..")
            })
            builder.addCase(getAllTrains.rejected,()=>{
                console.log("Rejected get All Trains")
            })
        }
})

export default TrainSlice.reducer