import { FC } from 'react'

import * as styles from './Collection.styles'

const Collection: FC = () => {
  return (
    <div css={styles.item}>
      <a className="link">
        <img
          className="img"
          src="/assets/img/top/collection/02.jpg"
          alt=""
          loading="lazy"
        />
      </a>
    </div>
  )
}

export default Collection
