import * as React from 'react';
import Svg, { Path, LinearGradient, Stop } from 'react-native-svg';
import { useThemeContext } from '../../src/theme';
import { IconProps } from './types';

export default function MailIcon(props: IconProps) {
  const { colors } = useThemeContext();
  return (
    <Svg viewBox="0 0 13.049 10.639" width="40%" height="40%" {...props}>
      <Path
        d="M11.744 2.66l-5.22 3.324L1.3 2.66V1.33l5.22 3.325 5.22-3.325m0-1.33H1.3A1.313 1.313 0 000 1.33v7.979a1.318 1.318 0 001.3 1.33h10.444a1.318 1.318 0 001.3-1.33V1.33a1.317 1.317 0 00-1.3-1.33z"
        fill="rgba(38,54,70,.32)"
      />
    </Svg>
  );
}
