import React, { PropsWithChildren } from "react";
import { VButtonView } from "./VButton.View";
import { Props } from "./type";

export const VButton: React.FC<PropsWithChildren<Props>> = (
  props: PropsWithChildren<Props>
) => {
  return (
    <VButtonView title={props.title} id={props.id}>
      {props.children}
    </VButtonView>
  );
};
