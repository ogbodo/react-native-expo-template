import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconProps } from './types';

export default function AccountIcon(props: IconProps) {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 13 13" {...props}>
      <Path
        d="M6.5 0a3.25 3.25 0 11-3.25 3.25A3.25 3.25 0 016.5 0m0 8.125c3.591 0 6.5 1.454 6.5 3.25V13H0v-1.625c0-1.796 2.909-3.25 6.5-3.25z"
        fill="rgba(38,54,70,.32)"
      />
    </Svg>
  );
}
