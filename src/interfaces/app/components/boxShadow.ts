// import { DefaultProps } from "..";

export interface BoxShadowProps {
  classOuter?: string;
  classInner?: string;
  options?: {
    direction?: "left-right" | "bottom";
  };
  children: any;
}
