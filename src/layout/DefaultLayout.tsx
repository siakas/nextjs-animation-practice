import { FC, ReactNode } from 'react'

import Footer from '@/components/Footer'
import Header from '@/components/Header'
import ScrollPageUp from '@/components/ScrollPageUp'

interface Props {
  children: ReactNode
}

const DefaultLayout: FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <ScrollPageUp />
      <Footer />
    </>
  )
}

export default DefaultLayout
