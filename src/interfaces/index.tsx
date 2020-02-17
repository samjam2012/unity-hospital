import { RouteComponentProps } from "@reach/router";

import _ButtonProps from "./componentProps/button";
import _BoxShadowProps from "./componentProps/boxShadow";

export type ButtonProps = _ButtonProps;
export type BoxShadowProps = _BoxShadowProps;

export interface TypeOption {
  type?: string;
}
export interface WrapperOption {
  wrapper?: string;
}
export interface SizeOption {
  size: string;
}

export interface Page extends RouteComponentProps {}

export interface PortalPageProps extends Page {
  userType?: string;
}
export interface DefaultProps {
  children: any;
  className?: string;
  options?: any;
}

export interface WrapperProps extends DefaultProps {
  options: WrapperOption;
}

export interface TypeProps extends DefaultProps {
  options: TypeOption;
}

export interface SizeProps extends DefaultProps {
  options?: SizeOption;
}
