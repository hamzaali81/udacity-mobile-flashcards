import styled from 'styled-components/native';

export const Text = styled.Text`
  font-size: ${props => props.size};
  color: ${props => props.color};
`;

export const ContentWrapperCenter = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const ContentTextWrapperCenter = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;
