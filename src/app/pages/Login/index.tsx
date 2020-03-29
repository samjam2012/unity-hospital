import React from "react";
import styles from "./styles.scss";
import { Container, Header, Section, Button } from "../../components";
import { mergeClasses } from "../../utils";
import { Page } from "../../../interfaces/app/pages";
import { useAuth } from "../../hooks";

export default function Login(props: Page) {
  const { loginWithRedirect } = useAuth();

  return (
    <Container options={{ width: "80%" }}>
      <Header options={{ platformType: "round" }}>Unity Hospital</Header>

      <Section options={{ shadowDirection: "right" }}>
        <div className="uk-align-items uk-text-center">
          Please sign in below
        </div>
        <div
          className={mergeClasses([
            "uk-flex uk-flex-between",
            styles.buttonContainer
          ])}
        >
          <Button
            onClick={() => loginWithRedirect({})}
            options={{ size: "small" }}
          >
            Sign In
          </Button>
        </div>
      </Section>
    </Container>
  );
}
