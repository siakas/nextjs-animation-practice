import { FC } from 'react'

import * as styles from './BannerInstagram.styles'

const BannerInstagram: FC = () => {
  return (
    <div css={styles.container}>
      <a css={styles.link}>
        <img src="/assets/img/top/banner/instagram.jpg" alt="" />
      </a>
    </div>
  )
}

export default BannerInstagram
