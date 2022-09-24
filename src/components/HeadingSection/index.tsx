import { FC } from 'react'

import * as styles from './HeadingSection.styles'

interface Props {
  title: string
}

const HeadingSection: FC<Props> = ({ title }) => {
  return <h2 css={styles.hdg}>{title}</h2>
}

export default HeadingSection
