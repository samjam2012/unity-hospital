import React from "react";
import styles from "./styles.scss";

import { useAuth } from "../../hooks";
import { Header, SideNav, Button } from "../../components";
import { PageContainer } from "../../../interfaces/app/pages";
import Home from "./home";
import Experiment from "./experiment";

const Tools = ({ children: Page }: PageContainer) => {
  const { logout } = useAuth();
  const PAGES = ["Home", "Experiment", "History", "Utils"];

  return (
    <div>
      <Header alignment="left" platformType="flat">
        <div>Tools</div>
        <div className={styles.buttonContainer}>
          <Button onClick={() => logout({})} text="Log Out" />
        </div>
      </Header>

      <div>
        <SideNav baseUrl={"/tools"} pages={PAGES} />
        <div className={styles.box}>{Page}</div>
      </div>
    </div>
  );
};

export default Tools;

export { Home, Experiment };
