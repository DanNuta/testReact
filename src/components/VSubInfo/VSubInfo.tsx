import React, { PropsWithChildren } from "react";
import { segments, price } from "../../hook/useFetchSingleItem/type";
import { FaPlaneDeparture } from "react-icons/fa";
import { FaPlaneArrival } from "react-icons/fa";
import * as Style from "./VSubInfo.style";

type Props = {
  data: segments;
};

type Price = {
  price: price;
};

export const VStationDestination: React.FC<PropsWithChildren<Props>> = (
  props: PropsWithChildren<Props>
) => {
  return (
    <Style.ContainerFlex>
      <Style.CardContainer>
        <FaPlaneDeparture />
        <Style.Container>
          <Style.DepanareH1>
            Tara: {props.data.city_station.country}
          </Style.DepanareH1>
          <Style.h2>Orasul: {props.data.city_station.city}</Style.h2>
          <Style.p>
            Codul de aeroport: {props.data.city_station.code_airport}
          </Style.p>
        </Style.Container>
        {props.data.plane?.name && (
          <Style.Container>
            <hr />
            <Style.Title>Proprietati despre avion</Style.Title>
            <Style.h2>Nume avion: {props.data.plane?.name}</Style.h2>
          </Style.Container>
        )}

        <hr />

        <Style.Container>
          <Style.Title>Informatii despre transportator</Style.Title>
          <Style.h2>Carrier name: {props.data.carrier.name}</Style.h2>
          <Style.p>Carrier code: {props.data.carrier.code}</Style.p>
        </Style.Container>

        {props.data.operatingCarrier?.name && (
          <Style.Container>
            <hr />
            <Style.Title>OperatingCarrier</Style.Title>
            <Style.h2>
              OperatingCarrier name: {props.data.operatingCarrier.name}
            </Style.h2>
            <Style.p>
              OperatingCarrier code: {props.data.operatingCarrier.code}
            </Style.p>
          </Style.Container>
        )}
      </Style.CardContainer>

      <Style.CardContainer>
        <FaPlaneArrival />
        <Style.Container>
          <Style.DepanareH1>
            Tara: {props.data.city_destination.country}
          </Style.DepanareH1>
          <Style.h2>Orasul: {props.data.city_destination.city}</Style.h2>
          <Style.p>
            Codul de aeroport: {props.data.city_destination.code_airport}
          </Style.p>
        </Style.Container>
        {props.data.plane?.name && (
          <Style.Container>
            <hr />
            <Style.Title>Proprietati despre avion</Style.Title>
            <Style.h2>Nume avion: {props.data.plane?.name}</Style.h2>
          </Style.Container>
        )}
        <hr />

        <Style.Container>
          <Style.Title>Informatii despre transportator</Style.Title>
          <Style.h2>Carrier name: {props.data.carrier.name}</Style.h2>
          <Style.p>Carrier code: {props.data.carrier.code}</Style.p>
        </Style.Container>

        {props.data.operatingCarrier?.name && (
          <Style.Container>
            <hr />
            <Style.Title>OperatingCarrier</Style.Title>
            <Style.h2>
              OperatingCarrier name: {props.data.operatingCarrier.name}
            </Style.h2>
            <Style.p>
              OperatingCarrier code: {props.data.operatingCarrier.code}
            </Style.p>
          </Style.Container>
        )}
      </Style.CardContainer>
    </Style.ContainerFlex>
  );
};

export const VPriceInfo: React.FC<PropsWithChildren<Price>> = (
  props: PropsWithChildren<Price>
) => {
  return (
    <Style.PriceContainer>
      <Style.Title>
        {props.price.amount} {props.price.currency}
      </Style.Title>
    </Style.PriceContainer>
  );
};
