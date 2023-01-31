import React, { PropsWithChildren, useEffect, useState } from "react";
import { data, segments } from "./type";
import { CityInformation } from "../../hook/useFetch/useFetchType";

export const useFetchSingleItem = (url: string) => {
  const [data, setData] = useState<data>();
  const [pending, setPending] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getData(url);
  }, []);

  async function getData(url: string) {
    setPending(true);
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

      const data_back: data = {
        price: {
          amount: amount,
          currency: code,
        },
        segments: [],
      };

      for (let key in data_json) {
        if (key == "sector") {
          for (let { segments } of data_json[key]) {
            for (let { segment } of segments) {
              const {
                destination: {
                  station: {
                    city: { name: destination_name },
                  },
                },
              } = segment;
              const {
                destination: {
                  station: { code: destination_code_airport },
                },
              } = segment;
              const {
                destination: {
                  station: {
                    country: { name: destination_country },
                  },
                },
              } = segment;

              const {
                source: {
                  station: {
                    city: { name: station_name_city },
                  },
                },
              } = segment;
              const {
                source: {
                  station: { code: station_code_airport },
                },
              } = segment;
              const {
                source: {
                  station: {
                    country: { name: station_country },
                  },
                },
              } = segment;

              const element: segments = {
                plane: {
                  name: segment["plane"] ? segment["plane"].name : "",
                },
                carrier: {
                  name: segment["carrier"].name,
                  code: segment["carrier"].code,
                },
                operatingCarrier: {
                  code: segment["operatingCarrier"]
                    ? segment["operatingCarrier"].code
                    : "",
                  name: segment["operatingCarrier"]
                    ? segment["operatingCarrier"].name
                    : "",
                },
                city_destination: {
                  city: destination_name,
                  country: destination_country,
                  code_airport: destination_code_airport,
                },
                city_station: {
                  city: station_name_city,
                  country: station_country,
                  code_airport: station_code_airport,
                },
              };

              data_back.segments.push(element);
            }
          }
        }
      }
      setData((prev) => data_back);
      setPending(false);
      setError(null);
    } catch (e) {
      setPending(false);
      setError("A aparut o erroare");
    }
  }

  return { data, error, pending };
};
