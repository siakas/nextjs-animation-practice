import Link from 'next/link'
import { FC } from 'react'

import { AiFillHome } from 'react-icons/ai'

import * as styles from './Header.styles'

const Header: FC = () => {
  return (
    <header css={styles.header}>
      <nav css={styles.inner}>
        <ul css={styles.nav}>
          <li css={styles.home}>
            <Link href="/">
              <a>
                <AiFillHome />
              </a>
            </Link>
          </li>
          <li>
            <Link href="/about/">
              <a>About</a>
            </Link>
          </li>
          <li>
            <a>Collection</a>
          </li>
          <li>
            <a>News</a>
          </li>
          <li>
            <a>Shop List</a>
          </li>
          <li>
            <a>Campaign</a>
          </li>
          <li>
            <a>Web Store</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
