import { FC } from 'react'

import * as styles from './AboutItem.styles'

interface Props {
  file: string
}

const AboutItem: FC<Props> = ({ file }) => {
  return (
    <div css={styles.item}>
      <img src={`/assets/img/about/items/${file}`} alt="" loading="lazy" />
    </div>
  )
}

export default AboutItem
