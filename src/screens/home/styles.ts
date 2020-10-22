import styled from 'styled-components/native';
import {
  widthPercentageToDP as WP,
  heightPercentageToDP as HP
} from 'react-native-responsive-screen';

import Constants from 'expo-constants';
import applyScale from '../../utils/applyScale';
import { borderWidthValue, borderRadiusWidthValue } from '../../utils';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.BG_LIGHT_COLOR};
  padding-top: ${Constants.statusBarHeight + applyScale(10)}px;
`;

export const ContentArea = styled.ScrollView``;

export const Text = styled.Text`
  font-size: ${({ theme }) => WP(theme.fonts.LARGE_SIZE - 11)}px;
  font-family: ${({ theme }) => theme.fonts.HELVETICA_NEUE_REGULAR};
  color: ${({ theme }) => theme.colors.BD_DARK_COLOR};
  margin: ${WP(2)}px;
`;

export const AvatarContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin: ${WP(2)}px;
  border-width: ${HP(borderWidthValue)}px;
  border-radius: ${WP(borderRadiusWidthValue)}px;
  border-color: ${({ theme }) => theme.colors.BG_SHADOW_COLOR};
`;

export const OnlineIcon = styled.View`
  height: ${HP(1.6)}px;
  width: ${HP(1.6)}px;
  border-radius: ${HP(1.6) / 2}px;
  background-color: ${({ theme }) => theme.colors.BG_GREEN_COLOR};
  margin-left: ${-HP(1.2)}px;
  margin-top: ${HP(2.3)}px;
`;
