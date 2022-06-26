/* eslint-disable @next/next/no-img-element */
import { FC } from 'react';
import Link from 'next/link'

type Props = {
    img: string,
    title: string,
    techStack: string,
    redirect: string,
}

const Project: FC<Props> = ({
    img,
    title,
    techStack,
    redirect
}) => {
    return (
        <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-red-500 to-red-300'>
            <img className='rounded-xl group-hover:opacity-10' src={img} alt='/' />
            <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                <h3 className='text-2xl text-white tracking-wider text-center'>{title}</h3>
                <p className='pb-4 pt-2 text-white text-center'>{techStack}</p>
                <Link href={redirect}>
                    <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>More Info</p>
                </Link>
            </div>
        </div>
    )
}

export default Project