import React from "react";
// import styles from "./styles.scss";
import { Container, Header } from "../../components";
export default function Welcome() {
  return (
    <Container>
      <Header wrapper={"box-shadow"}>Welcome</Header>
      <div className="">Please select your desired portal below</div>
    </Container>
  );
}
