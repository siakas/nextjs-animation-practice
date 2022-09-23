import { FC, ReactNode } from 'react'

import Footer from '@/components/Footer'
import Header from '@/components/Header'

interface Props {
  children: ReactNode
}

const DefaultLayout: FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default DefaultLayout
