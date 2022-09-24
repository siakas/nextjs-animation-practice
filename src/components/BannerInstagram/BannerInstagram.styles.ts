import { css } from '@emotion/react'

export const container = css`
  margin: 3rem 0 0;
`

export const link = css`
  display: block;
  position: relative;
  overflow: hidden;
  cursor: pointer;

  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(
      70% 80% at 30% 10%,
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0)
    );
    opacity: 0;
    z-index: 2;
    transform: scale(0.1);
    transform-origin: left top;
    transition: opacity 0.5s cubic-bezier(0.1, 0.45, 0.58, 1),
      transform 0s 0.5s ease-out;
  }

  &:hover {
    &::before {
      opacity: 1;
      transform: scale(3);
      transition: opacity 0.5s cubic-bezier(0.1, 0.45, 0.58, 1),
        transform 0.8s ease-out;
    }
  }
`
