import { DefaultProps } from "..";

export interface HeaderProps extends DefaultProps {
  options?: {
    alignment?: string;
    platformType?: string;
    wrapper?: string;
  };
}
