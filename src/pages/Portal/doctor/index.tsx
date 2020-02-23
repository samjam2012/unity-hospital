import React from "react";
import styles from "./styles.scss";
import { Container, Header, Section, Button } from "../../../components";
import { mergeClasses } from "../../../utils";

export default function Doctor() {
  return (
    <Container options={{ padding: "0" }}>
      <Header options={{ alignment: "left", platformType: "flat" }}>
        Hello Doctor Liu
      </Header>

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
          <Button to="" options={{ size: "small" }}>
            Doctor
          </Button>
          <Button options={{ size: "small" }}>Patient</Button>
        </div>
      </Section>
    </Container>
  );
}
