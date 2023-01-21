export type DataDbType = {
    id?: string,
    price?: number,
    currency?: string,
    course: CityInformation[]
};

export type CityInformation = {
    city_station: City_Info,
    city_destination: City_Info,
}

type City_Info = {
    city?: string,
    country?: string,
    code_airport: string
}