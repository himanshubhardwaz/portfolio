/* eslint-disable @next/next/no-img-element */
import type { ReactElement } from 'react'
import Layout from '@/components/Layout'
import type { NextPageWithLayout } from './_app'
import Skill from '@/components/Skill'

const SkillsPage: NextPageWithLayout = () => {
    return (
        <div className="h-screen w-screen">
            <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full p-2'>
                <p className='text-xl tracking-widest uppercase text-red-500'>
                    Skills
                </p>
                <h2 className='py-4'>What I Can Do</h2>
                <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
                    <Skill img='/images/skills/html.png' name='HTML' />
                    <Skill img='/images/skills/tailwind.png' name='Tailwind' />
                    <Skill img='/images/skills/javascript.png' name='Javascript' />
                    <Skill img='/images/skills/node.png' name='Node' />
                    <Skill img='/images/skills/react.png' name='React' />
                    <Skill img='/images/skills/nextjs.png' name='Next' />
                    <Skill img='/images/skills/redux.png' name='Redux' />
                    <Skill img='/images/skills/mongo.png' name='MongoDB' />
                </div>
            </div>
        </div>
    )
}

SkillsPage.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}

export default SkillsPage
