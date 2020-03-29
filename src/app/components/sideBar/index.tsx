import React from "react";
import { SideBarProps as Props } from "../../../interfaces/app/components";
import styles from "./styles.scss";
import { Link } from "@reach/router";

const SideBar = ({ links = [], options = {} }: Props) => {
  const { edge = "left" } = options;

  return (
    <div className={styles[edge]}>
      {links.map(link => (
        <Link className={styles.link} to={link}>
          {link}
        </Link>
      ))}
    </div>
  );
};

export default SideBar;
