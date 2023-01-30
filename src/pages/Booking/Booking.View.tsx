import React, { PropsWithChildren } from "react";
import { Props } from "./type";


export const BookingView: React.FC<PropsWithChildren<Props>> = (
  props: PropsWithChildren<Props>
) => {

    console.log(props.data)
    
  return <h1>{props.id}</h1>;
};