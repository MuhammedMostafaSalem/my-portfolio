import React from 'react'
import whatsApp from '../../assets/images/social.png'
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t } = useTranslation();
    const year = new Date().getFullYear()

    return (
        <div className='flex justify-center flex-col items-center gap-3 py-[40px]'>
            <p className='text-center text-textNeutralGray'>
                &copy; {year} {t("Developed by Mohammed Mostafa")}.
            </p>

            <div className='flex gap-3 items-center'>
                <img src={whatsApp} alt='whatsApp number' />
                <p className='text-center text-textNeutralGray'>
                    +201099132966
                </p>
            </div>
        </div>
    )
}

export default Footer