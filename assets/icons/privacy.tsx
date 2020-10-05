import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconProps } from './types';

export default function PasswordIcon(props: IconProps) {
  return (
    <Svg
      width="40%"
      height="40%"
      viewBox="0 0 12.358 14.039"
      fill="none"
      {...props}
    >
      <Path
        d="M6.179 10.7a1.452 1.452 0 001.545-1.337 1.452 1.452 0 00-1.545-1.337 1.452 1.452 0 00-1.545 1.337A1.452 1.452 0 006.179 10.7m4.634-6.02a1.452 1.452 0 011.545 1.337V12.7a1.452 1.452 0 01-1.545 1.337H1.545A1.452 1.452 0 010 12.7V6.017A1.452 1.452 0 011.545 4.68h.772V3.343A3.63 3.63 0 016.179 0a3.63 3.63 0 013.862 3.343V4.68h.772M6.179 1.337a2.178 2.178 0 00-2.317 2.006V4.68H8.5V3.343a2.178 2.178 0 00-2.321-2.006z"
        fill="rgba(38,54,70,.32)"
      />
    </Svg>
  );
}
