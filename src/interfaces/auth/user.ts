export interface Auth0User {
  role: "doctor" | "patient" | "admin";
  name: string;
  picture: string;
  updated_at: string;
  email: string;
  email_verified: boolean;
  sub: string;
}

export interface User {
  userType: "doctor" | "patient" | "admin";
  firstName: string;
  lastName: string;
  updated_at: string;
  email: string;

  authId: string;
}
