import { FC } from 'react'

import * as styles from './MainVisual.styles'

const MainVisual: FC = () => {
  return (
    <section css={styles.container}>
      <img css={styles.image} src="/assets/img/mv.jpg" alt="" />
      <div css={styles.catchcopy}>
        Lorem ipsum dolor,
        <br />
        consectetur adipisicing elit.
        <br />
        Numquam eum?
        <br />
        Neque debitis necessitatibus.
      </div>
    </section>
  )
}

export default MainVisual
