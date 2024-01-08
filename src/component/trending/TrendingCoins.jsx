import React from 'react'
import { Link } from 'react-router-dom'
const TrendingCoins = ({ coin }) => {
    return (
        <Link to={`/coin/${coin.id}`} className=''>
            <div className="grid grid-cols-3 sm:grid-cols-3 font-light p-2 rounded border-gray-200 border-b hover:bg-gray-200">
                <div className="flex items-center gap-1 w-full">
                    <img className="w-6" src={coin.small} alt='name' />
                    <p>{coin.name}</p>
                </div>
                <span className="w-full text-center"> {coin.market_cap_rank}</span>
                <span className={`flex gap-1 text-[black]`}>
                    <span className="text-md">$</span>
                    {coin.price_btc}
                </span>

            </div>
        </Link>
    )
}

export default TrendingCoins