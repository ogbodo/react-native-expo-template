import React, { Dispatch } from 'react';

import { Container, Text, Change } from './style';

interface IProps {
  context?: string;
  onPress?: () => void | boolean;
  setVisibility?: Dispatch<boolean>;
  disabled?: boolean;
}

export default function ContextDisplay(props: IProps) {
  return (
    <Container>
      <Change onPress={props.onPress} disabled={props.disabled}>
        <Text>{props.context}</Text>
        <Text style={{ opacity: 1 }}>Change</Text>
      </Change>
    </Container>
  );
}
