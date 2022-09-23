import { FC } from 'react'

import * as styles from './Header.styles'

const Header: FC = () => {
  return (
    <header css={styles.header}>
      <nav css={styles.inner}>
        <ul css={styles.nav}>
          <li>
            <a href="null">About</a>
          </li>
          <li>
            <a href="null">Collection</a>
          </li>
          <li>
            <a href="null">Shop List</a>
          </li>
          <li>
            <a href="null">Campaign</a>
          </li>
          <li>
            <a href="null">Web Store</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
