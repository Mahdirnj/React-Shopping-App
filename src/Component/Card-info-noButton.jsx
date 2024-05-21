import "../assets/index.css"
import React from 'react';

function CardInfoNoButton({Heading, info}) {
    return (
        <div>
            <a
                className="w-72 pointer-events-auto block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{Heading}</h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">{info}</p>
            </a>
        </div>
    )
}

export default CardInfoNoButton