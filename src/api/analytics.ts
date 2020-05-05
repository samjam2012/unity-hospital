import { eventApi } from ".";
import moment from "moment";

enum EventType {
  USER_CREATE = "USER_CREATE",
  LOGIN = "LOGIN"
}

interface Event {
  eventBody: UserCreate;
  eventType: EventType;
  dateTime: string;
}

interface UserCreate {
  userId: string;
  userType: "ADMIN" | "DOCTOR" | "PATIENT";
}

interface UserLogin extends UserCreate {
  loginCount: number;
}

interface EventReq {
  eventType: EventType;
  eventDetails: any;
}

async function healthCheck() {
  const { data } = await eventApi("/ping");

  return data;
}

async function fireEvent({ eventType, eventDetails }: EventReq) {
  const generateEventBody = () => {
    const { id, userType, loginCount } = eventDetails;
    switch (eventType) {
      case "USER_CREATE":
        return { userId: id, userType } as UserCreate;
      case "LOGIN":
        return { userId: id, userType, loginCount } as UserLogin;
      default:
        return null;
    }
  };

  const eventBody = generateEventBody();
  const dateTime = moment().utc().format();

  if (!eventBody) {
    return console.log("Event type unknown, dropping event: ", eventType);
  }

  const event: Event = {
    eventType,
    eventBody,
    dateTime
  };

  try {
    const { data } = await eventApi("/events", "POST", event);
    return data;
  } catch (error) {
    return error;
  }
}

async function getEventsInRange({ floorTime, eventType }: any) {
  try {
    if (!floorTime) {
      floorTime = moment().subtract(7, "days").utc().format();
    }
    const { data: events } = await eventApi("/events/range", "POST", {
      event_type: eventType,
      floor_time: floorTime
    });

    return events;
  } catch (error) {
    return error;
  }
}

async function getUsageStats() {
  try {
    const { data: usage } = await eventApi("/events/usage");

    console.log("\n\nUsage");
    console.log("\n------------\n\n");
    console.dir(usage);
    console.log("\n\n------------\n\n");

    return usage;
  } catch (error) {
    return error;
  }
}

export { healthCheck, fireEvent, getEventsInRange, getUsageStats };
