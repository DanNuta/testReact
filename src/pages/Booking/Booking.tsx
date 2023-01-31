import React, { PropsWithChildren, useEffect, useState } from "react";
import { BookingView } from "./Booking.View";
import { useFetchSingleItem } from "../../hook/useFetchSingleItem/useFetchSingleItem";
import { useParams } from "react-router-dom";
import { Props } from "./type";


export const Booking: React.FC<PropsWithChildren<Props>> = (
  props: PropsWithChildren<Props>
) => {
  const { id } = useParams();
  const url: string = `http://localhost:3000/itineraries/${id}`;
  const { data, pending, error } = useFetchSingleItem(url);

  return (
    <BookingView error={error} data={data} pending={pending}>
      {props.children}
    </BookingView>
  );
};
