import React, { PropsWithChildren } from "react";
import { ItemView } from "./Item.view";
import { DataDbType } from "../../hook/useFetch/useFetchType";

type Props = {
  item: DataDbType;
};

export const Item: React.FC<PropsWithChildren<Props>> = (
  props: PropsWithChildren<Props>
) => {
  return (
    <>
      <ItemView item={props.item}></ItemView>
    </>
  );
};
