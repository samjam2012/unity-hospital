import React from "react";
import styles from "./styles.scss";
import { Container, Header, Section, Button } from "../../components";
import { mergeClasses } from "../../utils";
import { Page } from "../../../interfaces";
import { useAuth } from "../../hooks";

export default function Login(props: Page) {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth();

  return (
    <Container options={{ width: "80%" }}>
      <Header options={{ platformType: "round" }}>Unity Hospital</Header>

      <Section>
        <div className="uk-align-items uk-text-center">Please login below</div>
        <div
          className={mergeClasses([
            "uk-flex uk-flex-between",
            styles.buttonContainer
          ])}
        >
          {isAuthenticated ? (
            <Button onClick={() => logout({})} options={{ size: "small" }}>
              Log Out
            </Button>
          ) : (
            <Button
              onClick={() => loginWithRedirect({})}
              options={{ size: "small" }}
            >
              Sign In
            </Button>
          )}
        </div>
      </Section>
    </Container>
  );
}
