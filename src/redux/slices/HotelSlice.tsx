import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { Hotel } from '../../types/HotelBookingTypes'

interface HotelsState {
    items: Hotel[];
    loading: boolean;
    selectedHotelId: string | null;
}

const initialState: HotelsState = {
    items: [],
    loading: false,
    selectedHotelId: null
}

export const fetchHotels = createAsyncThunk(
    'hotels',
    async () => {
        const res = await fetch('/db.json');
        const fullData = await res.json();
        return fullData.hotels;
    }
)

export const hotelsSlice = createSlice({
    name: 'hotels',
    initialState,
    reducers: {
        selectHotel(state, action: PayloadAction<string | null>) {
            state.selectedHotelId = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchHotels.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchHotels.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload;
            })
            .addCase(fetchHotels.rejected, (state) => {
                state.loading = false;
            });
    }
})

export const { selectHotel } = hotelsSlice.actions

export default hotelsSlice.reducer
