import { DefaultProps } from "..";

export interface BoxShadowProps extends DefaultProps {
  classOuter?: string;
  classInner?: string;
  options?: {
    direction?: "left-right" | "bottom";
  };
}
