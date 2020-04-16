import React from "react";
import styles from "./styles.scss";
import { Header, SideNav, Button } from "../../../components";
import { useAuth } from "../../../hooks";
import { Page } from "../../../../interfaces/app/pages";

export default function Doctor(props: Page) {
  const {
    user,
    user: { role },
    logout
  } = useAuth();

  const hasToolAccess = role === "admin";

  return (
    <div style={{ padding: "0" }}>
      <Header alignment="left" platformType="flat">
        <div>Hello Dr. Jamal</div>
        <div className={styles.buttonContainer}>
          {hasToolAccess && <Button to="/tools" text="Tools" />}
          <Button onClick={() => logout({})} text="Log Out" />
        </div>
      </Header>

      <SideNav
        baseUrl={"/"}
        pages={["home", "patients", "appointments", "dash"]}
      />
    </div>
  );
}
