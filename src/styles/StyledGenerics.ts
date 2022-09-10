import styled, { css } from "styled-components";

export const Button = styled.button<{ isSmall?: boolean }>`
  background-color: var(--color-button-bg);
  color: var(--color-button-text);
  padding: 0.5rem 1.25rem;
  line-height: 1;
  font-size: 1rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  font-weight: 500;
  border: none;
  cursor: pointer;
  transition: all 0.15s ease-in-out;
  opacity: 1;

  &:hover,
  &:focus {
    opacity: 0.8;
  }

  &:disabled,
  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }

  ${(props) =>
    props.isSmall
      ? css`
          font-size: 0.75rem;
          padding: 0.25rem 0.5rem;
          text-transform: unset;
        `
      : css``}
`;
