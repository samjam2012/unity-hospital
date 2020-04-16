interface AuthService {
  loginWithRedirect: Function;
}
export interface User {
  authId: string;
  email: string;
  emailVerified: boolean;
  firstName: string;
  lastName: string;
  userType: "DOCTOR" | "PATIENT" | "ADMIN";
  updatedAt: string;
}

export default interface Auth extends AuthService {
  isAuthenticated: boolean;
  loading: boolean;
  logout: Function;
  user: User;
}
