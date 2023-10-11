"use client";
import React, {FC} from 'react';
import {Bar} from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

type Props = {
    labels: string[];
    data: number[];
}

const Chart: FC<Props> = props => {

    const {labels, data} = props;

    const charData = {
        labels: labels,
        datasets: [
            {
                label: 'Seguidores',
                data: data,
            }
        ]
    };

    return (
        <>
            <Bar data={charData} options={{responsive: false}} width={500} height={250}/>
        </>
    )
}

export default Chart;