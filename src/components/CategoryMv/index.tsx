import { FC } from 'react'

import * as styles from './CategoryMv.styles'

const CategoryMv: FC = () => {
  return (
    <div css={styles.container}>
      <img
        css={styles.image}
        src="https://picsum.photos/id/112/2600/800"
        alt=""
      />
    </div>
  )
}

export default CategoryMv
