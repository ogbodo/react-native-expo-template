import styled from 'styled-components/native';
import applyScale from '../../utils/applyScale';

export const TopContainer = styled.View`
  border: 0.8px;
  border-color: ${({ theme }) => theme.colors.INACTIVE_FIELD_COLOR_LOW_OPACITY};
  height: ${applyScale(45)}px;
  justify-content: center;
  border-radius: 5px;
`;
export const Container = styled.View`
  flex-direction: row;
  margin: 20px;
`;

export const TextInput = styled.TextInput`
  flex: 2;
  font-size: ${({ theme }) => theme.fonts.MEDIUM_SIZE + 1}px;
  font-family: ${({ theme }) => theme.fonts.HELVETICA_NEUE_REGULAR};
  margin-left: 15px;
`;

export const PasswordFieldContainer = styled.View`
  flex-direction: row;
`;

export const EyeContainer = styled.TouchableOpacity`
  width: 17px;
  height: 17px;
  align-self: center;
`;
