import { FC } from 'react'

import * as styles from './CollectionList.styles'

const CollectionList: FC = () => {
  return (
    <div css={styles.container}>
      <ul css={styles.list}>
        <li css={[styles.item, styles.large]}>
          <a css={styles.link} href="null">
            <img src="https://picsum.photos/id/10/415/640" alt="" />
          </a>
        </li>
        <li css={styles.item}>
          <a css={styles.link} href="null">
            <img src="https://picsum.photos/id/1000/415/300" alt="" />
          </a>
        </li>
        <li css={styles.item}>
          <a css={styles.link} href="null">
            <img src="https://picsum.photos/id/1001/415/300" alt="" />
          </a>
        </li>
        <li css={styles.item}>
          <a css={styles.link} href="null">
            <img src="https://picsum.photos/id/1002/415/300" alt="" />
          </a>
        </li>
        <li css={styles.item}>
          <a css={styles.link} href="null">
            <img src="https://picsum.photos/id/1003/415/300" alt="" />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default CollectionList
