import { pricing } from '@/constants'
import React from 'react'
import Button from './Button'
import { check } from '@/app/assets'
import Image from 'next/image'
const PricingList = () => {
    return (
        <div className='flex gap-[1rem] max-lg:flex-wrap'>
            {pricing.map((item, index) => (
                <div
                    key={item.id}
                    className="w-[19rem] max-lg:w-full h-full px-6 bg-n-8 border border-n-6 rounded-[2rem] lg:w-auto even:py-14 odd:py-8 odd:my-6 [&>h4]:first:text-color-2 [&>h4]:even:text-color-1 [&>h4]:last:text-color-3 "
                >
                    <h4 className='h-4 text-[2.5rem] mb-4'>
                        {item.title}
                    </h4>
                    <p className='body-2 min-h-[4rem] mb-3 text-n-1/50'>
                        {item.description}
                    </p>
                    <div className='flex items-center h-[5.5rem] mb-6 '>
                        {item.price && (
                            <>
                                <div className='h3'>₹</div>
                                <div className='text-[5.5rem] leading-none font-bold'>{item.price * 100}</div>
                            </>
                        )}
                    </div>
                    <Button
                        className='w-full mb-6'
                        href={item.price ? '/pricing' : 'mailto:info@deepmind.com'}
                        white={!!item.price}
                    >
                        {item.price ? 'Get Started' : 'Contact Us'}
                    </Button>
                    <ul>
                        {item.features.map((feature, index) => (
                            <li key={index}
                                className='flex items-start py-5 border-t border-n-6'
                            >
                                <Image
                                    src={check}
                                    alt="check"
                                    width={24}
                                    height={24}

                                />
                                <p className='body-2 ml-4'>
                                    {feature}
                                </p>
                            </li>
                        ))}
                    </ul>


                </div>
            ))}

        </div>
    )
}

export default PricingList
