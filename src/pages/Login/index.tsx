import React from "react";
import styles from "./styles.scss";
import { Container, Header, Section, Button } from "../../components";
import { mergeClasses } from "../../utils";
import { Page } from "../../interfaces";

export default function Login(props: Page) {
  return (
    <Container options={{ width: "80%" }}>
      <Header options={{ platformType: "round" }}>My Dashboard</Header>

      <Section>
        <div className="uk-align-items uk-text-center">
          Please select a portal below
        </div>
        <div
          className={mergeClasses([
            "uk-flex uk-flex-between",
            styles.buttonContainer
          ])}
        >
          <Button to="/" options={{ size: "small" }}>
            Doctor
          </Button>
          <Button options={{ size: "small" }}>Patient</Button>
        </div>
      </Section>
    </Container>
  );
}
