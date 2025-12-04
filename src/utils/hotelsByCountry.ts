import type { Country, Hotel } from "../types/HotelBookingTypes";

export function hotelsByCountry(
    countryName: string,
    countries: Country[],
    hotels: Hotel[]
): Hotel[] {
    if (!countryName) return [];

    const country = countries.find((c) => c.name === countryName);
    if (!country) return [];

    return hotels.filter((h) => h.countryId === country.id);
}
