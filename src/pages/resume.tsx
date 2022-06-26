import type { ReactElement } from 'react'
import Layout from '@/components/Layout'
import type { NextPageWithLayout } from './_app'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { useRouter } from 'next/router'
import Button from '@/components/Button'

const ResumePage: NextPageWithLayout = () => {
    const router = useRouter();

    const redirect = (path: string) => {
        router.push(path);
    }

    const downloadResume = () => {

    }

    return (
        <div className='max-w-[940px] mx-auto p-2 py-24'>
            <h2 className='text-center'>Resume</h2>
            <div className='bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center'>
                <p className='text-center text-xl text-myGray'>Himanshu Bhardwaz</p>
                <div className='flex'>
                    <a
                        href='https://www.linkedin.com/in/himanshubhardwaz/'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <FaLinkedinIn size={20} style={{ marginRight: '1rem', color: 'black' }} />
                    </a>
                    <a
                        href='https://github.com/himanshubhardwaz'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <FaGithub size={20} style={{ marginRight: '1rem', color: 'black' }} />
                    </a>
                </div>
            </div>
            <div className='text-center py-4 text-xl font-bold uppercase tracking-wider'>
                <div className='hidden sm:block'>
                    <p>
                        Full Stack Web Developer
                    </p>
                </div>
            </div>
            {/* Skills */}
            <div className='text-center py-4'>
                <h5 className='text-center underline text-[18px] py-2'>Skills</h5>
                <p className='py-2'>
                    <span className='font-bold'>Technical Skills</span>
                    <span className='px-2'>|</span>Full Stack Web Developer
                    <span className='px-2'>|</span> HTML <span className='px-2'>|</span>
                    CSS
                    <span className='px-2'>|</span> Tailwind
                    <span className='px-2'>|</span>React
                    <span className='px-2'>|</span> Redux (Rtk toolkit, saga, thunk)
                    <span className='px-2'>|</span> Next.js
                    <span className='px-2'>|</span> TypeScript
                    <span className='px-2'>|</span> Node.js

                </p>
            </div>

            <h5 className='text-center underline text-[18px] py-4'>
                Professional Experience
            </h5>
            {/* Experience */}
            <div className='py-6'>
                <p className='italic'>
                    <span className='font-bold italic'>
                        Saaslabs US Inc
                    </span>
                    <span className='px-2'>|</span>Palo Alto California
                </p>
                <p className='py-1 italic'>SDE Intern (August 2021 - current)</p>
                <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
                    <li>
                        Responsible for development of two separate web applications using React.js from scratch.
                    </li>
                    <li>
                        Boosted application performance by 15% following best practices such as lazy-loading, infinite-scroll, debounce,
                        code splitting and other performance optimisations.
                    </li>
                    <li>
                        Designed and develop a matchmaking algorithm using socket.io and Twilio.
                    </li>
                    <li>
                        Contributed in developing and maintaining apis for the application using Node.js(Express).
                    </li>
                    <li>
                        Created reusable functional components and custom hooks for web applications and performed Error handling
                        using Error Boundaries.
                    </li>
                </ul>
            </div>
            {/* Experience */}
            <div className='py-6'>
                <p className='italic'>
                    <span className='font-bold'>LetsEndorse</span>
                    <span className='px-2'>|</span>Banglore, India
                </p>
                <p className='py-1 italic'>Full Stack Engineer Intern (June 2021 - July 2021)</p>
                <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
                    <li>
                        Build an end-to-end admin module, which allows admin to select a particular area on map, save related data, using React and Google Maps javaScript API, which is currently being used by more than 200 admins of LetsEndorse.
                    </li>
                    <li>
                        Migrated the entire state-management from Context-apis to REDUX
                    </li>
                    <li>
                        Used MongoDB to design Schema, and created required APIs following RESTful API Conventions.
                    </li>
                </ul>
            </div>
            {/* Projects */}
            <h5 className='text-center underline text-[18px] py-4'>
                Projects
            </h5>
            <div className='py-6'>
                <p className='italic'>
                    <span className='font-bold cursor-pointer' onClick={() => redirect('/projects/dialworks')}>Dialworks</span>
                </p>
                <p className='py-1 italic'>React | Redux | React Query | Antd | Node.js</p>
                <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
                    <li>
                        An end-to-end platform for Sales Representatives, which will allow them to upskill, train and hire future Salesper-
                        sons for themselves and their company.
                    </li>
                    <li>
                        Used React, Redux (for global state management), react-query(for data fetching and caching), tailwind in
                        Frontend and Node.js, MongoDB, socket.io in Backend.
                    </li>
                    <li>
                        Worked on admin dashboard to automate the workflow of inviting users, managing roles and credits.
                    </li>
                </ul>
            </div>

            <div className='py-6'>
                <p className='italic'>
                    <span className='font-bold cursor-pointer' onClick={() => redirect('https://github.com/himanshubhardwaz/react-use-form-validate')}>
                        react-use-form-validate
                    </span>
                </p>
                <p className='py-1 italic'>React.js</p>
                <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
                    <li>
                        An easy-to-use super customisable form validation library for React. This library handles all of your form states
                        using built in useReducer hook of react.
                    </li>
                    <li>
                        This library allows user to either use built in validations or pass their own custom validations and show errors
                        onblur always or on submit
                    </li>
                    <li>
                        Published the package on npm and getting around <span className="font-bold"> 1000</span> weekly downloads.
                    </li>
                </ul>
            </div>
            <a href="/api/getPDF">
                <Button>Download</Button>
            </a>
        </div>
    )
}

ResumePage.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}

export default ResumePage
