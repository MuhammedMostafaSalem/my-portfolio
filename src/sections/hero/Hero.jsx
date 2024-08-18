import React from 'react'
import avatar from '../../assets/images/me.jpeg'
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaMoon } from "react-icons/fa6";
import TypingTextAnimation from '../../components/TypingTextAnimation';

const Hero = () => {
    return (
        <div id="hero" className='flex flex-col sm1-min:flex-row-reverse sm1-min:items-center sm1-min:justify-evenly justify-center gap-[20px] text-center h-[100dvh] min-h-[500px]'>
            <div className='flex justify-center'>
                <img
                    src={avatar}
                    className='w-[250px] h-[250px] sm1-min:w-[350px] sm1-min:h-[350px] rounded-full'
                    alt="Profile picture"
                />
                <FaMoon className='text-[20px]' />
            </div>

            <div className='flex flex-col gap-[20px]'>
                <h1>
                Muhammed
                <br />
                Mostafa
                </h1>

                <TypingTextAnimation />
                <span className='flex justify-center gap-[10px]'>
                    <a href="https://twitter.com/" target="_blank">
                        <FaSquareXTwitter className='text-[25px]' />
                    </a>
                    <a href="https://github.com/" target="_blank">
                        <FaGithub className='text-[25px]' />
                    </a>
                    <a href="https://linkedin.com/" target="_blank">
                        <FaLinkedin className='text-[25px]' />
                    </a>
                </span>

                <div className='flex justify-center'>
                    <p className='max-w-[40ch]'>
                    With a passion for developing modern React web apps for commercial
                    businesses.
                    </p>
                </div>

                <div>

                <button className='shadow-custom text-textNeutralGray border-none rounded-[20px] w-[120px] h-[45px] tetx-[20px]'>Resume</button>
                </div>
            </div>
        </div>
    )
}

export default Hero