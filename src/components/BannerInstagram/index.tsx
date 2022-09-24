import { FC } from 'react'

import * as styles from './BannerInstagram.styles'

const BannerInstagram: FC = () => {
  return (
    <div css={styles.container}>
      <a css={styles.link} href="null">
        <img src="https://picsum.photos/id/20/1325/360" alt="" />
      </a>
    </div>
  )
}

export default BannerInstagram
