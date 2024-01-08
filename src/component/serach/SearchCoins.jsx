import React from 'react'
import { Link } from 'react-router-dom'
const SearchCoins = ({ coin }) => {
    return (
        <Link to={`/coin/${coin.id}`} className=''>
            <div className="grid grid-cols-3 sm:grid-cols-3 font-medium p-2 rounded border-gray-200 border-b hover:bg-gray-200">
                <div className="flex items-center gap-1 w-full ">
                    <img className="w-6" src={coin.large} alt='name' />
                    <p>{coin.name}</p>
                </div>
                <span className="w-full text-center"> {coin.market_cap_rank}</span>
                <span className={`flex gap-1 text-[black]`}>
                    {coin.symbol}
                </span>

            </div>
        </Link>
    )
}

export default SearchCoins