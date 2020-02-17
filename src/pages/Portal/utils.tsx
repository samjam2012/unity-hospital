import React from "react";
import Doctor from "./doctor";
import Patient from "./patient";
import Login from "../Login";

const pages = {
  doctor: Doctor,
  patient: Patient
};

export const pageRouter = page => {
  if (!(page in pages)) {
    return Login;
  }

  return pages[page];
};
