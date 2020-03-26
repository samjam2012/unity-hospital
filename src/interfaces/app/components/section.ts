import { DefaultProps } from "../../";
import { ShadowOption } from "../options";

interface SectionOptions extends ShadowOption {
  size?: "medium" | "large" | "full";
}

export default interface SectionProps extends DefaultProps {
  options?: SectionOptions;
}
