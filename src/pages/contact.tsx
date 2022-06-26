/* eslint-disable @next/next/no-img-element */
import { useReducer } from 'react'
import type { ReactElement } from 'react'
import Layout from '@/components/Layout'
import type { NextPageWithLayout } from './_app'
import Button from '@/components/Button'

const initialState = {
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
}

type state = {
    name: string,
    phone: string,
    email: string,
    subject: string,
    message: string,
}

type action = {
    type: string,
    payload: string
}

const reducer = (state: state, action: action) => {
    switch (action.type) {
        case 'name':
            return { ...state, name: action.payload }
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

    const handleSubmit = (e: any) => {
        console.log(e);
        e.preventDefault();
        dispatch({
            type: 'reset',
            payload: ''
        })
    }
    return (
        <div className="w-screen py-24">
            <div className='max-w-[1240px] mx-auto flex flex-col justify-center p-2'>
                <p className='text-xl tracking-widest uppercase text-red-500'>
                    Contact
                </p>
                <h2 className='py-4'>Get In Touch</h2>
                <div className="">
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4" method='POST'>
                        <div className="grid md:grid-cols-5 lg:grid-cols-10">
                            <label>Name</label>
                            <input
                                type="text"
                                name="name"
                                value={state.name}
                                onChange={handleChange}
                                className="form-input text-myGray focus:border-red-500 focus:ring-red-500 rounded-md col-span-3"
                            />
                        </div>
                        <div className="grid md:grid-cols-5 lg:grid-cols-10">
                            <label>Phone</label>
                            <input
                                type="text"
                                name="phone"
                                value={state.phone}
                                onChange={handleChange}
                                className="form-input text-myGray focus:border-red-500 focus:ring-red-500 rounded-md col-span-3"
                            />
                        </div>
                        <div className="grid md:grid-cols-5 lg:grid-cols-10">
                            <label>Email</label>
                            <input
                                type="email"
                                name="email"
                                value={state.email}
                                onChange={handleChange}
                                className="form-input text-myGray focus:border-red-500 focus:ring-red-500 rounded-md col-span-3"
                            />
                        </div>

                        <div className="grid md:grid-cols-5 lg:grid-cols-10">
                            <label>Subject</label>
                            <input
                                type="text"
                                name="subject"
                                value={state.subject}
                                onChange={handleChange}
                                className="form-input text-myGray focus:border-red-500 focus:ring-red-500 rounded-md col-span-3"
                            />
                        </div>

                        <div className="grid md:grid-cols-5 lg:grid-cols-10">
                            <label>Message</label>
                            <textarea
                                name="message"
                                value={state.message}
                                onChange={handleChange}
                                className="form-input text-myGray focus:border-red-500 focus:ring-red-500 rounded-md col-span-3"
                            />
                        </div>

                        <div className="grid md:grid-cols-5 lg:grid-cols-10">
                            <div />
                            <Button className="">
                                Submit
                            </Button>
                        </div>
                    </form>
                </div>
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
