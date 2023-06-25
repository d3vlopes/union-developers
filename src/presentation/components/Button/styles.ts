import styled, { css } from "styled-components";

export const Button = styled.button`
  ${({ theme }) => css`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border: none;
    text-decoration: none;
    cursor: pointer;
    border-radius: 10px;
    background-color: ${theme.colors.primary["500"]};
    padding: 16px 24px;
  `}
`;
