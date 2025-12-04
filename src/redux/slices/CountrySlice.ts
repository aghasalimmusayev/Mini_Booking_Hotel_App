import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { Country } from '../../types/HotelBookingTypes'

interface CountriesState {
    items: Country[];
    loading: boolean;
    selectedCountryId: string | null;
}

const initialState: CountriesState = {
    items: [],
    loading: false,
    selectedCountryId: null
}

export const fetchCountries = createAsyncThunk(
    'countries/fetchCountries',
    async () => {
        const res = await fetch('/db.json')
        const fullData = await res.json()
        return fullData.countries as Country[]
    }
)

export const countriesSlice = createSlice({
    name: 'countries',
    initialState,
    reducers: {
        selectCountry(state, action: PayloadAction<string | null>) {
            state.selectedCountryId = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCountries.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchCountries.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload;
            })
            .addCase(fetchCountries.rejected, (state) => {
                state.loading = false;
            });
    }
})

export const { selectCountry } = countriesSlice.actions

export default countriesSlice.reducer
