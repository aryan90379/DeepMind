import { loading } from '@/app/assets'
import Image from 'next/image'
import React from 'react'

const Generating = ({ className }) => {
    return (
        <div className={`flex items-center h-[3.75rem] px-6 bg-n-8/80 rounded-[1.7rem]
        ${className || ''} text-base
        `}>
            <Image
                src={loading}
                className='w-5 h-5 mr-4'
                alt='loading
                '
            />
            AI is generating
        </div>
    )
}

export default Generating
