import React from "react";
import { SideNavProps as Props } from "../../../interfaces/app/components";
import styles from "./styles.scss";
import { Link } from "@reach/router";

const SideNav = ({ header, pages = [] }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>{header}</div>
      <div className={styles.sideNav}>
        {pages.map((page, i) => (
          <Link
            key={`${i}_${page}`}
            className={styles.page}
            to={`/${page.toLowerCase()}`}
          >
            {page}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SideNav;
