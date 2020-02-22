import React from "react";
import { Page } from "../../interfaces";
import Doctor from "./doctor";
// import Patient from "./patient";
// import { navigate } from "@reach/router";
import { useQuery } from "@apollo/react-hooks";
import { GET_POKEMON_INFO } from "./gql";

const Portal = (props: Page) => {
  const { data, loading, error } = useQuery(GET_POKEMON_INFO);
  console.log(data);
  let Portal = Doctor;
  // switch (userType) {
  //   case "doctor":
  //     Portal = Doctor;
  //     break;
  //   case "patient":
  //     Portal = Patient;
  //     break;
  //   default:
  //     navigate("login");
  //     break;
  // }

  return <Portal />;
};

export default Portal;
