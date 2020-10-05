import React from 'react';
import { useThemeContext } from '../../theme';

import { Label } from './styles';

interface TabBarLabelProp {
  label: string;
  focused: boolean;
  color: string;
}

export default function TabBarLabel(props: TabBarLabelProp) {
  const { fonts } = useThemeContext();
  const { label, focused, color } = props;

  return (
    <Label
      style={{
        fontFamily: focused
          ? fonts.HELVETICA_NEUE_REGULAR
          : fonts.HELVETICA_NEUE_BOLD,
        fontSize: focused ? fonts.SMALL_SIZE + 3 : fonts.SMALL_SIZE + 2,
        color
      }}
    >
      {label}
    </Label>
  );
}
