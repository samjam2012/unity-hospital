import { DefaultProps } from "../..";

interface HeaderOptions {
  alignment?: "left" | "center";
  platformType?: string;
}

export default interface HeaderProps extends DefaultProps {
  options?: HeaderOptions;
}
