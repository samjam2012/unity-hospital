import { DefaultProps, SizeOption } from "..";

export default interface ButtonProps extends DefaultProps {
  options?: SizeOption;
  to?: string;
}
