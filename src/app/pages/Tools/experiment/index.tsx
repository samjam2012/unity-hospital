import React, { useEffect, useState } from "react";
import { Page } from "../../../../interfaces/app/pages";
import { Button, H, Row, Container, VLine } from "../../../components";
import { useInput } from "../../../hooks";
import styles from "./styles.scss";
import { getEventsInRange, getUsageStats } from "../../../../api";
import HashLoader from "react-spinners/HashLoader";
import {
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
  // Form field cache
  const [eventType, setEventType] = useState(null);
  const [proc, setProc] = useState("");

  // Api data
  const [events, setEvents] = useState(null);
  const [usage, setUsage] = useState(null);

  // State control
  const [isLoading, toggleLoader] = useState(false);

  // useEffect to connect to unity-data-solution apis
  useEffect(() => {
    const getEvents = async () => {
      setEvents(null);
      toggleLoader(true);
      const events = await getEventsInRange({ eventType });

      setEvents(events);
    };
    const getUsage = async () => {
      setUsage(null);
      toggleLoader(true);
      const usageStats = await getUsageStats();

      setUsage(usageStats);
    };

    // Check for eventType to call api
    if (eventType) {
      getEvents();
      setEventType(null);
    }

    // List of procedures available
    switch (proc) {
      case "dailyUsage":
        getUsage();
        break;
      default:
        break;
    }

    //eslint-disable-next-line
  }, [eventType, proc]);

  // Resets cached inputs when data is retrieved
  useEffect(() => {
    if (isLoading && events) {
      setEventType(null);
      toggleLoader(false);
    }
    if (isLoading && usage) {
      setProc("");
      toggleLoader(false);
    }
  }, [isLoading, events, usage]);

  // Form and Input controls
  const {
    value: eventInput,
    bind: bindEventType,
    reset: resetEventType
  } = useInput("");
  const { value: procInput, bind: bindProc, reset: resetProc } = useInput("");
  const resetForm = () => {
    resetEventType();
    resetProc();
  };
  const wipeData = () => {
    setEvents(null);
    setProc("");
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (eventInput) {
      setEventType(eventInput);
    } else if (procInput) {
      setProc(procInput);
    }
    resetForm();
  };

  const Loader = () => {
    return (
      <div className={styles.loader}>{<HashLoader loading={isLoading} />}</div>
    );
  };

  const renderEventTable = (events: any[]) => {
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
                  value={eventType}
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
            <InputLabel id="input">Procedures</InputLabel>
            <div className={styles.input}>
              <FormControl>
                <Select
                  value={proc}
                  variant="outlined"
                  labelId="input"
                  id="select"
                  displayEmpty
                  {...bindProc}
                >
                  <MenuItem value="" disabled>
                    <em>Function</em>
                  </MenuItem>
                  <MenuItem value="dailyUsage">dailyUsage</MenuItem>
                  <MenuItem value="trend">trend</MenuItem>
                </Select>
              </FormControl>
            </div>
          </Row>
        </div>
        <VLine />
        <div className={styles.controllerContainer}>
          <Button className={styles.submit} text="Run" />
          <Button onClick={wipeData} className={styles.clear} text="clear" />
        </div>
      </form>
      {isLoading ? <Loader /> : renderEventTable(events || [])}
    </Container>
  );
}
