import type { NextPage } from 'next'

import { pages } from '@/data/sheets.json'
import DefaultLayout from '@/layout/DefaultLayout'

import AboutItemList from '@/components/AboutItemList'
import AboutLead from '@/components/AboutLead'
import CategoryMv from '@/components/CategoryMv'
import HeadingSection from '@/components/HeadingSection'
import MainContent from '@/components/MainContent'
import Meta from '@/components/Meta'
import MotionFadeInUp from '@/components/MotionFadeInUp'

const About: NextPage = () => {
  const pageMeta = pages.about

  return (
    <DefaultLayout>
      <Meta {...pageMeta} />

      <CategoryMv category="about" />

      <MainContent>
        <MotionFadeInUp>
          <HeadingSection title="About Us" />
          <AboutLead />
        </MotionFadeInUp>

        <MotionFadeInUp>
          <AboutItemList />
        </MotionFadeInUp>
      </MainContent>
    </DefaultLayout>
  )
}

export default About
