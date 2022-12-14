import { FC } from 'react'

import * as styles from './CategoryMv.styles'

type Props = {
  category: string
}

const CategoryMv: FC<Props> = ({ category }) => {
  return (
    <div css={styles.container}>
      <img
        css={styles.image}
        src={`/assets/img/${category}/mv.jpg`}
        alt=""
        loading="lazy"
      />
    </div>
  )
}

export default CategoryMv
