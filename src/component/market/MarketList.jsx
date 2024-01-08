import React from 'react'
import MarketCoins from './MarketCoins'
import { useSelector } from 'react-redux'
import Loader from '../utils/loader/Loader'

const MarketList = () => {

    const { cryptoCoins, isError } = useSelector(state => state.crypto)
    if (!cryptoCoins) {
        return (
            <Loader />
        )
    }
    if (isError) {
        return <h1 className="text-5xl mt-28 font-semibold">Something is wrong</h1>
    }

    return (
        <section className="wrapper-container mt-14 w-full  ">
            <h1 className="text-2xl mb-2">Markets</h1>
            <div className="grid grid-cols-3 sm:grid-cols-4 p-2 rounded border-gray-200 border-b  font-semibold">
                <div className="flex items-center gap-1 w-full">
                    <p>Name</p>
                </div>
                <span className="w-full text-center"> Current Rate:-</span>
                <span className={`flex gap-1 text-black`}>
                    Market Trend
                </span>
                <div className="hidden sm:block">
                    <p className=""> Total Market Cap</p>
                </div>
            </div>
            {

                cryptoCoins && cryptoCoins.map(coin => <MarketCoins key={coin.id} coin={coin} />)
            }
        </section>
    )
}




export default MarketList