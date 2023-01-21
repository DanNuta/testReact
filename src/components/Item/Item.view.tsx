import React, { PropsWithChildren } from "react";
import {DataDbType} from "../../hook/useFetch/useFetchType";
import * as Style from "./Item.style";
import { Segment } from "../Segment/Segment";

type Props = {
  item: DataDbType
}


export const ItemView: React.FC<PropsWithChildren<Props>> = (props: PropsWithChildren<Props>) => {

    return ( 
        <Style.DivContainer>

            <Style.PriceH1>{props.item.price} {props.item.currency}</Style.PriceH1>

            {props.item.course.map(item => {
              return (
                <Segment item={item}/>
              )
            })}


          
        </Style.DivContainer>
     );
}
 
