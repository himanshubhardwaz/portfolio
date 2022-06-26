import { useReducer } from 'react'
import type { ReactElement } from 'react'
import Layout from '@/components/Layout'
import type { NextPageWithLayout } from './_app'
import Button from '@/components/Button'
import { useSWRConfig } from 'swr'

const initialState = {
    fName: '',
    lName: '',
    email: '',
    message: '',
}

type state = {
    fName: string,
    lName: string,
    email: string,
    message: string,
}

type action = {
    type: string,
    payload: string
}

const reducer = (state: state, action: action) => {
    switch (action.type) {
        case 'fName':
            return { ...state, fName: action.payload }
        case 'lName':
            return { ...state, lName: action.payload }
        case 'email':
            return { ...state, email: action.payload }
        case 'phone':
            return { ...state, phone: action.payload }
        case 'subject':
            return { ...state, subject: action.payload }
        case 'message':
            return { ...state, message: action.payload }
        case 'reset':
            return initialState
        default:
            return state
    }
}

const ContactPage: NextPageWithLayout = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleChange = (e: any) => {
        dispatch({
            type: e.target.name,
            payload: e.target.value
        });
    }

    const { mutate } = useSWRConfig()

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        try {
            mutate('/api/contact', async () => {
                const updatedTodo = await fetch('/api/contact', {
                    method: 'POST',
                    body: JSON.stringify({ ...state })
                })
            })
            dispatch({ type: 'reset', payload: '' })
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className="w-screen py-24">
            <div className='max-w-[1240px] mx-auto flex flex-col justify-center p-2'>
                <p className='text-xl tracking-widest uppercase text-red-500'>
                    Contact
                </p>
                <h2 className='py-4'>Get In Touch</h2>
                <form className="w-full max-w-lg" onSubmit={handleSubmit}>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-xs font-bold mb-2" htmlFor="grid-first-name">
                                First Name
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-myGray border focus:border-red-500 focus:ring-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" placeholder="First Name" name="fName" onChange={handleChange} value={state.fName} />
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-xs font-bold mb-2" htmlFor="grid-last-name">
                                Last Name
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-myGray border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-red-500 focus:ring-red-500" type="text" placeholder="Last Name" name="lName" onChange={handleChange} value={state.lName} />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-xs font-bold mb-2" htmlFor="grid-password">
                                Your Email Address
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-myGray border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-red-500 focus:ring-red-500" type="email" placeholder="Email" name="email" onChange={handleChange} value={state.email} />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-xs font-bold mb-2" htmlFor="grid-password">
                                Message
                            </label>
                            <textarea className=" no-resize appearance-none block w-full bg-gray-200 text-myGray border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-red-500 focus:ring-red-500 h-48 resize-none" id="message" name="message" onChange={handleChange} value={state.message} />
                        </div>
                    </div>
                    <div className="md:flex md:items-center">
                        <div className="md:w-1/3">
                            <Button onClick={handleSubmit}>
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
