import type { NextPage } from 'next'

import AboutItems from '@/components/AboutItems'
import AboutLead from '@/components/AboutLead'
import CategoryMv from '@/components/CategoryMv'
import HeadingSection from '@/components/HeadingSection'
import MainContent from '@/components/MainContent'

import DefaultLayout from '@/layout/DefaultLayout'

const Home: NextPage = () => {
  return (
    <DefaultLayout>
      <CategoryMv />
      <MainContent>
        <HeadingSection title="About Us" />
        <AboutLead />
        <AboutItems />
      </MainContent>
    </DefaultLayout>
  )
}

export default Home
