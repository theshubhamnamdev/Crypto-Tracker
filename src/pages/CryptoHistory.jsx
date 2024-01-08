import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { chartData, chartDetail } from '../feature/crypto/cryptoSlice';
import CryptoChart from '../component/cryptochart/CryptoChart';
import CryptoDetail from '../component/cryptochart/CryptoDetail';




const CryptoHistory = () => {

    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        setTimeout(() => {
            if (id) {
                dispatch(chartData(id));
                dispatch(chartDetail(id))
            }
        }, 1000)

    }, []);


    return (
        <div className="w-full flex justify-center">
            <section className="wrapper-container mt-14 w-full   ">
                <CryptoChart />
                <CryptoDetail />
            </section>


        </div>
    )
}

export default CryptoHistory
