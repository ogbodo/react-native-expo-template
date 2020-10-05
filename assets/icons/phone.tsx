import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconProps } from './types';

export default function PhoneIcon(props: IconProps) {
  return (
    <Svg viewBox="0 0 12.267 12.267" width="40%" height="40%" {...props}>
      <Path
        d="M2.467 5.309A10.288 10.288 0 006.958 9.8l1.5-1.5a.684.684 0 01.7-.17 7.742 7.742 0 002.433.388.681.681 0 01.681.681v2.385a.681.681 0 01-.681.681A11.585 11.585 0 010 .681.681.681 0 01.681 0h2.386a.681.681 0 01.681.681 7.742 7.742 0 00.388 2.433.684.684 0 01-.17.7z"
        fill="rgba(38,54,70,.32)"
      />
    </Svg>
  );
}
