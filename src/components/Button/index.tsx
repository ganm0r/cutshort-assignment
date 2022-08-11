import React from 'react';
import styled from 'styled-components';
import colors from 'theme/constants/colors';
// import typography from 'theme/constants/typography';

const StyledButton = styled.button`
  background-color: ${colors.purple};
  font-size: 18px;
  box-sizing: border-box;
  color: ${colors.white};
  padding: 16px;
  outline: none;
  border-radius: 6px;
  cursor: pointer;
  margin-top: 2%;
  border: none;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    transfrom: scale(0.98);
  }
`;

interface ButtonProps {
  children: React.ReactNode;
  type: 'button' | 'submit' | 'reset' | undefined;
}

function Button({ children, type }: ButtonProps): JSX.Element {
  return (
    <StyledButton type={type}>
      {children}
    </StyledButton>
  );
}

export default Button;
