import styled from 'styled-components/native';
import {
  heightPercentageToDP as HP,
  widthPercentageToDP as WP
} from 'react-native-responsive-screen';

export const Container = styled.TouchableOpacity`
  padding: ${WP(2)}px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.BG_PRIMARY_COLOR};
  border-radius: ${HP(0.9)}px;
  width: ${WP(20)}px;
`;

export const ButtonText = styled.Text`
  font-size: ${({ theme }) => WP(theme.fonts.LARGE_SIZE - 12)}px;
  font-family: ${({ theme }) => theme.fonts.HELVETICA_NEUE_REGULAR};
  color: ${({ theme }) => theme.colors.BG_LIGHT_COLOR};
  text-transform: uppercase;
`;

export const Spinner = styled.View`
  align-self: center;
`;
