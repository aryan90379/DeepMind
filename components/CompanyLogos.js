import { companyLogos } from '@/constants'
import Image from 'next/image'
import React from 'react'

const CompanyLogos = ({className}) => {
  return (
    <div className={className}>
          <h5 className='tagline mb-6 text-center text-n-1/50'>
              helping people create beautifull content at
          </h5>
          <ul className='flex'>
              {companyLogos.map((logo, index) => (
                  <li key={index}
                  className='flex items-center justify-center flex-1 h-[8.5rem]'
                  >
                      <Image
                          src={logo}
                          width={134}
                          height={28}
                          alt={logo}
                      />
                  </li>
              ))}
          </ul>
    </div>
  )
}

export default CompanyLogos
