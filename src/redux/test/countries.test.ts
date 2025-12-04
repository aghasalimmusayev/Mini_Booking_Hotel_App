import reducer, { fetchCountries, selectCountry } from "../slices/CountrySlice";

describe("CountrySlice", () => {
    test("initial state dogrudur", () => {
        const initialState = reducer(undefined, { type: "@@INIT" });
        expect(initialState).toEqual({
            items: [],
            loading: false,
            selectedCountryId: null,
        });
    });
    test("fetchCountries.pending -> loading true olur", () => {
        const stateBefore = reducer(undefined, { type: "@@INIT" });
        const stateAfter = reducer(
            stateBefore,
            fetchCountries.pending("", undefined)
        );
        expect(stateAfter.loading).toBe(true);
    });
    test("fetchCountries.fulfilled -> items dolur, loading false olur", () => {
        const stateBefore = reducer(undefined, { type: "@@INIT" });
        const fakeCountries = [
            { id: "1", name: "Turkey" },
            { id: "2", name: "UAE" },
        ];
        const stateAfter = reducer(
            stateBefore,
            fetchCountries.fulfilled(fakeCountries, "", undefined)
        );
        expect(stateAfter.loading).toBe(false);
        expect(stateAfter.items).toEqual(fakeCountries);
    });
    test("selectCountry reducer selectedCountryId deyisdirir", () => {
        const stateBefore = reducer(undefined, { type: "@@INIT" });
        const stateAfter = reducer(stateBefore, selectCountry("1"));
        expect(stateAfter.selectedCountryId).toBe("1");
    });
});
