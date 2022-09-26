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

  .mySwiper {
    max-height: 100%;

    .swiper-pagination {
      bottom: 20px;
    }

    .swiper-pagination-bullet {
      border-radius: 0;
      height: 3px;
      width: 80px;
      background-color: #000;
      opacity: 0.6;

      &.swiper-pagination-bullet-active {
        background-color: rgba(255, 255, 255, 0.7);
        opacity: 1;
        transform-origin: 0% 0%;
        animation: progress 5s linear 0s 1 normal forwards;
      }
    }
  }

  @keyframes progress {
    0% {
      transform: scaleX(0);
    }
    100% {
      transform: scaleX(1);
    }
  }
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
  z-index: 10;
  color: #fff;
  font-size: clamp(1.5rem, 1.15rem + 1.6vw, 3.75rem);
  line-height: 1.2;
  font-weight: 900;
  letter-spacing: -0.02em;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
  font-family: 'Lato', sans-serif;
`
