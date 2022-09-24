import Link from 'next/link'
import { FC, useEffect, useState } from 'react'

import { AiFillHome } from 'react-icons/ai'
import { Link as Scroll } from 'react-scroll'

import * as styles from './Header.styles'

const Header: FC = () => {
  // スクロールによるヘッダ固定
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header css={styles.header} className={`${scrolled ? '-scrolled' : ''}`}>
      <nav className="inner">
        <ul css={styles.nav}>
          <li className="-home">
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
            <Scroll
              to="collection"
              smooth="easeOutCubic"
              duration={500}
              offset={-115}
            >
              Collection
            </Scroll>
          </li>
          <li>
            <Scroll
              to="news"
              smooth="easeOutCubic"
              duration={500}
              offset={-115}
            >
              News
            </Scroll>
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
