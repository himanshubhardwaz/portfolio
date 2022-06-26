import type { ReactElement } from 'react'
import Layout from '@/components/Layout'
import type { NextPageWithLayout } from './../_app'
import Image from 'next/image'
import { RiRadioButtonFill } from 'react-icons/ri'
import Link from 'next/link'
import Button from '@/components/Button'
import { useRouter } from 'next/router'

const DialworksPage: NextPageWithLayout = () => {
    const router = useRouter();

    const redirect = (path: string) => {
        router.push(path);
    }

    return (
        <div className='w-full h-screen'>
            <div className='w-screen h-[50vh] relative'>
                <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
                <Image
                    className='absolute z-1'
                    layout='fill'
                    objectFit='cover'
                    src='/images/projects/dialworks.png'
                    alt='/'
                />
                <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                    <h2 className='py-2 flex gap-2'><span>
                        <Link href='/projects'>
                            <p className='cursor-pointer'>Projects {`>`}</p>
                        </Link>
                    </span>Dialworks</h2>
                    <h3>React JS / Antd / React Query / Redux / Node.js</h3>
                </div>
            </div>

            <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-4'>
                <div className='col-span-4'>
                    <p>Project</p>
                    <h2>Overview</h2>
                    <p>

                        An end-to-end platform for Sales Representatives, which will allow them to upskill, train and hire future Salespersons for themselves and their company.
                        This is one of my first serious project which i am working on while working as an SDE Intern{" "}
                        <span onClick={() => { redirect('https://saaslabs.co') }} className="cursor-pointer">
                            @SaasLabs.
                        </span>{" "}

                    </p>
                    <Button onClick={() => redirect('https://dialworks.io')} className="my-3">Demo</Button>

                </div>
                <div className='col-span-4 md:col-span-1 rounded-xl py-4'>
                    <div className='p-2'>
                        <p className='font-bold pb-2'>Technologies</p>
                        <div className='grid grid-cols-3 md:grid-cols-1 '>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> React
                            </p>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> Antd
                            </p>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> Javascript
                            </p>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> React Query
                            </p>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> Redux (Rtk toolkit)
                            </p>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> Node.js
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div >
    )
}

DialworksPage.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}

export default DialworksPage
