import React from "react";
import styles from "./styles.scss";
import { Container, Header, Section, Button } from "../../../components";
import { mergeClasses } from "../../../utils";
import { useAuth0 } from "../../../services/auth/react-auth0-spa";

export default function Doctor() {
  const { user, logout } = useAuth0();
  console.log("Doctor: ", user);
  return (
    <Container options={{ padding: "0" }}>
      <Header options={{ alignment: "left", platformType: "flat" }}>
        Hello Doctor Liu
      </Header>

      <Section>
        <div
          className={mergeClasses([
            "uk-align-items uk-text-center",
            styles.container
          ])}
        >
          <div className={styles.text}>Please select a portal below</div>
        </div>
        <div
          className={mergeClasses([
            "uk-flex uk-flex-between",
            styles.buttonContainer
          ])}
        >
          <Button to="" options={{ size: "small" }}>
            Doctor
          </Button>
          <Button onClick={() => logout({})} options={{ size: "small" }}>
            Log Out
          </Button>
        </div>
      </Section>
    </Container>
  );
}
