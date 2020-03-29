import React from "react";
import styles from "./styles.scss";
import { Container, Header, Section, Button } from "../../../components";
import { mergeClasses } from "../../../utils";
import { useAuth } from "../../../hooks";
import { Page } from "../../../../interfaces/app/pages";

export default function Home(props: Page) {
  const { user, logout } = useAuth();
  console.log("Doctor: ", user);
  return (
    <Container options={{ padding: "0" }}>
      <Header options={{ alignment: "left", platformType: "flat" }}>
        Hello Doctor Jamal
      </Header>

      <Section options={{ size: "small" }}>
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
