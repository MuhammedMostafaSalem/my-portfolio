import React from 'react'
import Title from '../../components/utils/Title'

const Contact = () => {
    return (
        <div id="skills" className='flex flex-col text-center gap-[30px] py-[80px]'>
            <Title title="Contact" />

            <form className="flex justify-center self-center flex-col gap-[30px] w-[250px] sm-min:w-[500px]">
                <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Name"
                    required
                    className="border border-textBlack rounded-[30px] px-4 py-2 focus:outline-none"
                />
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    required
                    className="border border-textBlack rounded-[30px] px-4 py-2 focus:outline-none"
                />
                <textarea
                    name="message"
                    id="message"
                    placeholder="Message"
                    required
                    className="border border-textBlack rounded-[30px] resize-none px-4 py-2 h-32 focus:outline-none"
                ></textarea>
                <div className='flex justify-center'>
                    <input
                        className="bg-primary
                        text-textWhaite
                        font-bold
                        py-2
                        px-4
                        rounded-[30px]
                        cursor-point
                        focus:outline-none
                        w-[200px]"
                        type="submit"
                        value="Submit"
                    />
                </div>
            </form>
        </div>
    )
}

export default Contact