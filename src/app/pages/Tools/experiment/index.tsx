import React, { useEffect, useState } from "react";
import { Page } from "../../../../interfaces/app/pages";
import { Button, H, Row, Container, VLine } from "../../../components";
import { useInput } from "../../../hooks";
import styles from "./styles.scss";
import { getEventsInRange } from "../../../../api";
import HashLoader from "react-spinners/HashLoader";
import {
  FormHelperText,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  Select,
  InputLabel,
  MenuItem,
  FormControl
} from "@material-ui/core";

export default function Experiment(props: Page) {
  const [eventType, setEventType] = useState(null);
  const [events, setEvents] = useState(null);
  const [dailyUsage, setDailyUsage] = useState(null);

  const [isLoading, toggleLoader] = useState(false);

  const {
    value: valueEventType,
    bind: bindEventType,
    reset: resetEventType
  } = useInput("");
  const { value: valueUsage, bind: bindUsage, reset: resetUsage } = useInput(
    ""
  );

  useEffect(() => {
    const getEvents = async () => {
      setEvents(null);
      toggleLoader(true);
      const events = await getEventsInRange({ eventType });
      setEvents(events);
    };
    const getUsage = async () => {};

    if (eventType) {
      getEvents();
      setEventType(null);
    }

    if (dailyUsage) {
      getUsage();
      setDailyUsage(null);
    }

    //eslint-disable-next-line
  }, [dailyUsage, eventType]);

  useEffect(() => {
    if (isLoading && events) {
      setEventType(null);
      toggleLoader(false);
    }
  }, [isLoading, events]);

  const handleSubmit = event => {
    event.preventDefault();

    if (valueEventType) {
      setEventType(valueEventType);
    } else if (valueUsage) {
      setDailyUsage(valueUsage);
    }
    resetEventType();
    resetUsage();
  };
  const wipeData = () => {
    setEvents(null);
    setDailyUsage(null);
  };

  const Loader = () => {
    return (
      <div className={styles.loader}>{<HashLoader loading={isLoading} />}</div>
    );
  };
  const renderTable = (events: any[]) => {
    const init = events[0];
    if (!init) return;
    const headers = Object.keys(init);
    return (
      <div className={styles.table}>
        <Table>
          <TableHead>
            {headers.map((h: any) => (
              <TableCell key={h}>{h}</TableCell>
            ))}
          </TableHead>
          <TableBody>
            {events.map(event => (
              <TableRow>
                {Object.values(event).map((value: any) => {
                  if (typeof value === "object" && value !== null) {
                    value = JSON.stringify(value);
                  }

                  return <TableCell key={value}>{value}</TableCell>;
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  };

  return (
    <Container>
      <H className={styles.header} size={2} text={"Experiments"} />
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.inputContainer}>
          <Row>
            <label>Query by Event Type</label>
            <div className={styles.input}>
              <FormControl>
                <Select
                  value={valueUsage}
                  variant="outlined"
                  labelId="input"
                  id="select"
                  displayEmpty
                  {...bindEventType}
                >
                  <MenuItem value="" disabled>
                    <em>Event Type</em>
                  </MenuItem>
                  <MenuItem value="USER_CREATE">USER_CREATE</MenuItem>
                  <MenuItem value="LOGIN">LOGIN</MenuItem>
                </Select>
              </FormControl>
            </div>
          </Row>
          <Row>
            <InputLabel id="input">Functions</InputLabel>
            <div className={styles.input}>
              <Select
                value={valueUsage}
                variant="outlined"
                labelId="input"
                id="select"
                displayEmpty
                {...bindUsage}
              >
                <MenuItem value="" disabled>
                  <em>Function</em>
                </MenuItem>
                <MenuItem value="dailyUsage">dailyUsage</MenuItem>
                <MenuItem value="trend">trend</MenuItem>
              </Select>
            </div>
          </Row>
        </div>
        <VLine />
        <div className={styles.controllerContainer}>
          <Button className={styles.button} text="Run" />
          <Button onClick={wipeData} className={styles.button} text="clear" />
        </div>
      </form>
      {isLoading ? <Loader /> : renderTable(events || [])}
    </Container>
  );
}
