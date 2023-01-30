import { CityInformation } from "../../hook/useFetch/useFetchType";

export type Props = {
  id: string;
  data: data;
};

type data = {
  price: price;
  segments: segments[];
};

interface segments extends CityInformation {
  plane: plane | null;
  carrier: carrier;
  operatingCarrier: operatingCarrier | null;
}

type plane = {
  name: string;
};

type carrier = {
  name: string;
  code: string;
};

type operatingCarrier = {
  code: string;
  name: string;
};

type price = {
  amount: number;
  currency: string;
};

//  când faceți clic pe butonul `Rezervați!`, mergeți la pagina `/booking/:id`
//  care arată informații detaliate despre card, inclusiv toate segmentele de zbor
//  și proprietățile avionului, transportatorului, operatorului (dacă există);
// 3. Dacă mergem la pagina `/booking/:id`, atunci fișierul caută un zbor cu acel id
// și arată informații detaliate despre acesta.
