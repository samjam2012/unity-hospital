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

const createUser = async user => {
  const options = buildReqOptions("/users", "POST", user);

  axios(options).then(response => {
    console.log(response);
  });
};

const getUser = async authId => {
  const options = buildReqOptions(`/users/${authId}`, "GET");

  let user;
  await axios(options)
    .then(({ data: users }) => {
      user = users[0];
    })
    .catch(e => {
      console.log(e);
    });

  return user;
};

export { createUser, getUser };
