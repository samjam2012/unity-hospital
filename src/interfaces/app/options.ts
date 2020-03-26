import { DefaultProps } from "..";

export interface SizeOption extends DefaultProps {
  size?: string;
}

export interface TypeOption extends DefaultProps {
  type?: string;
}

export interface ShadowOption {
  shadowDirection?: "left" | "right" | "bottom" | "left-right";
}
