import { notification1 } from '@/app/assets'
import { notificationImages } from '@/constants'
import Image from 'next/image'
import React from 'react'

const Notification = ({
    title,
    className
}) => {
    return (
        <div className={`${className || ""} flex items-center p-4 pr-6 bg-n-9/40 backdrop-blur border border-n-1/40 rounded-2xl gap-5`}>
            <Image
                src={notification1}
                width={62}
                height={62}
                alt='image'
                className='rounded-xl'
            />

            <div className='flex-1'>
                <h6 className='mb-1 font-semibold text-base '>
                    {title}
                </h6>
                <div className='flex items-center justify-between'>
                    <ul className='flex -m-0.5'>
                        {notificationImages.map((item, index) => (
                            <li
                                key={index}
                                className='w-6 h-6 rounded-full border-2 border-n-12 overflow-hidden flex items-center justify-center'
                            >
                                <Image
                                    src={item}
                                    width={24}
                                    height={24}
                                    alt={`notification-${index}`}
                                    className='object-cover w-full h-full'
                                />
                            </li>
                        ))}
                    </ul>
                    <div className='body-2 text-n-13 '>
1m ago
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Notification
