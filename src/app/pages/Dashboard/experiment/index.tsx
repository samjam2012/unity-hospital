import React from "react";
import { Page } from "../../../../interfaces/app/pages";
import { Button, Row } from "../../../../app/components";
import { useInput } from "../../../hooks";
import styles from "./styles.scss";

export default function Experiment(props: Page) {
  const { value: iV, bind: bindIV, reset: resetIV } = useInput("");
  const { value: dV, bind: bindDV, reset: resetDV } = useInput("");

  const handleSubmit = event => {
    event.preventDefault();
    alert(`Submitting Data ${iV} ${dV}`);
    resetIV();
    resetDV();
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.header}>Experiments</div>
      <Row>
        <label>independent variable</label>
        <input type="text" {...bindIV} />
      </Row>
      <Row>
        <label>dependent variable</label>
        <input type="text" {...bindDV} />
      </Row>
      <Button options={{ size: "small" }}>run</Button>
    </form>
  );
}
