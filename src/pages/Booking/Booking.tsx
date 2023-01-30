import React, { PropsWithChildren, useEffect, useState } from "react";
import { BookingView } from "./Booking.View";
import { Props } from "./type";

import { useParams } from "react-router-dom";

export const Booking: React.FC<PropsWithChildren> = (
  props: PropsWithChildren
) => {

    const {id} = useParams();
    const url: string = `http://localhost:3000/itineraries/${id}`;
    const [data, setData] = useState<>({});
    const [pending, setPending] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null)


    useEffect(() => {
        getData(url)
    }, [id])

    async function getData(url: string){


     
         try{
             const data_bd = await fetch(url);
             const data_json = await data_bd.json(); 

             for(let key in data_json){
                console.log(key, data_json[key])
             }

             setData(data_json)

             console.log(data_json)
         }catch(e){
            setPending(false)
            setError("A aparut o erroare")
         }
         
     }
    
    
  return <BookingView id={id!}>{props.children}</BookingView>;
};


