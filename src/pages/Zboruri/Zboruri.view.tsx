import React, { PropsWithChildren } from "react";
import {Props} from "./Zboruri.type";
import {Item} from "../../components/Item/Item"


export const ZboruriView: React.FC<PropsWithChildren<Props>> = (props: PropsWithChildren<Props>) => {

    return ( 
        <>

         {props.error && <h1>{props.error}</h1>}
         {props.pending && <h1>Loading...</h1>}
          {props.data && props.data.map((item, index) => {
            return (
              <Item key={index} item={item}/>
            )
          })}
        </>
     );
}
 
