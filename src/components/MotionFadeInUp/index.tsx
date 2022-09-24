import { FC, ReactNode, useEffect } from 'react'

import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import { fadeInUp } from '@/animations/variants'

interface Props {
  children: ReactNode
}

const MotionFadeInUp: FC<Props> = ({ children }) => {
  const controls = useAnimation()
  const { ref, inView } = useInView({
    threshold: 0.25,
    triggerOnce: true,
  })

  useEffect(() => {
    controls.start(inView ? 'visible' : 'hidden')
  }, [controls, inView])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={fadeInUp}
    >
      {children}
    </motion.div>
  )
}

export default MotionFadeInUp
