import React, { useState, useEffect, Fragment } from 'react';
import { TouchableOpacity } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';

import applyScale from '../../../../utils/applyScale';
import { Time, ResendLabel, Spinner } from './styles';
import { useThemeContext } from '../../../../theme';

interface ITimer {
  handleResendOTP(): void;
  isBusy: boolean;
  onCountDown(timeLeft: number): void;
  timeLeft: number;
}

const Timer = (props: ITimer) => {
  const { timeLeft, onCountDown, isBusy } = props;
  const { colors } = useThemeContext();

  useEffect(() => {
    if (timeLeft === 0) return;
    const intervalHandler = setInterval(
      () => {
        onCountDown(timeLeft - 1);
        if (timeLeft <= 0) clearInterval(intervalHandler);
      },
      1000 //run this function every seconds
    );
    return () => clearInterval(intervalHandler);
  }, [timeLeft]);

  return (
    <Fragment>
      {timeLeft ? (
        <Time>Resend in {timeLeft} secs</Time>
      ) : isBusy ? (
        <Spinner>
          <ActivityIndicator size="small" color={colors.BD_DARK_COLOR} />
        </Spinner>
      ) : (
        <TouchableOpacity
          onPress={props.handleResendOTP}
          disabled={props.isBusy}
        >
          <ResendLabel
            style={{
              color: 'rgba(0,0,0,1)',
              marginRight: applyScale(14),
              marginBottom: 0
            }}
          >
            Resend OTP
          </ResendLabel>
        </TouchableOpacity>
      )}
    </Fragment>
  );
};

export default Timer;
