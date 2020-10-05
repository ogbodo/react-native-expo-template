import React, { ReactNode } from 'react';
import { ActivityIndicator } from 'react-native-paper';

import boxShadow from '../../utils/boxShadows';
import { useThemeContext } from '../../theme';
import { Container, ButtonText, Spinner } from './styles';

type ButtonProps = {
  buttonStyle?: {};
  textStyle?: {};
  testID?: string;
  title: string;
  activeOpacity?: number;
  onPress?(): void;
  children?: ReactNode;
  isBusy?: boolean;
  disabled?: boolean;
  spinnerStyle?: {};
};

export default function Button(props: ButtonProps) {
  const { title, buttonStyle, textStyle, isBusy, disabled } = props;
  const { colors } = useThemeContext();

  return (
    <Container
      activeOpacity={0.5}
      style={[boxShadow({ elevation: 0 }), buttonStyle]}
      {...{ ...props, disabled: isBusy || disabled }}
    >
      {isBusy ? (
        <Spinner testID="spinner">
          <ActivityIndicator
            size="small"
            color={colors.BG_LIGHT_COLOR}
            {...props.spinnerStyle}
          />
        </Spinner>
      ) : (
        <ButtonText style={textStyle}>{title}</ButtonText>
      )}
      {props.children}
    </Container>
  );
}
