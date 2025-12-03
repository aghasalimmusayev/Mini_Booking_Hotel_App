import { configureStore } from '@reduxjs/toolkit'
import hotelsSlice from './slices/HotelSlice'
import countriesSlice from './slices/CountrySlice'
import mealOptionsSlice from './slices/MealSlice'
import boardTypeSlice from './slices/BoardTypesSlice'
import citizenSlice from './slices/CitizenSlice'

export const store = configureStore({
    reducer: {
        countries: countriesSlice,
        citizens: citizenSlice,
        hotels: hotelsSlice,
        mealOptions: mealOptionsSlice,
        boardTypes: boardTypeSlice
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;