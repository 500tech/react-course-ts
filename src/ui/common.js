import styled from 'styled-components';

export const RudeButton = styled.button`
  :disabled {
    opacity: 0;
  }
`;

export const Page = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.colors.bgColor};
`;

export const Title = styled.h1`
  background-color: yellow;
  margin: 0;
  text-decoration: underline;
  color: ${props => props.theme.colors.primary};
`;
