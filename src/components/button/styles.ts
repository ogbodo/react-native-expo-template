import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  padding: 20px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.BG_PRIMARY_COLOR};
  border-radius: 5px;
`;

export const ButtonText = styled.Text`
  font-size: ${({ theme }) => theme.fonts.MEDIUM_SIZE - 4}px;
  font-family: ${({ theme }) => theme.fonts.HELVETICA_NEUE_REGULAR};
  color: ${({ theme }) => theme.colors.BG_LIGHT_COLOR};
  text-transform: uppercase;
`;

export const Spinner = styled.View`
  align-self: center;
`;
