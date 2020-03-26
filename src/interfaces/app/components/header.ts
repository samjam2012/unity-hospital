import { DefaultProps } from "../..";

interface HeaderOptions {
  alignment?: string;
  platformType?: string;
}

export default interface HeaderProps extends DefaultProps {
  options?: HeaderOptions;
}
