/* eslint-disable @next/next/no-img-element */
import type { ReactElement } from 'react'
import Layout from '@/components/Layout'
import type { NextPageWithLayout } from './../_app'
import Project from '@/components/Project'
import portfolioImage from '../../../public/images/projects/portfolio.png'
import dialworksImage from '../../../public/images/projects/dialworks.png'
import npmImage from '../../../public/images/projects/npm.png'
import chessImage from '../../../public/images/projects/chess.png'

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
                        img={portfolioImage}
                        techStack="Next.js, TypeScript, Tailwind"
                        redirect="https://github.com/himanshubhardwaz/portfolio"
                        title="Personal Portfolio"
                    />
                    <Project
                        img={dialworksImage}
                        techStack="React.js, Redux, React Query, Antd, Less, Node.js"
                        redirect="/projects/dialworks"
                        title="Dialworks"
                    />
                    <Project
                        img={npmImage}
                        techStack="React.js"
                        redirect="https://www.npmjs.com/package/react-use-form-validate"
                        title="react-use-form-validate"
                    />
                    <Project
                        img={chessImage}
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
