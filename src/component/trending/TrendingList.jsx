import React from 'react'
import TrendingCoins from './TrendingCoins'
import Loader from '../utils/loader/Loader';
import { useSelector } from 'react-redux';

const TrendingList = () => {
    const { trendingCoins, isError } = useSelector(state => state.crypto)
    if (!trendingCoins) {
        return (
            <Loader />
        )
    }
    if (isError) {
        return <h1 className=" text-5xl mt-28 font-semibold">Something is wrong</h1>
    }

    return (
        <section className="wrapper-container mt-14 w-full  ">
            <h1 className="text-2xl mb-2">Trending Coins</h1>
            <div className="grid grid-cols-3 sm:grid-cols-3 p-2 rounded border-gray-200 border-b  font-semibold">
                <div className="flex items-center gap-1 w-full">
                    <p>Name</p>
                </div>
                <span className="w-full text-center"> Market Rank</span>
                <span className={`flex gap-1 text-black`}>
                    Price to Bitcoin
                </span>

            </div>
            {
                trendingCoins.map(coin => <TrendingCoins key={coin.item.coin_id} coin={coin.item} />)
            }


        </section>
    )
}

export default TrendingList