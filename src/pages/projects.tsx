/* eslint-disable @next/next/no-img-element */
import type { ReactElement } from 'react'
import Layout from '@/components/Layout'
import type { NextPageWithLayout } from './_app'
import Skill from '@/components/Skill'
import Project from '@/components/Project'

const ProjectsPage: NextPageWithLayout = () => {
    return (
        <div className="w-screen py-24">
            <div className='max-w-[1240px] mx-auto flex flex-col justify-center p-2'>
                <p className='text-xl tracking-widest uppercase text-red-500'>
                    Projects
                </p>
                <h2 className='py-4'>What I have built</h2>
                <div className='grid md:grid-cols-2 gap-8'>
                    <Project
                        img='/images/projects/portfolio.png'
                        techStack="Next.js, TypeScript, Tailwind"
                        redirect="https://www.thehb.lol"
                        title="Personal Portfolio"
                    />
                    <Project
                        img='/images/projects/dialworks.png'
                        techStack="React.js, Redux, React Query, Antd, Less, Node.js"
                        redirect="https://dialworks.io"
                        title="Dialworks"
                    />
                    <Project
                        img='/images/projects/npm.png'
                        techStack="React.js"
                        redirect="https://www.npmjs.com/package/react-use-form-validate"
                        title="react-use-form-validate"
                    />
                    <Project
                        img='/images/projects/chess.png'
                        techStack="React.js, Rxjs"
                        redirect="https://chess.thehb.lol"
                        title="2 Player Chess Game"
                    />
                </div>
            </div>
        </div>
    )
}

ProjectsPage.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}

export default ProjectsPage
