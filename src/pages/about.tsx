import type { NextPage } from 'next'

import { aboutItems } from '@/data/sheets.json'

import AboutItemList from '@/components/AboutItemList'
import AboutLead from '@/components/AboutLead'
import CategoryMv from '@/components/CategoryMv'
import HeadingSection from '@/components/HeadingSection'
import MainContent from '@/components/MainContent'

import DefaultLayout from '@/layout/DefaultLayout'

const Home: NextPage = () => {
  return (
    <DefaultLayout>
      <CategoryMv category="about" />
      <MainContent>
        <HeadingSection title="About Us" />
        <AboutLead />
        <AboutItemList items={aboutItems} />
      </MainContent>
    </DefaultLayout>
  )
}

export default Home
