import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { Country, RestCountry } from '../../types/HotelBookingTypes'
import getData from '../../service/service';

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

export const fetchCitizens = createAsyncThunk(
    'countries/fetchCitizens',
    async () => {
        const res: RestCountry[] = await getData()
        const countries: Country[] = res.map((c) => ({
            id: c.alpha3Code,
            name: c.name,
            citizen: c.demonym
        }))
        return countries
    }
)

export const citizenSlice = createSlice({
    name: 'countries',
    initialState,
    reducers: {
        selectCountry(state, action: PayloadAction<string | null>) {
            state.selectedCountryId = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCitizens.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchCitizens.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload;
            })
            .addCase(fetchCitizens.rejected, (state) => {
                state.loading = false;
            });
    }
})

export const { selectCountry } = citizenSlice.actions

export default citizenSlice.reducer
