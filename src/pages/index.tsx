import type { NextPage } from 'next'

import BannerInstagram from '@/components/BannerInstagram'
import CollectionList from '@/components/CollectionList'
import HeadingSection from '@/components/HeadingSection'
import MainContent from '@/components/MainContent'
import MainVisual from '@/components/MainVisual'
import NewsList from '@/components/NewsList'

import DefaultLayout from '@/layout/DefaultLayout'

const Home: NextPage = () => {
  return (
    <DefaultLayout>
      <MainVisual />
      <MainContent>
        <HeadingSection title="Collection" />
        <CollectionList />

        <HeadingSection title="News" />
        <NewsList />

        <HeadingSection title="Official Instagram" />
        <BannerInstagram />
      </MainContent>
    </DefaultLayout>
  )
}

export default Home
