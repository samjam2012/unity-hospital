import { ShadowOption } from "../options";

interface EdgeOption extends ShadowOption {
  edge?: "left" | "right";
}

export default interface SideBarProps {
  links: string[];
  options?: EdgeOption;
}
