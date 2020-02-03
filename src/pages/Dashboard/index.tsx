import React from "react";
import styles from "./styles.scss";

const Dashboard = () => {
  // const [movies, setMovies] = useContext(MovieContext);

  return (
    <div>
      <div className="uk-heading-medium">Dashboard</div>
      <div className={styles.header}>Module board</div>
      <button className="uk-button">hello</button>
    </div>
  );
};

export default Dashboard;
