import React from "react";
import styles from "./styles.scss";
import { Container, Header, SideBar, Button } from "../../../components";
import { useAuth } from "../../../hooks";
import { Page } from "../../../../interfaces/app/pages";

export default function Doctor(props: Page) {
  const { user, logout } = useAuth();
  console.log("Doctor: ", user);
  return (
    <Container options={{ padding: "0" }}>
      <Header options={{ alignment: "left", platformType: "flat" }}>
        <div>Hello Dr. Jamal</div>
        <div className={styles.buttonContainer}>
          <Button onClick={() => logout({})} options={{ size: "small" }}>
            Log Out
          </Button>
        </div>
      </Header>

      <SideBar links={["home", "dash"]} />
    </Container>
  );
}
