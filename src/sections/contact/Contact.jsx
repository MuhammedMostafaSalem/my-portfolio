import React from 'react'
import Title from '../../components/utils/Title'
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

const Contact = () => {
    const { t } = useTranslation();
    const { isDarkMode } = useSelector(state => state.darkMode);

    return (
        <div id="skills" className='flex flex-col text-center gap-[30px] py-[80px]'>
            <Title title={t("Contact")} />

            <form className="flex justify-center self-center flex-col gap-[30px] w-[250px] sm-min:w-[500px]">
                <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder={t("Name")}
                    required
                    className={`border rounded-[30px] px-4 py-2 focus:outline-none bg-transparent
                    ${isDarkMode ? 'border-textWhaite' : 'border-textBlack'}`}
                />
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder={t("Email")}
                    required
                    className={`border rounded-[30px] px-4 py-2 focus:outline-none bg-transparent
                    ${isDarkMode ? 'border-textWhaite' : 'border-textBlack'}`}
                />
                <textarea
                    name="message"
                    id="message"
                    placeholder={t("Message")}
                    required
                    className={`border rounded-[30px] resize-none px-4 py-2 h-32 focus:outline-none bg-transparent
                    ${isDarkMode ? 'border-textWhaite' : 'border-textBlack'}`}
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
                        value={t("Submit")}
                    />
                </div>
            </form>
        </div>
    )
}

export default Contact