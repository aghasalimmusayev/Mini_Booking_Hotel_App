import reducer, { selectHotel } from "../slices/HotelSlice";

function getInitialState() {
    return reducer(undefined, { type: "@@INIT" });
}

describe("HotelSlice normal reducer tests", () => {
    test("initial state-də selectedHotelId null olur", () => {
        const initialState = getInitialState();
        expect(initialState.selectedHotelId).toBeNull();
        expect(initialState.items).toEqual([]);
        expect(initialState.loading).toBe(false);
    });
    test("selectHotel reducer selectedHotelId dəyərini yazır", () => {
        const initialState = getInitialState();
        const nextState = reducer(initialState, selectHotel("101"));
        expect(nextState.selectedHotelId).toBe("101");
    });
    test("selectHotel(null) -> selectedHotelId yenə null olur", () => {
        const initialState = getInitialState();
        const stateWithHotel = reducer(initialState, selectHotel("202"));
        const backToNull = reducer(stateWithHotel, selectHotel(null));
        expect(backToNull.selectedHotelId).toBeNull();
    });
});
