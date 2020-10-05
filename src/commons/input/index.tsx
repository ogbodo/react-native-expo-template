import React, { useState } from 'react';
import AccountIcon from '../../../assets/icons/accountIcon';
import EyeHide from '../../../assets/icons/eyeHide';
import EyeShow from '../../../assets/icons/eyeShow';
import applyScale from '../../utils/applyScale';

import { Container, TextInput, TopContainer, EyeContainer } from './styles';

type InputProps = {
  textInputStyle?: {};
  containerStyle?: {};
  testID?: string;
  dialingCode?: string;
  isPasswordField?: boolean;
  placeholder: string;
  defaultValue: string;
  secureTextEntry?: boolean;
  editable?: boolean;
  keyboardType?: any;
  returnKeyType?: any;
  onChangeText(T: any): void;
  onFocus?(): void;
  inputFieldIcon?: React.ElementType;
};

export default function Input(props: InputProps) {
  const [state, setState] = useState({ showEye: true });
  return (
    <TopContainer style={props.containerStyle}>
      <Container>
        {props.inputFieldIcon && <props.inputFieldIcon />}
        <TextInput
          {...props}
          secureTextEntry={props.isPasswordField && state.showEye}
          style={props.textInputStyle}
        />
        {props.isPasswordField && (
          <EyeContainer onPress={() => setState({ showEye: !state.showEye })}>
            {state.showEye ? (
              <EyeShow
                width="17"
                height="20"
                style={{ alignSelf: 'flex-end' }}
              />
            ) : (
              <EyeHide
                width="17"
                height="20"
                style={{ alignSelf: 'flex-end' }}
              />
            )}
          </EyeContainer>
        )}
      </Container>
    </TopContainer>
  );
}
