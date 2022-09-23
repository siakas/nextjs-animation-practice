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
                <a href="null">Home Page</a>
              </li>
              <li>
                <a href="null">World</a>
              </li>
              <li>
                <a href="null">Coronavirus</a>
              </li>
              <li>
                <a href="null">U.S.</a>
              </li>
              <li>
                <a href="null">Politics</a>
              </li>
              <li>
                <a href="null">Business</a>
              </li>
              <li>
                <a href="null">Science</a>
              </li>
              <li>
                <a href="null">Wildfire Tracker</a>
              </li>
              <li>
                <a href="null">Corrections</a>
              </li>
              <li>
                <a href="null">Trending</a>
              </li>
            </ul>
          </div>
          <div css={styles.col}>
            <ul css={styles.nav}>
              <li>
                <a href="null">Today&apos;s Opinion</a>
              </li>
              <li>
                <a href="null">Columnists</a>
              </li>
              <li>
                <a href="null">Editorials</a>
              </li>
              <li>
                <a href="null">Letters</a>
              </li>
              <li>
                <a href="null">Sunday Opinion</a>
              </li>
            </ul>
          </div>
          <div css={styles.col}>
            <ul css={styles.nav}>
              <li>
                <a href="null">Automotive</a>
              </li>
              <li>
                <a href="null">Games</a>
              </li>
              <li>
                <a href="null">Education</a>
              </li>
              <li>
                <a href="null">Food</a>
              </li>
              <li>
                <a href="null">Jobs</a>
              </li>
              <li>
                <a href="null">Parenting</a>
              </li>
              <li>
                <a href="null">Style</a>
              </li>
            </ul>
          </div>
          <div css={styles.col}>
            <ul css={styles.nav}>
              <li>
                <a href="null">Art &amp; Design</a>
              </li>
              <li>
                <a href="null">Books</a>
              </li>
              <li>
                <a href="null">Dance</a>
              </li>
              <li>
                <a href="null">Movies</a>
              </li>
              <li>
                <a href="null">Music</a>
              </li>
              <li>
                <a href="null">Pop Culture</a>
              </li>
              <li>
                <a href="null">Health</a>
              </li>
              <li>
                <a href="null">Real Estate</a>
              </li>
              <li>
                <a href="null">Travel</a>
              </li>
            </ul>
          </div>
          <div css={styles.col}>
            <ul css={styles.nav}>
              <li>
                <a href="null">Reader Center</a>
              </li>
              <li>
                <a href="null">The Athletic</a>
              </li>
              <li>
                <a href="null">Wirecutter</a>
              </li>
              <li>
                <a href="null">Cooking</a>
              </li>
              <li>
                <a href="null">Podcasts</a>
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
