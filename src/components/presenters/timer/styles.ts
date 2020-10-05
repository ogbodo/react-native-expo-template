import styled from 'styled-components/native';

export const Time = styled.Text`
  font-size: ${({ theme }) => theme.fonts.LARGE_SIZE}px;
  font-family: ${({ theme }) => theme.fonts.HELVETICA_NEUE_BOLD};
  text-align: center;
  margin: 0px auto 20px auto;
`;

export const ResendLabel = styled.Text`
  font-size: ${({ theme }) => theme.fonts.LARGE_SIZE + 3}px;
  font-family: ${({ theme }) => theme.fonts.HELVETICA_NEUE_BOLD};
  color: rgba(0, 0, 0, 0.7);
  text-decoration: underline;
  align-self: center;
  padding-bottom: 20px;
`;

export const Spinner = styled.View`
  align-self: center;
  padding-bottom: 20px;
`;
