import { DefaultProps } from "..";

export interface SizeProps extends DefaultProps {
  options?: {
    size?: string;
  };
}

export interface TypeProps extends DefaultProps {
  options?: {
    type?: string;
  };
}
