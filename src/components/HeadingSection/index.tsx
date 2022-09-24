import { FC } from 'react'

import * as styles from './HeadingSection.styles'

interface Props {
  id?: string
  title: string
}

const HeadingSection: FC<Props> = ({ id, title }) => {
  return (
    <h2 id={id} css={styles.hdg}>
      {title}
    </h2>
  )
}

export default HeadingSection
