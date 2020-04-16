import React from "react";
import { useAuth } from "../../../hooks";
import { Page } from "../../../../interfaces/app/pages";

export default function Home(props: Page) {
  const { user, logout } = useAuth();
  console.log("Admin: ", user);
  return <div style={{ width: "80%" }}>Hello wowrld</div>;
}
