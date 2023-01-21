import { useState, useEffect } from "react";
import { Props } from "./useFetchType";

const url: string =
  "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/64989ad8-dc80-4cad-bd6d-870ba0be2f4d/roundtrip.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230120%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230120T100124Z&X-Amz-Expires=86400&X-Amz-Signature=fe415b66f3bb65b7cfd1788e3c1323b7a139d03ba4c66c3c03d2f096f5ac580c&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22roundtrip.json%22&x-id=GetObject";

export function useFetch() {
  const [data, setData] = useState<Props[]>([]);
  const [pendign, setPendign] = useState<boolean>(false);

  useEffect(() => {
    async function getData() {
      setPendign(true);

      const data_db = await fetch(url);
      const json_data = await data_db.json();

      console.log(
        json_data.data.returnItineraries.itineraries[0].price.amount,
        "data"
      );

      setData(() => json_data);
      setPendign(false);
    }

    getData();
  }, []);

  return { data, pendign };
}
