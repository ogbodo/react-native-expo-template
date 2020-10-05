import React from 'react';

import ContextDisplay from './contextDisplay';
import Timer from './timer';
import { ButtonStyle, Container, Title, Subtitle } from './styles';
import OTPField from '../../commons/input/otpField';
import Button from '../button';

interface VerifyIdentityViewProps {
  testID?: string;
  title: string;
  subtitle: string;
  buttonTitle: string;
  onDismiss(): void;
  handleSubmit(): void;
  handleResendOTP(): void;
  handleOTPChange(otp: string): void;
  phone: string;
  isBusy: boolean;
  onCountDown(timeLeft: number): void;
  timeLeft: number;
  isResending: boolean;
}

const VerifyIdentityView = (props: VerifyIdentityViewProps) => {
  return (
    <Container showsVerticalScrollIndicator={false}>
      <Title>{props.title}</Title>
      <Subtitle>{props.subtitle}</Subtitle>
      <ContextDisplay
        context={props.phone}
        onPress={props.onDismiss}
        disabled={props.isBusy}
      />
      <OTPField handleChange={props.handleOTPChange} isResending={false} />
      <Timer
        handleResendOTP={props.handleResendOTP}
        isBusy={props.isResending}
        onCountDown={props.onCountDown}
        timeLeft={props.timeLeft}
      />
      <Button
        buttonStyle={ButtonStyle.mainButton}
        textStyle={ButtonStyle.textStyle}
        title={props.buttonTitle}
        onPress={props.handleSubmit}
        isBusy={props.isBusy}
      />
    </Container>
  );
};

export default VerifyIdentityView;
