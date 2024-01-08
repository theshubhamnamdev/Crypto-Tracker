import { TrendingDown, TrendingUp } from '@mui/icons-material';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import React from 'react'
import { useSelector } from 'react-redux'

const CryptoDetail = () => {
    const { singlecoin } = useSelector(state => state.crypto)

    if (singlecoin) {

        return (
            <div className=''>
                <div className='flex gap-2 items-center'>
                    <img src={singlecoin.image.small} alt={singlecoin.name} />
                    <h1 className='text-2xl mb-2 capitalize font-bold'>{singlecoin.name}</h1>

                </div>
                <div className="grid grid-cols-4 font-medium p-2 rounded border-gray-200 border-b hover:bg-gray-200">
                    <div className="flex flex-col justify-start gap-1 w-full">
                        <p>CURRENT PRICE</p>
                        <span className="text-md"><CurrencyRupeeIcon fontSize='small' />{singlecoin.market_data.current_price.inr}</span>
                    </div>
                    <div className="flex flex-col justify-start gap-1 w-full text-center">
                        <p>TODAY HIGH</p>
                        <span className="w-full text-center"><CurrencyRupeeIcon fontSize='small' />{singlecoin.market_data.high_24h.inr}</span>
                    </div>
                    <div className="flex flex-col justify-start gap-1 w-full text-center">
                        <p>TODAY LOW</p>
                        <span className="w-full text-center"><CurrencyRupeeIcon fontSize='small' />{singlecoin.market_data.low_24h.inr}</span>
                    </div>

                    <div className="flex flex-col justify-start gap-1 w-full text-center">
                        <p>CHANGE_24H</p>
                        <span className={` ${singlecoin.market_data.price_change_24h_in_currency.inr < 0 ? 'text-red-400' : 'text-green-400'} `}>

                            {singlecoin.market_data.price_change_24h_in_currency.inr < 0 ? <TrendingDown /> : <TrendingUp />}
                            <CurrencyRupeeIcon fontSize='small' />
                            {(singlecoin.market_data.price_change_24h_in_currency.inr).toFixed(2)}
                        </span>
                    </div>


                </div>
                <p className='mt-2 text-gray-500 [&>a]:text-blue-600 [&>a]:underline' dangerouslySetInnerHTML={{ __html: singlecoin.description.en }}></p>
            </div>
        )
    }
}

export default CryptoDetail