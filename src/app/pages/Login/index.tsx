import React, { useState, useEffect } from "react";
import styles from "./styles.scss";
import { Header, Section, Button } from "../../components";
import { mergeClasses } from "../../utils";
import { Page } from "../../../interfaces/app/pages";
import { useAuth } from "../../hooks";
import { navigate } from "@reach/router";
import Auth from "../../../interfaces/auth";

export default function Login(props: Page) {
  const {
    isAuthenticated,
    loginWithRedirect,
    user: { userType }
  }: Auth = useAuth();

  return (
    <div className={styles.container}>
      <Header className={styles.header}>Unity</Header>

      <Section>
        <div className="uk-align-items uk-text-center">
          Please sign in below through our external authorization site
        </div>
        <div
          className={mergeClasses([
            "uk-flex uk-flex-between",
            styles.buttonContainer
          ])}
        >
          <Button onClick={() => loginWithRedirect({})} text="Sign In" />
        </div>
      </Section>
    </div>
  );
}
