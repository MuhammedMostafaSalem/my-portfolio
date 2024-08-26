import React, { useEffect } from 'react'
import Title from '../../components/utils/Title'
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { submitContactForm } from '../../store/actions/contactAction';
import { setFormErrors, updateFormData } from '../../store/reducer/contactReducer';
import { toast } from 'react-toastify';
import ContactData from '../../data/ContactData';

const Contact = () => {
    const [
        t,
        isDarkMode,
        formData,
        handleChange,
        formErrors,
        handleSubmit
    ] = ContactData();


    return (
        <div id="skills" className='flex flex-col text-center gap-[30px] py-[80px]'>
            <Title title={t("Contact")} />

            <form onSubmit={handleSubmit} className="flex justify-center self-center flex-col gap-[30px] w-[250px] sm-min:w-[500px]">
                <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder={t("Name")}
                    required
                    className={`border rounded-[30px] px-4 py-2 focus:outline-none bg-transparent
                    ${isDarkMode ? 'border-textWhaite text-textWhaite' : 'border-textBlack text-textBlack'}`}
                    value={formData.name}
                    onChange={handleChange}
                />
                {formErrors.name && <p className="text-red-500 text-sm ">{formErrors.name}</p>}
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder={t("Email")}
                    required
                    className={`border rounded-[30px] px-4 py-2 focus:outline-none bg-transparent
                    ${isDarkMode ? 'border-textWhaite text-textWhaite' : 'border-textBlack text-textBlack'}`}
                    value={formData.email}
                    onChange={handleChange}
                />
                {formErrors.email && <p className="text-red-500 text-sm">{formErrors.email}</p>}
                <textarea
                    name="message"
                    id="message"
                    placeholder={t("Message")}
                    required
                    className={`border rounded-[30px] resize-none px-4 py-2 h-32 focus:outline-none bg-transparent
                    ${isDarkMode ? 'border-textWhaite text-textWhaite' : 'border-textBlack text-textBlack'}`}
                    value={formData.message}
                    onChange={handleChange}
                ></textarea>
                {formErrors.message && <p className="text-red-500 text-sm">{formErrors.message}</p>}
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
                        onClick={handleSubmit}
                    />
                </div>
            </form>
        </div>
    )
}

export default Contact