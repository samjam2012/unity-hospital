import React, { createContext, useEffect, useState } from "react";
import createAuth0Client from "@auth0/auth0-spa-js";
import { getUser } from "../api";

const DEFAULT_REDIRECT_CALLBACK = () =>
  window.history.replaceState({}, document.title, window.location.pathname);

const normalizeUser = rawUserObj => {
  const userObject = {};

  for (const key in rawUserObj) {
    if (key.endsWith("/role")) {
      userObject["role"] = rawUserObj[key];
    } else {
      userObject[key] = rawUserObj[key];
    }
  }

  const findFirstName = name => {
    return name;
  };

  const findLastName = name => {
    return name;
  };

  const { role: userType, name, updated_at, email, sub } = userObject;

  const firstName = findFirstName(name);
  const lastName = findLastName(name);
  const authId = sub.split("auth0|")[1];

  const normalizedUserObj = {
    userType,
    firstName,
    lastName,
    email,
    updated_at,
    authId
  };

  return normalizedUserObj;
};

const Auth0Context = createContext();

const Auth0Provider = ({
  children,
  onRedirectCallback = DEFAULT_REDIRECT_CALLBACK,
  ...initOptions
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState();
  const [user, setUser] = useState({ role: "" });
  const [auth0Client, setAuth0] = useState();
  const [loading, setLoading] = useState(true);
  const [popupOpen, setPopupOpen] = useState(false);

  const setNormalizedUser = async rawUser => {
    const user = normalizeUser(rawUser);

    try {
      await getUser(user.authId);
      console.log("\n\nFinished");
      console.log("\n------------\n\n");
      console.log("done");
      console.log("\n\n------------\n\n");
    } catch (e) {
      console.log("\n\nError");
      console.log("\n------------\n\n");
      console.log(e);
      console.log("\n\n------------\n\n");
    }

    return setUser(user);
  };

  useEffect(() => {
    const initAuth0 = async () => {
      const auth0FromHook = await createAuth0Client(initOptions);
      setAuth0(auth0FromHook);

      if (
        window.location.search.includes("code=") &&
        window.location.search.includes("state=")
      ) {
        const { appState } = await auth0FromHook.handleRedirectCallback();
        onRedirectCallback(appState);
      }

      const isAuthenticated = await auth0FromHook.isAuthenticated();

      setIsAuthenticated(isAuthenticated);

      if (isAuthenticated) {
        const user = await auth0FromHook.getUser();

        setNormalizedUser(user);
      }

      setLoading(false);
    };
    initAuth0();
    // eslint-disable-next-line
  }, []);

  const loginWithPopup = async (params = {}) => {
    setPopupOpen(true);
    try {
      await auth0Client.loginWithPopup(params);
    } catch (error) {
      console.error(error);
    } finally {
      setPopupOpen(false);
    }
    const user = await auth0Client.getUser();
    setNormalizedUser(user);
    setIsAuthenticated(true);
  };

  const handleRedirectCallback = async () => {
    setLoading(true);
    await auth0Client.handleRedirectCallback();
    const user = await auth0Client.getUser();
    setLoading(false);
    setIsAuthenticated(true);
    setNormalizedUser(user);
  };

  return (
    <Auth0Context.Provider
      value={{
        isAuthenticated,
        user,
        loading,
        popupOpen,
        loginWithPopup,
        handleRedirectCallback,
        getIdTokenClaims: (...p) => auth0Client.getIdTokenClaims(...p),
        loginWithRedirect: (...p) => auth0Client.loginWithRedirect(...p),
        getTokenSilently: (...p) => auth0Client.getTokenSilently(...p),
        getTokenWithPopup: (...p) => auth0Client.getTokenWithPopup(...p),
        logout: (...p) => auth0Client.logout(...p)
      }}
    >
      {children}
    </Auth0Context.Provider>
  );
};

export { Auth0Context, Auth0Provider };
