import { css } from '@emotion/react'

export const container = css`
  position: relative;
  width: 100%;
  min-width: 1040px;
  height: calc(100vh - 26px);
  min-height: 500px;
  padding: 26px 26px 0;
  margin: 0 auto 120px;
  position: relative;
`

export const image = css`
  width: 100%;
  max-width: 100%;
  height: 100%;
  vertical-align: bottom;
  object-fit: cover;
`
export const catchcopy = css`
  position: absolute;
  left: 5rem;
  bottom: 6rem;
  color: #fff;
  font-size: clamp(1.5rem, 1.15rem + 1.6vw, 3.75rem);
  line-height: 1.2;
  font-weight: bold;
  letter-spacing: -0.02em;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
  font-family: 'Lato', sans-serif;
`
