import { hotelsByCountry } from "./hotelsByCountry";
import type { Country, Hotel } from "../types/HotelBookingTypes";

const countries: Country[] = [
    { id: "1", name: "Turkey" },
    { id: "2", name: "UAE" },
];

const hotels: Hotel[] = [
    { id: "101", countryId: "1", name: "Hilton Istanbul", price: 120 },
    { id: "102", countryId: "1", name: "Titanic Antalya", price: 90 },
    { id: "201", countryId: "2", name: "Dubai Marina Hotel", price: 200 },
];

describe("hotelsByCountry pure function", () => {
    test("Turkey seçiləndə yalnız Turkey hotelleri gəlir", () => {
        const result = hotelsByCountry("Turkey", countries, hotels);

        expect(result).toHaveLength(2);
        expect(result.map((h) => h.name)).toEqual([
            "Hilton Istanbul",
            "Titanic Antalya",
        ]);
    });

    test("UAE seçiləndə yalnız UAE hotelleri gəlir", () => {
        const result = hotelsByCountry("UAE", countries, hotels);

        expect(result).toHaveLength(1);
        expect(result[0].name).toBe("Dubai Marina Hotel");
    });

    test("olmayan ölkə adı üçün boş array qaytarır", () => {
        const result = hotelsByCountry("Italy", countries, hotels);

        expect(result).toEqual([]);
    });

    test("countryName boş string olanda boş array qaytarır", () => {
        const result = hotelsByCountry("", countries, hotels);

        expect(result).toEqual([]);
    });
});
