import React from "react";
import axios from "axios";

const baseUrl = "http://localhost:8090";

const buildReqOptions = (path: string, method: "GET" | "POST", data?: any) => {
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

  axios(options)
    .then(response => {
      console.log(response);
    })
    .catch(e => {
      console.log(e);
    });
};

export { createUser, getUser };
