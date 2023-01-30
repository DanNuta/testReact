import React, { PropsWithChildren } from "react";
import { Link } from "react-router-dom";
import {Props} from "./type";




export const VButtonView: React.FC<PropsWithChildren<Props>> = (props: PropsWithChildren<Props>) => {
    return(

         <Link to={props.id}>{props.title}</Link>

    )
}