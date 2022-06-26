/* eslint-disable @next/next/no-img-element */
import type { ReactElement } from 'react'
import Layout from '@/components/Layout'
import type { NextPageWithLayout } from './_app'
import Link from 'next/link'

const AboutPage: NextPageWithLayout = () => {
    return (
        <div id='about' className='w-full md:h-screen p-2 flex items-center py-24'>
            <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
                <div className='col-span-2'>
                    <p className='uppercase text-xl tracking-widest text-red-500'>
                        About
                    </p>
                    <h2 className='py-4'>Who I Am</h2>
                    <p className='py-2'>
                        / / I am not your regular everyday normal Software Developer.
                    </p>
                    <p className='py-2'>
                        Fascinated with how intricate programming can be I was quickly drawn
                        to learn more. I started my programming journey just before I went to college. I began
                        with python got bored with it, then tried my hands on android development,
                        again didn&#39;t worked out great. After that I started with node.js and
                        from there i fell in love with javascript, I reached a fairly decent level
                        with nodejs and also started exploring Frontend.
                    </p>
                    <p className='py-2'>
                        After that I did quite a few internships as a frontend developer and full stack engineer
                        where my tech stack normally included react.js and node.js.
                        I am currently working as a SDE Intern {" "}
                        <a
                            href='https://saaslabs.co'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <span className="underline">@saaslabs</span>,
                        </a>{" "} where I am building new products from scratch.
                        These days, I usually spend my time building projects with React JS,
                        NextJS, Node.js and learning other new technologies.
                    </p>
                    <Link href='/projects'>
                        <p className='py-2 underline cursor-pointer'>
                            Check out some of my latest projects.
                        </p>
                    </Link>
                </div>
                <div className='w-full h-auto m-auto rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                    <img src='/images/about-sec.webp' className='rounded-xl' alt='/' />
                </div>
            </div>
        </div>
    )
}

AboutPage.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}

export default AboutPage
