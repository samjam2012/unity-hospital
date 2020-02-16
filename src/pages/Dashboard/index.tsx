import React from "react";
import styles from "./styles.scss";

export default function Dashboard() {
  // const [movies, setMovies] = useContext(MovieContext);

  return (
    <div>
      <div className="uk-heading-medium">Dashboard</div>
      <div className={styles.header}>Module board</div>
      <button className="uk-button uk-button-default">hello</button>
    </div>
  );
}
