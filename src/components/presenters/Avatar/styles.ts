import styled from 'styled-components/native';
import { heightPercentageToDP as HP } from 'react-native-responsive-screen';

export const AvatarContainer = styled.View`
  height: ${HP(10)}px;
  width: ${HP(10)}px;
  border-radius: ${HP(10) / 2}px;
  align-items: center;
  justify-content: center;
  margin: ${HP(0.9)}px;
  align-self: flex-start;
  overflow: hidden;
`;
