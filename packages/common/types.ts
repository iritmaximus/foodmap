export interface ICountry {
    id: number;
    name: string;
    foods?: IFood[];
}

export interface IFood {
    id: number;
    name: string;
    description?: string;
    country_id: number;
    user_id?: number;
}
