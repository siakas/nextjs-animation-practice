import type { NextPage } from 'next'

import BannerInstagram from '@/components/BannerInstagram'
import CollectionList from '@/components/CollectionList'
import HeadingSection from '@/components/HeadingSection'
import MainContent from '@/components/MainContent'
import MainVisual from '@/components/MainVisual'
import MotionFadeInUp from '@/components/MotionFadeInUp'
import NewsList from '@/components/NewsList'

import DefaultLayout from '@/layout/DefaultLayout'

const Home: NextPage = () => {
  return (
    <DefaultLayout>
      <MainVisual />
      <MainContent>
        <MotionFadeInUp>
          <HeadingSection id="collection" title="Collection" />
          <CollectionList />
        </MotionFadeInUp>

        <MotionFadeInUp>
          <HeadingSection id="news" title="News" />
          <NewsList />
        </MotionFadeInUp>

        <MotionFadeInUp>
          <HeadingSection title="Official Instagram" />
          <BannerInstagram />
        </MotionFadeInUp>
      </MainContent>
    </DefaultLayout>
  )
}

export default Home
