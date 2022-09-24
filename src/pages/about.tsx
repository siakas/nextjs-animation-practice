import type { NextPage } from 'next'

import { aboutItems } from '@/data/sheets.json'

import AboutItemList from '@/components/AboutItemList'
import AboutLead from '@/components/AboutLead'
import CategoryMv from '@/components/CategoryMv'
import HeadingSection from '@/components/HeadingSection'
import MainContent from '@/components/MainContent'
import MotionFadeInUp from '@/components/MotionFadeInUp'

import DefaultLayout from '@/layout/DefaultLayout'

const Home: NextPage = () => {
  return (
    <DefaultLayout>
      <CategoryMv category="about" />
      <MainContent>
        <MotionFadeInUp>
          <HeadingSection title="About Us" />
          <AboutLead />
        </MotionFadeInUp>

        <AboutItemList items={aboutItems} />
      </MainContent>
    </DefaultLayout>
  )
}

export default Home
