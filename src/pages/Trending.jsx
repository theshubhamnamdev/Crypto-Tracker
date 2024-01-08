import React, { useEffect } from 'react'
import TrendingList from '../component/trending/TrendingList'
import { trendingData } from '../feature/crypto/cryptoSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Trending = () => {
    const { trendingCoins, user } = useSelector(state => state.crypto)
    const navigate = useNavigate()
    const dispatch = useDispatch()


    useEffect(() => {
        if (!user) {
            navigate("/login")
        }
        if (!trendingCoins) {
            setTimeout(() => {
                dispatch(trendingData())
            }, 1500)
        }

    }, [trendingCoins])
    return (
        <section className=" w-full flex justify-center">
            <TrendingList />
        </section>
    )
}

export default Trending