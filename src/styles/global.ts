import { css } from '@emotion/react'

export const global = css`
  body {
    background: #fff;
    color: #333;
    font-size: 1rem;
    position: relative;
  }

  img,
  svg {
    max-width: 100%;
    vertical-align: bottom;
  }

  strong {
    font-weight: bold;
  }

  em {
    font-style: normal;
    font-weight: bold;
  }

  p {
    margin: 0;
    max-height: 100%;
  }

  hr {
    display: none;
  }

  main {
    display: block;
  }

  button {
    padding: 0;
    background: transparent;
    margin: 0;
    border: none;
    cursor: pointer;
  }

  [hidden] {
    display: none;
  }
`
