import { css } from '@emotion/react'

export const container = css`
  margin: 3rem 0 0;

  > p {
    text-align: center;
    line-height: 1.9;
    font-family: 'Lato', sans-serif;
    font-size: 1.1rem;
    font-weight: 300;

    & + p {
      margin-top: 1.5rem;
    }
  }
`
