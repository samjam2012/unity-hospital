import React from "react";
import Page from "../../../interfaces/app/page";
import Doctor from "./doctor";
import { useAuth } from "../../hooks";

export default function Portal(props: Page) {
  const {
    user: { role }
  } = useAuth();
  console.log(role);
  const Portal = Doctor;

  return <Portal />;
}
