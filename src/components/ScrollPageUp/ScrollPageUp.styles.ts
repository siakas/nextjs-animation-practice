import { css } from '@emotion/react'

export const container = css`
  margin: 0;
  position: sticky;
  right: 0;
  bottom: 26px;
  display: flex;
  justify-content: flex-end;
  margin: 0 26px 26px 0;
  opacity: 0;
  transition: opacity 0.3s;

  &.-scrolled {
    opacity: 1;
  }

  > a {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #333;
    padding: 0.8rem;
    border-radius: 50%;
    color: #333;
    transition: opacity 0.2s;
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }

    > svg {
      width: 1.6rem;
      height: 1.6rem;
    }
  }
`
