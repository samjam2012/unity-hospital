import { SizeProps } from "../options";

export interface ButtonProps extends SizeProps {
  onClick?: Function;
  to?: string;
}
