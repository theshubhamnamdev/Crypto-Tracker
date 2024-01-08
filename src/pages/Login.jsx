import { Button } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../feature/crypto/cryptoSlice'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
        password1: ''
    })

    const { name, email, password, password1 } = form

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (password !== password1) {
            alert("Password does not match")

        } if (password.length < 8) {
            alert("Password is to short")

        } else {

            dispatch(login(form))
            navigate('/')

        }



    }

    return (
        <div className='min-h-[90vh] flex flex-col justify-center items-center lg:px-32 px-5 bg-backgroundColor '>
            <form className='md:w-full lg:w-1/2  border-4 p-5' onSubmit={handleSubmit}>
                <div className="">

                    <div className="border-b border-gray-900/10 pb-3">
                        <h2 className="text-3xl font-semibold leading-7 text-gray-900">Login</h2>
                        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
                            <div className="col-span-12">
                                <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">Name</label>
                                <div className="mt-2">
                                    <input type="text" name="name" value={name} id="name" autoComplete="off"
                                        onChange={handleChange}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 outline-none px-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brightColor sm:text-sm sm:leading-6" />
                                </div>
                            </div>

                            <div className="col-span-12">
                                <label htmlFor="contact" className="block text-sm font-medium leading-6 text-gray-900">Email</label>
                                <div className="mt-2">
                                    <input id="email" name="email" type="email" value={email}
                                        onChange={handleChange}
                                        autoComplete="off" className="block w-full rounded-md border-0 py-1.5 text-gray-900 outline-none px-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brightColor sm:text-sm sm:leading-6" />
                                </div>
                            </div>
                            <div className="col-span-12">
                                <label htmlFor="contact" className="block text-sm font-medium leading-6 text-gray-900">password</label>
                                <div className="mt-2">
                                    <input id="password" name="password" value={password} type="password"
                                        onChange={handleChange}
                                        autoComplete="off" className="block w-full rounded-md border-0 py-1.5 text-gray-900 outline-none px-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brightColor sm:text-sm sm:leading-6" />
                                </div>
                            </div>
                            <div className="col-span-12">
                                <label htmlFor="contact" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                                <div className="mt-2">
                                    <input id="password1" name="password1" value={password1} type="password"
                                        onChange={handleChange}
                                        autoComplete="off" className="block w-full rounded-md border-0 py-1.5 text-gray-900 outline-none px-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brightColor sm:text-sm sm:leading-6" />
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
                <div className="mt-2">
                    <Button type='Submit' variant="contained" fullWidth color='success'>Login</Button>
                </div>
            </form>
        </div>
    )
}

export default Login