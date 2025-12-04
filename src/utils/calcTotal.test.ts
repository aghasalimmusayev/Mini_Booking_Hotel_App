import { calcTotal } from "./calcTotal";

describe("calcTotal function", () => {
    test("hotel + meal correctly calculated", () => {
        const hotel = { id: "101", countryId: "1", name: "Test", price: 100 };
        const board = { code: "FB", name: "Full Board", descriptions: "", price: 30 };
        const result = calcTotal(hotel, board, 3);
        expect(result).toBe(390);
        // 3 gün → (100 + 30) * 3 = 390
    });

    test("only hotel price", () => {
        const hotel = { id: "101", countryId: "1", name: "Test", price: 100 };
        const result = calcTotal(hotel, undefined, 2);
        expect(result).toBe(200);
    });

    test("only meal price", () => {
        const board = { code: "HB", name: "Half Board", descriptions: "", price: 20 };
        const result = calcTotal(undefined, board, 5);
        expect(result).toBe(100);
    });

    test("no hotel, no meal", () => {
        const result = calcTotal(undefined, undefined, 10);
        expect(result).toBe(0);
    });
});
