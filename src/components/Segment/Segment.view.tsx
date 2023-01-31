import React, { PropsWithChildren } from "react";
import { CityInformation } from "../../hook/useFetch/useFetchType";
import { TbPlaneDeparture } from "react-icons/tb";
import { TbPlaneArrival } from "react-icons/tb";
import * as Style from "./Segment.style";

type Props = {
  cityInfo: CityInformation;
};

export const SegmentView: React.FC<PropsWithChildren<Props>> = (
  props: PropsWithChildren<Props>
) => {
  return (
    <Style.DivContainer>
      <Style.Div>
        <TbPlaneDeparture />
        <Style.CountryH1>{props.cityInfo.city_station.country}</Style.CountryH1>
        <Style.CityP>{props.cityInfo.city_station.city}</Style.CityP>
        <Style.CityP>{props.cityInfo.city_station.code_airport}</Style.CityP>
      </Style.Div>

      <Style.Div>
        <TbPlaneArrival />
        <Style.CountryH1>
          {props.cityInfo.city_destination.country}
        </Style.CountryH1>
        <Style.CityP>{props.cityInfo.city_destination.city}</Style.CityP>
        <Style.CityP>
          {props.cityInfo.city_destination.code_airport}
        </Style.CityP>
      </Style.Div>
    </Style.DivContainer>
  );
};
