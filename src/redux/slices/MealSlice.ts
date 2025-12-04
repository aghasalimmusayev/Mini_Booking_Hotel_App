import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { MealOptionsByCountry } from '../../types/HotelBookingTypes'

interface MealsState {
    items: MealOptionsByCountry[];
    loading: boolean;
    selectedMealOpId: string | null;
}

const initialState: MealsState = {
    items: [],
    loading: false,
    selectedMealOpId: null
}

export const fetchMeals = createAsyncThunk(
    'mealOptions',
    async () => {
        const res = await fetch('../../data/db.json')
        const fullData = await res.json()
        return fullData.mealOptionsByCountry as MealOptionsByCountry[]
    }
)

export const mealOptionsSlice = createSlice({
    name: 'meals',
    initialState,
    reducers: {
        selectMealOptions(state, action: PayloadAction<string | null>) {
            state.selectedMealOpId = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchMeals.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchMeals.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload;
            })
            .addCase(fetchMeals.rejected, (state) => {
                state.loading = false;
            });
    }
})

export const { selectMealOptions } = mealOptionsSlice.actions

export default mealOptionsSlice.reducer
