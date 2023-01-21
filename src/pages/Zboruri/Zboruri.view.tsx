import React, { PropsWithChildren } from "react";
import {Props} from "./Zboruri.type";
import {Item} from "../../components/Item/Item"


export const ZboruriView: React.FC<PropsWithChildren<Props>> = (props: PropsWithChildren<Props>) => {

    return ( 
        <>

          {props.data && props.data.map(item => {
            return (
              <Item item={item}/>
            )
          })}
        </>
     );
}
 
