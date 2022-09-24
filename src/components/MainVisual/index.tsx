import { FC } from 'react'

import { EffectFade, Pagination, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import * as styles from './MainVisual.styles'

import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'

const MainVisual: FC = () => {
  return (
    <section css={styles.container}>
      <Swiper
        effect="fade"
        speed={500}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false, // ユーザの操作後に自動再生が止まってしまうのを無効化
        }}
        modules={[EffectFade, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            css={styles.image}
            src="/assets/img/top/mv/01.jpg"
            alt=""
            loading="lazy"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            css={styles.image}
            src="/assets/img/top/mv/02.jpg"
            alt=""
            loading="lazy"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            css={styles.image}
            src="/assets/img/top/mv/03.jpg"
            alt=""
            loading="lazy"
          />
        </SwiperSlide>
      </Swiper>
      {/* <img
        css={styles.image}
        src="/assets/img/top/mv/02.jpg"
        alt=""
        loading="lazy"
      /> */}
      {/* <Slider {...slickSettings}>
        <div>
          <img css={styles.image} src="/assets/img/top/mv/01.jpg" alt="" />
        </div>
        <div>
          <img css={styles.image} src="/assets/img/top/mv/02.jpg" alt="" />
        </div>
        <div>
          <img css={styles.image} src="/assets/img/top/mv/03.jpg" alt="" />
        </div>
      </Slider> */}
      <div css={styles.catchcopy}>
        Lorem ipsum dolor,
        <br />
        consectetur adipisicing elit.
        <br />
        Numquam eum?
        <br />
        Neque debitis necessitatibus.
      </div>
    </section>
  )
}

export default MainVisual
