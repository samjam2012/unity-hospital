import React from "react";
import { PortalPageProps as Props } from "../../interfaces";
import { pageRouter } from "./utils";

export default function Portal({ userType }: Props) {
  console.log(process.env);
  const Portal = pageRouter(userType);

  return <Portal />;
}
