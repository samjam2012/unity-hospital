import { createApi } from "./middleware";
const { REACT_APP_USER_API } = process.env;

const userApi = createApi(REACT_APP_USER_API as string);

const createUser = async (user: any) => {
  try {
    const { data } = await userApi("/users", "POST", user);

    console.log(data);
  } catch (e) {
    return e;
  }
};

const getUser = async (authId: string) => {
  try {
    const {
      data: { user }
    } = await userApi(`/users/${authId}`, "GET");
    return user;
  } catch (e) {
    return e;
  }
};

export { createUser, getUser };
