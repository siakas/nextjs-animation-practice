import { FC, ReactNode } from 'react'

import { motion } from 'framer-motion'

import Footer from '@/components/Footer'
import Header from '@/components/Header'
import ScrollPageUp from '@/components/ScrollPageUp'

interface Props {
  children: ReactNode
}

const DefaultLayout: FC<Props> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      <Header />
      <main>{children}</main>
      <ScrollPageUp />
      <Footer />
    </motion.div>
  )
}

export default DefaultLayout
