import React, { useEffect, useState } from "react";
import { Page } from "../../../../interfaces/app/pages";
import { healthCheck } from "../../../../api";
import HashLoader from "react-spinners/HashLoader";
import styles from "./styles.scss";
import { Header } from "../../../components";

export default function Home(props: Page) {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    const getStats = async () => {
      const stats = await healthCheck();
      setStats(stats);
    };
    getStats();
  }, []);

  const HealthReport = () => {
    return (
      <div>
        <h2 className={styles.header}>Health Report </h2>
        {Object.entries(stats || []).map(arr => {
          return <p>{arr[0] + ": " + arr[1]}</p>;
        })}
      </div>
    );
  };
  const Loader = () => {
    return (
      <div className={styles.loader}>{<HashLoader loading={!stats} />}</div>
    );
  };

  return <div>{!stats ? <Loader /> : <HealthReport />}</div>;
}
