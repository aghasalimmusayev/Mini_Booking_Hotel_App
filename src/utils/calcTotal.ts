import { Hotel, BoardType } from "../types/HotelBookingTypes";

export function calcTotal(
    hotel: Hotel | undefined,
    board: BoardType | undefined,
    day: number
) {
    const hotelPrice = (hotel?.price ?? 0) * day;
    const mealPrice = (board?.price ?? 0) * day;
    return hotelPrice + mealPrice;
}
