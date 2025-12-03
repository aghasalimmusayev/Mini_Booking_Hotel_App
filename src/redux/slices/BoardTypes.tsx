import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BoardType } from '../../types/HotelBookingTypes'

const initialState = {
    items: [] as BoardType[]
}

export const fetchBoardTypes = createAsyncThunk(
    'boardTypes/fetchBoardTypes',
    async () => {
        const res = await fetch('/db.json')
        const fullData = await res.json()
        return fullData.boardTypes as BoardType[]
    }
)

export const boardTypeSlice = createSlice({
    name: "boardTypes",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchBoardTypes.fulfilled, (state, action) => {
            state.items = action.payload
        })
    }
})

export default boardTypeSlice.reducer