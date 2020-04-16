import React from "react";
import { Auth0Context } from "../../providers/auth";
import Auth from "../../interfaces/auth";
import axios from "axios";
const { useContext } = React as any;

const baseUrl = process.env.API;
const buildReqOptions = (
  path: string,
  method: "GET" | "POST",
  data: any = {}
) => {
  return {
    url: `${baseUrl}${path}`,
    method,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8"
    },
    data
  };
};

const createUser = () => {
  const options = buildReqOptions("/users", "POST", {});

  axios(options).then(response => {
    console.log(response);
  });
};

const getUser = authId => {
  const options = buildReqOptions(`/users/${authId}`, "GET");

  axios(options).then(response => {
    console.log(response);
  });
};

export default {
  createUser,
  getUser
};
