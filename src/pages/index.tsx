import type { ReactElement } from 'react'
import Layout from '@/components/Layout'
import type { NextPageWithLayout } from './_app'
import Link from 'next/link';
import { AiOutlineMail } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { AcademicCapIcon } from '@heroicons/react/solid'

const Page: NextPageWithLayout = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full mx-auto p-2 flex justify-center items-center h-full'>
        <div className="mt-12">
          <p className='uppercase text-md tracking-widest '>
            LET&#39;S BUILD SOMETHING TOGETHER
          </p>
          <p className='py-4 text-5xl'>
            Hi, I&#39;m <span className='text-red-600'> Himanshu</span>
          </p>
          <h1 className='py-2 text-4xl'>A Full Stack Web Developer</h1>
          <p className='py-4  sm:max-w-[70%] m-auto text-lg'>
            I am a Skilled FullStack JavaScript Developer 🚀 from India. I am always working on some project or learning something new!
            I also enjoy playing fps games and am currently working hard to build my dream gaming setup.
          </p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <a
              href='https://www.linkedin.com/in/himanshubhardwaz/'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedinIn size={28} />
            </a>
            <a
              href='https://github.com/himanshubhardwaz'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub size={28} />
            </a>
            <Link href='/contact'>
              <AiOutlineMail size={28} />
            </Link>
            <Link href='/resume'>
              <AcademicCapIcon className='h-8 text-white' />
            </Link>
          </div>
        </div>
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
