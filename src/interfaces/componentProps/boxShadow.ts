import { DefaultProps } from "..";

interface BoxShadowOptions {
  direction: "left-right" | "bottom";
}

export default interface BoxShadow extends DefaultProps {
  classOuter?: string;
  classInner?: string;
  options?: BoxShadowOptions;
}
