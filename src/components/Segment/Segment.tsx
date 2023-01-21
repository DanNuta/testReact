import React, { PropsWithChildren } from "react";
import {SegmentView} from "./Segment.view";
import {CityInformation} from "../../hook/useFetch/useFetchType";


type Props = {
    item: CityInformation
}


export const Segment: React.FC<PropsWithChildren<Props>> = (props: PropsWithChildren<Props>) => {

    return ( 
        <>
         <SegmentView cityInfo={props.item}>

         </SegmentView>
        </>
     );
}
 
