export interface BoardType {
    code: string;
    name: string;
    descriptions: string;
    price: number
}

export interface RestCountry {
    name: string;
    demonym: string;
    alpha3Code: string;
}

export interface Country {
    id: string;
    name: string;
    citizen?: string;
}

export interface Hotel {
    id: string;
    name: string;
    countryId: string;
    city?: string;
    rating?: number; // 0–5 arası
    price: number;
    image?: string;
    availableBoardTypes?: string;
}

export interface MealOptionsByCountry {
    countryId: string;
    boardTypes: string;
}

export interface MealItem {
    id: number;
    name: string;
    price: number;
}

export interface MealOptionsByCountry {
    country: string;
    lunch: MealItem[];
    dinner: MealItem[];
}
