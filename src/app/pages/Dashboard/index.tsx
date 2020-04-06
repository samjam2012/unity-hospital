import React, { useState } from "react";
import styles from "./styles.scss";
import {
  Box,
  Container,
  Content,
  Header,
  SideNav,
  Button
} from "../../components";
import { useAuth } from "../../hooks";
import { PageContainer } from "../../../interfaces/app/pages";
import Home from "./home";
import Experiment from "./experiment";

const Dashboard = ({ children: Page }: PageContainer) => {
  const LINKS = ["Home", "Experiment", "History", "Utils"];

  const {
    user: { role },
    logout
  } = useAuth();

  return (
    <Container options={{ width: "100%" }}>
      <Header options={{ alignment: "left", platformType: "flat" }}>
        <div>unity-data-solutions</div>
        <div className={styles.buttonContainer}>
          <Button onClick={() => logout({})} options={{ size: "small" }}>
            Log Out
          </Button>
        </div>
      </Header>

      <Content>
        <SideNav header={role} pages={LINKS} />
        <Box>{Page}</Box>
      </Content>
    </Container>
  );
};

export { Dashboard, Home, Experiment };
