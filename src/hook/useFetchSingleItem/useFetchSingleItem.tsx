import React, { PropsWithChildren, useEffect, useState } from "react";
import { Props, data, segments } from "./type";
import { CityInformation } from "../../hook/useFetch/useFetchType";

export const useFetchSingleItem = (url: string) => {
  const [data, setData] = useState<data>();
  const [pending, setPending] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getData(url);
  }, []);

  async function getData(url: string) {
    try {
      const data_bd = await fetch(url);
      const data_json = await data_bd.json();

      const {
        price: {
          currency: { code },
        },
      } = data_json;

      const {
        price: { amount },
      } = data_json;

      for (let key in data_json) {
        const data_back: data = {
          price: {
            amount: amount,
            currency: code,
          },
          segments: [],
        };

        if (key == "sector") {
          for (let { segments } of data_json[key]) {
            for (let {segment} of segments) {

                console.log(segment)
 
                const { plane: { name }} = segment;
              
              const {
                carrier: { name: carier_name },
              } = segment;
              

              const {
                  carrier: {code: carier_code },
                } = segment;
                
              // const operatingCarrier_code = segment.source.station.;
              const {
                operatingCarrier: { name: operatingCarrier_name },
              } = segment;

              const {
                destination: {
                  station: {city: {name: city_destination} },
                },
              } = segment;

              console.log(city_destination)

             

              const {
                station: {
                  city: { name: city_country_station },
                },
              } = segment;
              const {
                station: {
                  country: { name_country_station },
                },
              } = segment;
              const {
                station: { code: code_airport_station },
              } = segment;

            //   const element: segments = {
            //     plane: {
            //       name: name,
            //     },
            //     carrier: {
            //       name: carier_name,
            //       code: carier_code,
            //     },
            //     operatingCarrier: {
            //       code: operatingCarrier_code,
            //       name: operatingCarrier_name,
            //     },
            //     city_station: {
            //       city: city_country_station,
            //       country: name_country_station,
            //       code_airport: code_airport_station,
            //     },
            //     city_destination: {
            //       city: city_destination,
            //       country: name_country_destination,
            //       code_airport: code_airport_destination,
            //     },
            //   };

             // console.log(element)

            
             // data_back.segments.push(element);
            }
          }
        }
        setData((prev) => data_back);
      }
    } catch (e) {
      setPending(false);
      setError("A aparut o erroare");
    }
  }
};
