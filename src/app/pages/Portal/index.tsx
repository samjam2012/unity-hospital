import React from "react";
import { PageContainer } from "../../../interfaces/app/pages";
import Doctor from "./doctor";
import Patient from "./patient";
import { useAuth } from "../../hooks";

const Portal = (props: PageContainer) => {
  const Portal = Doctor;

  return <Portal />;
};

export default Portal;

export { Doctor, Patient };
