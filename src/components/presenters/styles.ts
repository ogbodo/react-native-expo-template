import styled from 'styled-components/native';
import { theme } from '../../theme/types';

export const Container = styled.ScrollView`
  flex: 1;
  padding: 15px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.HELVETICA_NEUE_BOLD};
  color: ${({ theme }) => theme.colors.BD_DARK_COLOR};
  font-size: 30px;
  margin-top: 50px;
  text-transform: uppercase;
`;

export const Subtitle = styled.Text`
  width: 80%;
  font-size: ${({ theme }) => theme.fonts.LARGE_SIZE + 5}px;
  font-family: ${({ theme }) => theme.fonts.HELVETICA_NEUE_REGULAR};
  color: ${({ theme }) => theme.colors.BD_DARK_COLOR};
  opacity: 0.7;
  margin: 20px 0px;
  margin-bottom: 40px;
`;

export const ButtonStyle = {
  mainButton: { width: '100%', height: 60 },
  textStyle: {
    fontFamily: theme.fonts.HELVETICA_NEUE_REGULAR,
    fontSize: theme.fonts.LARGE_SIZE + 3,
    textTransform: 'none'
  }
};
