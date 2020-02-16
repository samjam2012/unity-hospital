import { DefaultProps } from "..";

interface BoxShadowOptions {
  direction: "left-right" | "bottom";
}

export default interface BoxShadow extends DefaultProps {
  options?: BoxShadowOptions;
}
