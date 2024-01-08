import React, { useState } from 'react'
import { Button } from '@mui/material'
import PaidIcon from '@mui/icons-material/Paid';
import { NavLink, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { searchData } from '../feature/crypto/cryptoSlice';

const NavBar = () => {
    const { user } = useSelector(state => state.crypto)
    const [text, settext] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        if (!user) {
            navigate("/login")
            settext('')
        } else {
            setTimeout(() => {
                dispatch(searchData(text))
            }, 1500)
            settext('')
            navigate('/search')
        }

    }

    return (
        <>
            <div className=" fixed top-0  z-10 w-full flex  justify-evenly  bg-[green] shadow-[0_3px_10px_rgb(0,0,0,0.2)]" >
                <div className='wrapper-container w-full'>
                    <div className=" flex flex-row justify-between py-5 px-5 ">
                        <NavLink to={'/'} className=" flex flex-col items-center cursor-pointer">
                            <PaidIcon fontSize="large" sx={{ color: "orange" }} />
                            <h1 className=" text-lg font-semibold text-center">Crypto App </h1>
                        </NavLink>

                        <nav className="lg:flex flex-row items-center text-lg font-medium gap-8 md:ml-0 ml-8 ">
                            <NavLink to={'/'}
                                className="hover:text-[#004225] transition-all cursor-pointer mr-4 "
                            >
                                Home
                            </NavLink>
                            <NavLink to={user ? '/market' : '/login'}
                                className="hover:text-[#004225] transition-all cursor-pointer mr-4 "
                            >
                                Market
                            </NavLink>
                            <NavLink to={user ? '/trending' : '/login'}
                                className="hover:text-[#004225] transition-all cursor-pointer mr-4 "
                            >
                                Trending
                            </NavLink>
                            <form className='md:mt-0 mt-2' onSubmit={handleSubmit}>
                                <div className="">
                                    <span className='flex md:ml-0 ml-16' >
                                        <span className="mr-2 w-full">
                                            <input type="text"
                                                name="text"
                                                id="text"
                                                onChange={(e) => settext(e.target.value)}
                                                value={text}
                                                autoComplete="off" className="block w-full  rounded-md border-0 py-1.5 text-gray-900 outline-none px-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brightColor sm:text-sm sm:leading-6 float-left" />
                                        </span>
                                        <Button type='Submit' sx={{ paddingX: "20px" }} variant="contained" size="small" color='success'> Search </Button></span>
                                </div>
                            </form>

                        </nav>


                    </div>
                </div>
            </div>
            <div className='mt-20'></div>
        </>
    )
}

export default NavBar