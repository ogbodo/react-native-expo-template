/** ALL BODY REQUESTS TYPES */

export type SIGNUP_PAYLOAD_TYPE = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  authToken?: string;
};

export type SIGNIN_PAYLOAD_TYPE = {
  email: string;
  password: string;
  authToken?: string;
};

export type USER_PAYLOAD_TYPES = SIGNUP_PAYLOAD_TYPE | SIGNIN_PAYLOAD_TYPE;
