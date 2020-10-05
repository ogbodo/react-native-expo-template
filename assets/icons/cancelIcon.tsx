import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconProps } from './types';

export default function CancelIcon(props: IconProps) {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 496 496" {...props}>
      <Path d="M361.136 134.864a8 8 0 00-11.312 0L248 236.688 146.176 134.864a8 8 0 10-11.312 11.312L236.688 248 134.864 349.824a8 8 0 00-.196 11.312 8 8 0 0011.508 0L248 259.312l101.824 101.824a8 8 0 0011.312-.196 8 8 0 000-11.116L259.312 248l101.824-101.824a8 8 0 000-11.312z" />
    </Svg>
  );
}
