import React, { PropsWithChildren, useEffect, useState } from "react";
import { BookingView } from "./Booking.View";
import { useFetchSingleItem } from "../../hook/useFetchSingleItem/useFetchSingleItem";
import { useParams } from "react-router-dom";

export const Booking: React.FC<PropsWithChildren> = (
  props: PropsWithChildren
) => {
  const { id } = useParams();
  const url: string = `http://localhost:3000/itineraries/${id}`;
  //const { data, pending, error } = useFetchSingleItem(url);

  return <BookingView id={id!}>{props.children}</BookingView>;
};
