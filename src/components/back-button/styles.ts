import styled from 'styled-components/native';
import applyScale from '../../utils/applyScale';

export const BackButton = styled.TouchableOpacity`
  width: ${applyScale(35)}px;
  height: ${applyScale(35)}px;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
`;
