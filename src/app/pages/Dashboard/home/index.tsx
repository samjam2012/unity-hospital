import React from "react";
import { Container } from "../../../components";
import { useAuth } from "../../../hooks";
import { Page } from "../../../../interfaces/app/pages";

export default function Home(props: Page) {
  const { user, logout } = useAuth();
  console.log("Admin: ", user);
  return <Container options={{ width: "80%" }}>Hello wowrld</Container>;
}
