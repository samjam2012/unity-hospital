import React from "react";
import { Page } from "../../interfaces";
import { pageRouter } from "./utils";
import Doctor from "./doctor";

export default function Portal({}: Page) {
  const Portal = Doctor;

  return <Portal />;
}
