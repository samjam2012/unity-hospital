import { DefaultProps } from "../..";
import { ShadowOption } from "../options";

export default interface Props extends DefaultProps {
  classOuter?: string;
  classInner?: string;
  options: ShadowOption;
}
