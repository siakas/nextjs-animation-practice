import { FC, ReactNode } from 'react'

import * as styles from './MainContent.styles'

interface Props {
  children: ReactNode
}

const MainContent: FC<Props> = ({ children }) => {
  return <div css={styles.container}>{children}</div>
}

export default MainContent
