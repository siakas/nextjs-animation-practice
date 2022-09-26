import Head from 'next/head'
import { FC } from 'react'

type Props = {
  url: string
  title: string
  description: string
}

const Meta: FC<Props> = ({ url, title, description }) => {
  return (
    <Head>
      <link rel="icon" href="/favicon.png" />
      <link rel="canonical" href={url} />
      <meta name="robots" content="noindex,nofollow" />
      <meta name="description" content={description} />
      <meta property="og:site_name" content="NETS-ANIM" />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="ja_JP" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <title>{title}</title>
    </Head>
  )
}

export default Meta
