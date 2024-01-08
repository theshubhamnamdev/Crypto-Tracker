import React from 'react'
import { TrendingDown, TrendingUp } from '@mui/icons-material'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { Link } from 'react-router-dom'

const MarketCoins = ({ coin }) => {
    return (
        <Link to={`/coin/${coin.id}`} className=''>
            <div className="grid grid-cols-3 sm:grid-cols-4 font-light p-2 rounded border-gray-200 border-b hover:bg-gray-200">
                <div className="flex items-center gap-1 w-full">
                    <img className="w-6" src={coin.image} alt='name' />
                    <p>{coin.name}</p>
                </div>
                <span className="w-full text-center"><CurrencyRupeeIcon fontSize='small' />{(coin.current_price).toFixed(2)}</span>
                <span className={`flex gap-1 ${coin.price_change_percentage_24h < 0 ? 'text-red-400' : 'text-green-400'} `}>
                    {coin.price_change_percentage_24h < 0 ? <TrendingDown /> : <TrendingUp />}
                    <CurrencyRupeeIcon fontSize='small' />
                    {((coin.price_change_percentage_24h) * 85).toFixed(2)}
                </span>
                <div className="hidden sm:block">
                    <span><CurrencyRupeeIcon fontSize='small' />{coin.market_cap}</span>

                </div>
            </div>
        </Link>
    )
}

export default MarketCoins