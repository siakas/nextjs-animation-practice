import { FC, useEffect, useState } from 'react'

import { HiOutlineChevronUp } from 'react-icons/hi'
import { Link as Scroll } from 'react-scroll'

import * as styles from './ScrollPageUp.styles'

const ScrollPageUp: FC = () => {
  // スクロールによるコンポーネントの表示切り替え
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 200) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div css={styles.container} className={`${scrolled ? '-scrolled' : ''}`}>
      <Scroll to="root" smooth="easeOutCubic" duration={500} offset={-115}>
        <HiOutlineChevronUp />
      </Scroll>
    </div>
  )
}

export default ScrollPageUp
