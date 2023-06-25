import styled, { DefaultTheme, css } from "styled-components";

import { ButtonProps } from ".";

type ButtonType = Pick<ButtonProps, "variant">;

const buttonModifiers = {
  primary: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.primary["500"]};
  `,
  secondary: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.secondary["500"]};
  `,
};

export const Button = styled.button<ButtonType>`
  ${({ theme, variant }) => css`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border: none;
    text-decoration: none;
    cursor: pointer;
    border-radius: 10px;
    background-color: ${theme.colors.primary["500"]};
    padding: 16px 24px;
    color: ${theme.colors.neutral["100"]};

    ${!!variant && buttonModifiers[variant](theme)};
  `}
`;
