import { css } from '@emotion/react'

export const container = css`
  margin: 8rem 0 0;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;

  > .item {
    width: calc((100% - (40px * 3)) / 4);
  }
`
