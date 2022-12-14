import Link from 'next/link'
import { FC, useEffect, useState } from 'react'

import { AiFillHome } from 'react-icons/ai'
import { Link as Scroll } from 'react-scroll'

import * as styles from './Header.styles'

const Header: FC = () => {
  // スクロールによるヘッダ固定
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = (): any => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollSettings = {
    smooth: 'easeOutCubic',
    duration: 500,
    offset: -115,
  }

  return (
    <header css={styles.header} className={`${scrolled ? '-scrolled' : ''}`}>
      <nav className="inner">
        <ul css={styles.nav}>
          <li className="-home">
            <Link href="/" scroll={false}>
              <a>
                <AiFillHome />
              </a>
            </Link>
          </li>
          <li>
            <Link href="/about/" scroll={false}>
              <a>About</a>
            </Link>
          </li>
          <li>
            <Scroll to="collection" {...scrollSettings}>
              Collection
            </Scroll>
          </li>
          <li>
            <Scroll to="news" {...scrollSettings}>
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
