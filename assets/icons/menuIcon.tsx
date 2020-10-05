import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconProps } from './types';

export default function MenuIcon(props: IconProps) {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 22 22" {...props}>
      <Path d="M6.7 6.7c2.4.2 6.2.2 8.5 0 2.4-.2.5-.4-4.2-.4s-6.6.2-4.3.4zM6.7 11.7c2.4.2 6.2.2 8.5 0 2.4-.2.5-.4-4.2-.4s-6.6.2-4.3.4zM6.7 15.7c2.4.2 6.2.2 8.5 0 2.4-.2.5-.4-4.2-.4s-6.6.2-4.3.4z" />
    </Svg>
  );
}
