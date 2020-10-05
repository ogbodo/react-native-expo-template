import showSnackbar from '../notifications/snackbar';

interface IValidateValue {
  inputType: string;
  value: string;
}

const BG_COLOR = '#242424';

export const validateFormFields = ({ inputType, value }: IValidateValue) => {
  switch (inputType.toLowerCase()) {
    case 'email':
      const EMAIL_PATTERN = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!EMAIL_PATTERN.test(value && value.trim())) {
        return 'Invalid email address!';
      }
      return;

    case 'password':
      if (value && value.trim().length < 6) {
        return 'Password too short!';
      }
      return;

    default:
      break;
  }
};

export const inputValidator = (value: object) => {
  // Validate for empty fields
  for (const key in value) {
    if (!value[key]) {
      showSnackbar({
        bgColor: BG_COLOR,
        message: 'Please all fields are required!'
      });
      return;
    }
    if (key === 'email') {
      const status = validateFormFields({
        inputType: key,
        value: value['email']
      });

      if (status) {
        showSnackbar({
          bgColor: BG_COLOR,
          message: status
        });
        return;
      }
    }
  }
  return true;
};
