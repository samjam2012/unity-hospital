export default interface Props {
  isAuthenticated: boolean;
  user?: {
    nickname: string;
    name: string;
    picture: string;
    email: string;
    email_verified: boolean;
    sub: string;
  };
  loading: boolean;
  popupOpen: boolean;
  loginWithPopup: Function;
  handleRedirectCallback: Function;
  getIdTokenClaims: Function;
  loginWithRedirect: Function;
  getTokenSilently: Function;
  getTokenWithPopup: Function;
  getRoles: Function;
  logout: Function;
}
