import React from "react";
import { PageContainer } from "../../../interfaces/app/pages";
import Doctor from "./doctor";
import { useAuth } from "../../hooks";

export default function Portal(props: PageContainer) {
  const {
    user: { role }
  } = useAuth();
  console.log(role);
  const Portal = Doctor;

  return <Portal />;
}
