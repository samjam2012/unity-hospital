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
    switch (eventType) {
      case "USER_CREATE":
        const { id, userType } = eventDetails;

        return { userId: id, userType } as UserCreate;
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

export { healthCheck, fireEvent };
