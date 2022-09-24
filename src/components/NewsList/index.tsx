import { FC } from 'react'

import * as styles from './NewsList.styles'

const NewsList: FC = () => {
  return (
    <div css={styles.container}>
      <article css={styles.news}>
        <a href="null" css={styles.link}>
          <time css={styles.date} dateTime="2022-02-20">
            2022.02.20
          </time>
          <div css={styles.thumb}>
            <img src="/assets/img/top/news/01.jpg" alt="" />
          </div>
          <div css={styles.content}>
            <h2 css={styles.title}>Accusantium fuga non eligendi id ab</h2>
            <p css={styles.lead}>
              Error voluptatem eius illum consequatur, similique praesentium,
              voluptas blanditiis suscipit exercitationem molestiae magnam
            </p>
          </div>
        </a>
      </article>
      <article css={styles.news}>
        <a href="null" css={styles.link}>
          <time css={styles.date} dateTime="2022-02-19">
            2022.02.19
          </time>
          <div css={styles.thumb}>
            <img src="/assets/img/top/news/02.jpg" alt="" />
          </div>
          <div css={styles.content}>
            <h2 css={styles.title}>
              Quis nam praesentium eum adipisci asperiores
            </h2>
            <p css={styles.lead}>
              Ratione atque quia expedita voluptas voluptatum esse iure. Quae,
              mollitia
            </p>
          </div>
        </a>
      </article>
      <article css={styles.news}>
        <a href="null" css={styles.link}>
          <time css={styles.date} dateTime="2022-02-16">
            2022.02.16
          </time>
          <div css={styles.thumb}>
            <img src="/assets/img/top/news/03.jpg" alt="" />
          </div>
          <div css={styles.content}>
            <h2 css={styles.title}>Pariatur cum enim sed</h2>
            <p css={styles.lead}>
              Soluta eaque nihil voluptate inventore temporibus aliquam,
              adipisci accusantium odit
            </p>
          </div>
        </a>
      </article>
      <article css={styles.news}>
        <a href="null" css={styles.link}>
          <time css={styles.date} dateTime="2022-02-10">
            2022.02.10
          </time>
          <div css={styles.thumb}>
            <img src="/assets/img/top/news/04.jpg" alt="" />
          </div>
          <div css={styles.content}>
            <h2 css={styles.title}>Sequi, nemo modi, officia ipsum fugiat</h2>
            <p css={styles.lead}>
              Illum minima eos sint cum debitis quia autem. Numquam officia
              repudiandae
            </p>
          </div>
        </a>
      </article>
    </div>
  )
}

export default NewsList
