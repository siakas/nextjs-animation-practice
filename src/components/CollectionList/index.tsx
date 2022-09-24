import { FC } from 'react'

import * as styles from './CollectionList.styles'

const CollectionList: FC = () => {
  return (
    <div css={styles.container}>
      <div css={styles.list}>
        <div css={[styles.item, styles.large]}>
          <a css={styles.link}>
            <img src="/assets/img/top/collection/01.jpg" alt="" />
          </a>
        </div>
        <div css={styles.item}>
          <a css={styles.link}>
            <img src="/assets/img/top/collection/02.jpg" alt="" />
          </a>
        </div>
        <div css={styles.item}>
          <a css={styles.link}>
            <img src="/assets/img/top/collection/03.jpg" alt="" />
          </a>
        </div>
        <div css={styles.item}>
          <a css={styles.link}>
            <img src="/assets/img/top/collection/04.jpg" alt="" />
          </a>
        </div>
        <div css={styles.item}>
          <a css={styles.link}>
            <img src="/assets/img/top/collection/05.jpg" alt="" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default CollectionList
