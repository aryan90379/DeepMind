import ButtonSvg from '@/app/assets/svg/ButtonSvg'
import React from 'react'

const Button = ({ className, href, onClick, children, px, white }) => {
    const classes = `button relative inline-flex items-center justify-center p-3 h-11 transition-colors hover:text-color-1 ${px || 'px-7'} ${white ? 'text-n-8' : 'text-n-1'} ${className || ''} `

    const spanClasses = `relative z-10`;

    const renderButton = () => (
        <button className={classes} onClick={onClick} >
            <span className={spanClasses}>{children}</span>
            <ButtonSvg white={white}/>

        </button>
    )

    const renderLink = () => (
        <a href={href} className={classes}>
            <span className={spanClasses}>{children}</span>
            <ButtonSvg white={white}/>
        </a>
    )


    return href
        ? renderLink()
        : renderButton();
}

export default Button
