import React from 'react';
import OTPInputView from '@twotalltotems/react-native-otp-input';

import { useThemeContext } from '../../theme';
import applyScale from '../../utils/applyScale';

export default function OTPField(props: {
  handleChange(code: string): void;
  isResending: boolean;
}) {
  const { colors, fonts } = useThemeContext();
  return (
    <OTPInputView
      pinCount={6}
      style={{
        width: '90%',
        height: applyScale(60),
        marginBottom: 27
      }}
      selectionColor={colors.BG_LIGHT_BLUE_COLOR}
      codeInputHighlightStyle={{
        backgroundColor: colors.BG_LIGHT_COLOR
      }}
      clearInputs={props.isResending}
      codeInputFieldStyle={{
        height: applyScale(60),
        width: applyScale(60),
        borderRadius: applyScale(60) / 2,
        fontFamily: fonts.HELVETICA_NEUE_BOLD,
        fontSize: fonts.LARGE_SIZE + 5,
        color: colors.BG_LIGHT_BLUE_COLOR,
        textAlign: 'center',
        margin: 1,
        borderWidth: 1,
        borderBottomWidth: 2
      }}
      onCodeFilled={props.handleChange}
      keyboardType="number-pad"
      autoFocusOnLoad
    />
  );
}
