import { Button } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'



const HeroSection = () => {
    const { user } = useSelector(state => state.crypto)
    const navigate = useNavigate()
    const getStart = () => {
        if (user) {
            navigate('/market')
        } else {
            navigate('/login')
        }
    }

    return (

        <>
            <section id='heroSection' className='md:min-h-screen overflow-hidden '>
                <div className='flex flex-col items-center justify-center h-[90vh]  lg:w-1/2  text-[#ffffff] md:text-[30px] text-[20px] font-bold'>
                    <h1 className=' text-center'> Buy , Sell & Accept Digital Assetes  </h1>

                    <h1 className='text-center '> Currency Easily</h1>
                    <p className='text-center '>Let's join the world with Cryptocurrency</p>
                    <a >
                        <Button variant='contained' color='success' className='p-2 w-50 my-3' type='button' onClick={() => getStart()} >Get Start</Button>
                    </a>

                </div>

            </section>
        </>
    )
}

export default HeroSection