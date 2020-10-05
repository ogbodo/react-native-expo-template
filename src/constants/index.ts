import { theme } from '../theme/types';

// App header custom style
export const customHeaderStyle = {
  borderBottomWidth: 0.5,
  elevation: 2,
  shadowOpacity: 3,
  backgroundColor: theme.colors.BG_LIGHT_COLOR
};

// App HeaderBack button styles
export const headerBackTitleStyle = {
  fontFamily: theme.fonts.HELVETICA_NEUE_REGULAR,
  color: theme.colors.BD_DARK_COLOR,
  fontSize: theme.fonts.MEDIUM_SIZE,
  textTransform: 'capitalize'
};

// App Card size
export const RESPONSIVE_CARD_SIZES = { cardSize: 200, numOfColumn: 2 };

// All Request content types
export enum CONTENT_TYPES_ENUM {
  APPLICATION_JSON = 'application/json',
  MULTI_PART_FORM_DATA = 'multipart/form-data'
}

export const OTP_DURATION = 60; // delay time (seconds) before allowing user to request for OTP resend.

// keys
export const SCREEN_GRID_SIZE_STATE_KEY = 'SCREEN_GRID_SIZE_STATE_KEY';
export const USER_STATE_KEY = 'USER_STATE_KEY';
