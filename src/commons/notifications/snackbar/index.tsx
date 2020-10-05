import { WSnackBar } from 'react-native-smart-tip';

interface IShowSnackBar {
  bgColor: string;
  message: string;
  duration?: boolean;
}
const showSnackbar = ({
  bgColor,
  message,
  duration = false
}: IShowSnackBar) => {
  const snackBarOpts = {
    data: message,
    position: WSnackBar.position.TOP, // 1.TOP 2.CENTER 3.BOTTOM
    duration: duration
      ? WSnackBar.duration.INDEFINITE
      : WSnackBar.duration.SHORT, //1.SHORT 2.LONG 3.INDEFINITE
    textColor: 'white',
    backgroundColor: bgColor
  };

  WSnackBar.show(snackBarOpts);
};

export default showSnackbar;
