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
            Hi, I&#39;m{" "}
            <br className="block md:hidden" />
            <span className="relative">
              <span className="h-20 pt-2 overflow-x-hidden whitespace-nowrap text-brand-accent text-red-500">
                Himanshu <span className="text-3xl md:text-5xl">👋</span>
              </span>
              <span
                className={`cursor absolute -bottom-0 left-0 -top-1 inline-block bg-myGray w-full animate-type will-change`}
              />
            </span>
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
              <AiOutlineMail size={28} className="cursor-pointer" />
            </Link>
            <Link href='/resume'>
              <AcademicCapIcon className='h-8 text-white cursor-pointer' />
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
