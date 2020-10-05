import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { useThemeContext } from '../../theme';
import { BackButton } from './styles';

type BackButtonProps = {
  testID?: string;
  buttonStyle?: {};
  onPress(): void;
};

export default function BackButtonComponent(props: BackButtonProps) {
  const { buttonStyle, onPress } = props;
  const { colors } = useThemeContext();
  return (
    <BackButton {...buttonStyle} onPress={onPress}>
      <Ionicons name="ios-arrow-back" size={20} color={colors.BG_LIGHT_COLOR} />
    </BackButton>
  );
}
