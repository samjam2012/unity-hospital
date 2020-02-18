import React from "react";
import { PortalPageProps as Props } from "../../interfaces";
import Doctor from "./doctor";
import Patient from "./patient";
import { navigate } from "@reach/router";
import { useQuery, useApolloClient } from "@apollo/react-hooks";
import gql from "graphql-tag";

const Portal = (props: Props) => {
  // const client = useApolloClient();
  // const GET_POKEMON_INFO = gql`
  //   {
  //     pokemons(first: 150) {
  //       id
  //       number
  //       name
  //       image
  //       evolutions {
  //         id
  //         number
  //         name
  //         image
  //       }
  //     }
  //   }
  // `;
  // const { data, loading, error } = useQuery(GET_POKEMON_INFO);
  // console.log(data);
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
