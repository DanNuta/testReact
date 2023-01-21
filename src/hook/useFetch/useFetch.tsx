import { useState, useEffect } from "react";
import { DataDbType, CityInformation } from "./useFetchType";


export function useFetch(url: string) {
  const [data_db, setData] = useState<DataDbType[]>([]);
  const [pendign, setPendign] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null)


  useEffect(() => {
    async function getData() {
      setPendign(true);


      try{
          const data_db = await fetch(url);
          const json_data = await data_db.json();
          const {data: {returnItineraries: {itineraries}}} = json_data;


          for(const element of itineraries){

            const data_rezervare: DataDbType = {
              id: element.id,
              price: element.price.amount,
              currency: element.price.currency.code,
              course: []
            }


            const {sector} = element;


            for(const {segments} of sector){

              for(const seg of segments){
                
                const {segment: {source: {station: {city: {name: city_name}}}}} = seg;
                const {segment: {source: {station: {country: {name: country_name}}}}} = seg;
                const {segment: {source: {station: {code: code_airport_station}}}} = seg;

                const {segment: {destination: {station: {city: {name: destination_city}}}}} = seg;
                const {segment: {destination: {station: {country: {name: destination_country}}}}} = seg;
                const {segment: {destination: {station: {code: code_airport_destination}}}} = seg;

                const city: CityInformation = {

                  city_station: {
                    city: city_name,
                    country: country_name,
                    code_airport: code_airport_station
                  },

                  city_destination: {
                    city: destination_city,
                    country: destination_country,
                    code_airport: code_airport_destination
                  }
                }

                data_rezervare.course.push(city);

              }
                
            }


            setData((prev) => {

              return [...prev, data_rezervare]
              
            });
          }

           setPendign(false);
           setError(null)

        }catch(e){
          setPendign(false);
          setError("A aparut o eroare incercati mai tarziu")
        }
    }

    getData();
  }, []);

  return { data_db, pendign, error };
}
