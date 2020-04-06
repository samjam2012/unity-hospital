import React from "react";
import styles from "./styles.scss";
import { Container, Header, Section, Button } from "../../components";
import { mergeClasses } from "../../utils";
import { Page } from "../../../interfaces/app/pages";
import { useAuth } from "../../hooks";
import { navigate } from "@reach/router";

export default function Login(props: Page) {
  const { isAuthenticated, loginWithRedirect } = useAuth();

  if (isAuthenticated) navigate("/");

  return (
    <Container>
      <Header>unity-data-solutions</Header>

      <Section>
        <div className="uk-align-items uk-text-center">Datacenter</div>
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
