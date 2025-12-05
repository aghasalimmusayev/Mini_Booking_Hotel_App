1. ### HOTEL BOOKING APP

2. # Description
        Booking form
        Citizen dropdown
        Destination Country dropdown
        Hotel dropdown
        Board type selection
        Number of days in Calendar
        Total price calculation

3. # Technologies
        React
        Redux Toolkit
        Typescript
        TailwindCSS
        API - using axios for Citizen data
        Local JSON data for other data

4. # Folder structure
        src/
            assest/
                img/
            components/
                BookingForm.tsx
                childComponents/
                    BoardType.tsx
                    Calendar.tsx
                    Summary.tsx
            redux/
                Store.tsx
                slices/
                    BoardTypesSlice.tsx
                    CitizenSlice.tsx
                    CountrySlice.tsx
                    HotelSlice.tsx
                    MealSlice.tsx
            service/
                service.ts
            types/
                HotelBookingTypes.ts
            App.css
            App.tsx
            index.css
            main.tsx
        index.html
        README.MD

5. # Features
        User can select citizen country
        User can select destination country
        Hotels dropdown dynamically changes based on country
        Days are calculated using Calendar
        Board type selection affects total price
        Total price dynamically updates
        
6. # How to Run
        npm install
        npm run dev

7. # Jest testing
        calcTotal function has been tested
        hotelsByCountry has been tested
        CountrySlice has been tested
        HotelSlice has been tested

