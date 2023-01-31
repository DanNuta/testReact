import React, { PropsWithChildren } from "react";
import { useFetchSingleItem } from "../../hook/useFetchSingleItem/useFetchSingleItem";
import { useParams } from "react-router-dom";
import { Props, data } from "../../hook/useFetchSingleItem/type";


export const BookingView: React.FC<PropsWithChildren<Props>> = (
  props: PropsWithChildren<Props>
) => {
    const { id } = useParams();
    const url: string = `http://localhost:3000/itineraries/${id}`;
    //const { data, pending, error } = useFetchSingleItem(url);
    
    console.log(useFetchSingleItem(url));

  return <h1>{props.id}</h1>;
};
