import type { NextPage } from 'next'
import type { ReactElement } from 'react'
import Layout from '@/components/Layout'
import type { NextPageWithLayout } from './_app'
import Image from 'next/image'

const Page: NextPageWithLayout = () => {
    return (
        <div className="h-screen w-screen text-center">
            <div className='max-w-[1240px] w-full mx-auto p-2 flex justify-center items-center h-full'>
                <p className='text-4xl'>
                    Hi, I&#39; m Himanshu Bhardwaz, I&#39; m a full time software Engineer.
                    I Specialize in frontend but I never shy away from learning new stuff.
                </p>
            </div>
        </div>
    )
}

Page.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}

export default Page
