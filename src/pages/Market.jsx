import React, { useEffect } from 'react'
import MarketList from '../component/market/MarketList'
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../feature/crypto/cryptoSlice';
import { useNavigate } from 'react-router-dom';


const Market = () => {
    const { cryptoCoins, user } = useSelector(state => state.crypto)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        if (!user) {
            navigate("/login")
        }
        if (user) {
            if (!cryptoCoins) {
                setTimeout(() => {
                    dispatch(getData())
                }, 1500)
            }
        }
    }, [cryptoCoins])
    return (
        <>
            <section className=" w-full flex justify-center">
                <MarketList />
            </section>
        </>
    )
}

export default Market