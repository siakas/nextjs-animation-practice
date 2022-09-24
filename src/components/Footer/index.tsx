import { FC } from 'react'

import * as styles from './Footer.styles'

const Footer: FC = () => {
  return (
    <footer css={styles.footer}>
      <div css={styles.inner}>
        <div css={styles.flex}>
          <div css={styles.col}>
            <ul css={styles.nav}>
              <li>
                <a>Home Page</a>
              </li>
              <li>
                <a>World</a>
              </li>
              <li>
                <a>Coronavirus</a>
              </li>
              <li>
                <a>U.S.</a>
              </li>
              <li>
                <a>Politics</a>
              </li>
              <li>
                <a>Business</a>
              </li>
              <li>
                <a>Science</a>
              </li>
              <li>
                <a>Wildfire Tracker</a>
              </li>
              <li>
                <a>Corrections</a>
              </li>
              <li>
                <a>Trending</a>
              </li>
            </ul>
          </div>
          <div css={styles.col}>
            <ul css={styles.nav}>
              <li>
                <a>Today&apos;s Opinion</a>
              </li>
              <li>
                <a>Columnists</a>
              </li>
              <li>
                <a>Editorials</a>
              </li>
              <li>
                <a>Letters</a>
              </li>
              <li>
                <a>Sunday Opinion</a>
              </li>
            </ul>
          </div>
          <div css={styles.col}>
            <ul css={styles.nav}>
              <li>
                <a>Automotive</a>
              </li>
              <li>
                <a>Games</a>
              </li>
              <li>
                <a>Education</a>
              </li>
              <li>
                <a>Food</a>
              </li>
              <li>
                <a>Jobs</a>
              </li>
              <li>
                <a>Parenting</a>
              </li>
              <li>
                <a>Style</a>
              </li>
            </ul>
          </div>
          <div css={styles.col}>
            <ul css={styles.nav}>
              <li>
                <a>Art &amp; Design</a>
              </li>
              <li>
                <a>Books</a>
              </li>
              <li>
                <a>Dance</a>
              </li>
              <li>
                <a>Movies</a>
              </li>
              <li>
                <a>Music</a>
              </li>
              <li>
                <a>Pop Culture</a>
              </li>
              <li>
                <a>Health</a>
              </li>
              <li>
                <a>Real Estate</a>
              </li>
              <li>
                <a>Travel</a>
              </li>
            </ul>
          </div>
          <div css={styles.col}>
            <ul css={styles.nav}>
              <li>
                <a>Reader Center</a>
              </li>
              <li>
                <a>The Athletic</a>
              </li>
              <li>
                <a>Wirecutter</a>
              </li>
              <li>
                <a>Cooking</a>
              </li>
              <li>
                <a>Podcasts</a>
              </li>
            </ul>
          </div>
        </div>
        <div css={styles.copyright}>
          Copyright © Lianport Innov Initiative, Inc. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
