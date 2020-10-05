import styled from 'styled-components/native';
import Constants from 'expo-constants';
import applyScale from '../../utils/applyScale';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.BG_LIGHT_COLOR};
  padding-top: ${Constants.statusBarHeight + applyScale(10)}px;
`;

export const ContentArea = styled.ScrollView``;

export const Welcome = styled.Text`
  font-size: ${({ theme }) => theme.fonts.LARGE_SIZE}px;
  font-family: ${({ theme }) => theme.fonts.HELVETICA_NEUE_REGULAR};
  color: ${({ theme }) => theme.colors.BD_DARK_COLOR};
  text-transform: capitalize;
`;
