import { css } from '@emotion/react'

export const header = css`
  width: 100%;
  position: fixed;
  top: 46px;
  left: 0;
  padding: 26px;
  z-index: 200;
  transition: background-color 0.3s 0.2s, top 0.2s ease-out;

  &.-scrolled {
    top: 0;
    background-color: rgba(255, 255, 255, 0.95);
  }

  > .inner {
    max-width: 1325px;
    width: 100%;
    margin: 0 auto;
  }
`

export const nav = css`
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  > li {
    &.-home {
      position: absolute;
      left: 0;

      svg {
        position: relative;
        top: -0.3em;
      }
    }

    > a {
      display: block;
      color: #fff;
      text-decoration: none;
      font-size: 1.2rem;
      font-weight: 300;
      padding: 1rem 1.5rem;
      font-family: 'Lato', sans-serif;
      position: relative;
      cursor: pointer;
      transition: color 0.3s 0.2s;

      .-scrolled & {
        color: #333;
      }

      &::after {
        content: '';
        display: block;
        height: 1px;
        background-color: #fff;
        position: absolute;
        bottom: 0.6rem;
        left: 50%;
        right: 50%;
        transition: all 0.2s ease;

        .-scrolled & {
          background-color: #333;
        }
      }

      &:hover {
        &::after {
          left: 1rem;
          right: 1rem;
        }
      }
    }
  }
`
