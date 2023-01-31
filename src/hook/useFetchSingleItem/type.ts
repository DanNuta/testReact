import { CityInformation } from "../../hook/useFetch/useFetchType";

export type data = {
  price: price;
  segments: segments[];
};

export interface segments extends CityInformation {
  plane?: plane | null;
  carrier: carrier;
  operatingCarrier?: operatingCarrier | null;
}

type plane = {
  name: string;
};

type carrier = {
  name: string;
  code: string;
};

type operatingCarrier = {
  code: string | null;
  name: string;
};

export type price = {
  amount: number;
  currency: string;
};
