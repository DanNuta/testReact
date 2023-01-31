import React, { PropsWithChildren } from "react";
import { useFetchSingleItem } from "../../hook/useFetchSingleItem/useFetchSingleItem";
import { useParams } from "react-router-dom";
import { Props } from "./type";
import * as Style from "./Booking.style";
import { VPriceInfo, VStationDestination } from "../../components/VSubInfo";

export const BookingView: React.FC<PropsWithChildren<Props>> = (
  props: PropsWithChildren<Props>
) => {
  console.log(props);

  return (
    <>
      {props.error && <Style.ErrorH1>{props.error}</Style.ErrorH1>}
      {props.pending && <Style.ErrorH1>Loafing...</Style.ErrorH1>}

      <Style.Container>
        {props.data && <VPriceInfo price={props.data.price} />}
        {props.data &&
          props.data.segments.map((item, index) => {
            return <VStationDestination key={index} data={item} />;
          })}
      </Style.Container>
    </>
  );
};
