import { DefaultProps } from "../..";
import { SizeOption } from "../options";

export default interface Props extends DefaultProps {
  onClick?: Function;
  to?: string;
  option?: SizeOption;
}
