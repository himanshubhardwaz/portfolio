import type { NextPage } from 'next'
import type { ReactElement } from 'react'
import Layout from '@/components/Layout'
import Intro from '@/components/Intro'
import type { NextPageWithLayout } from './_app'

const Page: NextPageWithLayout = () => {
  return <Intro />
}

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default Page
