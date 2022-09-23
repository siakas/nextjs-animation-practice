import { css } from '@emotion/react'

export const footer = css`
  background-color: #323334;
  font-family: 'Lato', sans-serif;
`

export const inner = css`
  max-width: 1325px;
  width: 100%;
  margin: 0 auto;
  padding: 2rem 0;
`

export const flex = css`
  display: flex;
  justify-content: space-between;
`

export const col = css`
  flex: 1;
`

export const nav = css`
  margin: 0;
  padding: 0;
  font-size: 0.9rem;

  > li {
    & + li {
      margin-top: 0.3rem;
    }

    > a {
      color: #fff;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`

export const copyright = css`
  margin: 1.5rem 0 0;
  padding: 1rem 0 0;
  border-top: 1px solid #626364;
  color: #fff;
  text-align: center;
  font-size: 0.8rem;
`
