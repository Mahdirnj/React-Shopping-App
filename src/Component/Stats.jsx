import React, {useState} from 'react';


function Stats({fHead, fDesc, secHead, secDesc, thrdHead, thrdDesc}) {

    return (
        <div className="bg-gray-900 py-24 sm:py-32 border-t border-b-inherit border-gray-200">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
                    <div className="mx-9 flex max-w-xs flex-col gap-y-4">
                        <dt className="text-base leading-7 font-mono text-indigo-200">{fHead}</dt>
                        <dd className="order-first text-3xl font-semibold tracking-tight text-gray-300 sm:text-5xl">{fDesc}
                        </dd>
                    </div>
                    <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                        <dt className="text-base leading-7 font-mono text-indigo-200">{secHead}</dt>
                        <dd className="order-first text-3xl font-semibold tracking-tight text-gray-300 sm:text-5xl">{secDesc}
                        </dd>
                    </div>
                    <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                        <dt className="text-base leading-7 font-mono text-indigo-200">{thrdHead}</dt>
                        <dd className="order-first text-3xl font-semibold tracking-tight text-gray-300 sm:text-5xl">{thrdDesc}</dd>
                    </div>
                </dl>
            </div>
        </div>
    )
}

export default Stats;