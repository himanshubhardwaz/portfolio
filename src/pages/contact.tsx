import type { ReactElement } from 'react'
import type { NextPageWithLayout } from './_app'
import Layout from '@/components/Layout'
import Button from '@/components/Button'
import { useState, useRef } from 'react'
import Alert from '@/components/Alert'

const ContactPage: NextPageWithLayout = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [message, setMessage] = useState('');

    const formRef = useRef<HTMLFormElement>(null);

    const handleSubmit = async (e: any) => {
        setIsLoading(true);
        setIsError(false);
        setMessage('');

        e.preventDefault();

        const data = {
            fName: e.target.fName.value,
            lName: e.target.lName.value,
            email: e.target.email.value,
            message: e.target.message.value,
        }

        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                ContentType: 'application/json'
            },
            body: JSON.stringify(data)
        })

        setIsLoading(false);

        if (!response.ok) {
            setIsError(true);
            setMessage('Could not submit form at the momemt please try again later !!!');
        }

        else {
            setMessage('Successfully submitted form');
            if (formRef && formRef.current) {
                formRef.current.reset();
            }
        }
    }
    return (
        <div className="w-screen py-28">
            <div className='max-w-[1240px] mx-auto flex flex-col justify-center p-2'>
                <h2 className='py-4'>Get In Touch</h2>
                <form className="w-full max-w-lg" onSubmit={handleSubmit} id="contact-form" ref={formRef}>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-xs font-bold mb-2" htmlFor="grid-first-name">
                                First Name
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-myGray border focus:border-red-500 focus:ring-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" placeholder="First Name" name="fName" required id="fName" />
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-xs font-bold mb-2" htmlFor="grid-last-name">
                                Last Name
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-myGray border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-red-500 focus:ring-red-500" type="text" placeholder="Last Name" name="lName" id="lName" />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-xs font-bold mb-2" htmlFor="grid-password">
                                Your Email Address
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-myGray border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-red-500 focus:ring-red-500" type="email" placeholder="Email" name="email" required id="email" />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-xs font-bold mb-2" htmlFor="grid-password">
                                Message
                            </label>
                            <textarea className="no-resize appearance-none block w-full bg-gray-200 text-myGray border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-red-500 focus:ring-red-500 h-48 resize-none" id="message" name="message" minLength={20} />
                        </div>
                    </div>
                    {message !== "" && <Alert type={isError ? 'error' : 'success'} message={message} className="mb-6" />}
                    <div className="md:flex md:items-center">
                        <div className="md:w-1/3">
                            <Button type="submit" loading={isLoading}>
                                Send
                            </Button>
                        </div>
                        <div className="md:w-2/3"></div>
                    </div>
                </form>
            </div>
        </div>
    )
}

ContactPage.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}

export default ContactPage
