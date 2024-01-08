import React from 'react';
import { useSelector } from 'react-redux';

import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';
import Loader from '../utils/loader/Loader';


ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
)
const CryptoChart = () => {

    const { chart, isError } = useSelector((state) => state.crypto);

    const data = {
        labels: chart && chart.map((dataPoint) => new Date(dataPoint[0]).toLocaleTimeString()),
        datasets: [
            {
                label: 'Price',
                data: chart && chart.map((dataPoint) => dataPoint[1]),
                fill: false,
                borderColor: 'green',
            },
        ],
    };

    const options = {
        Plugin: {
            legend: true
        },
        scales: {
            x: {

            },
        },
    };

    if (!chart) {
        return (
            <Loader />
        )
    }
    if (isError) {
        return <h1 className="text-5xl mt-28 font-semibold">Something is wrong</h1>
    }
    return (
        <div className='flex justify-center'>
            <div className='md:w-[800px] sm:w-[600px] w-[400px] md:h-[500px] sm:h-[450px]  h-60 sm:p-0 p-5'>
                <Line
                    data={data}
                    options={options}
                />
            </div>
        </div>
    );
}

export default CryptoChart