import { DefaultProps } from "../../";
import { ShadowOption } from "../options";

interface SectionOptions extends ShadowOption {
  size?: "full" | "large" | "medium" | "small";
}

export default interface SectionProps extends DefaultProps {
  options?: SectionOptions;
}
