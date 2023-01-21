import React, { PropsWithChildren } from "react";
import {ZboruriView} from "./Zboruri.view";
import {Props} from "./Zboruri.type";


export const Zboruri: React.FC<PropsWithChildren<Props>> = (props: PropsWithChildren<Props>) => {

    return (

         <ZboruriView data={props.data}
                      pending={props.pending} 
                      error={props.error}>
            {props.children}
         </ZboruriView>
         
     );
}
 
