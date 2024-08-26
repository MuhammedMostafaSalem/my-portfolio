import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setFormErrors, updateFormData } from '../store/reducer/contactReducer';
import { submitContactForm } from '../store/actions/contactAction';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';

const ContactData = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const { isDarkMode } = useSelector(state => state.darkMode);
    const { formData, status, error, formErrors } = useSelector(state => state.contact);

    const handleChange = (e) => {
        const { name, value } = e.target;
        dispatch(updateFormData({ [name]: value }));
    }

    const validateForm = () => {
        const errors = {};
        if (!formData.name.trim()) errors.name = t('Name required');
        if (!formData.email.trim()) errors.email = t('Email required');
        if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = t('Invalid email');
        if (!formData.message.trim()) errors.message = t('Message required');
        return errors;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validateForm(formData);

        if (Object.keys(errors).length === 0) {
            dispatch(submitContactForm(formData));
        } else {
            dispatch(setFormErrors(errors));
        }
    }

    useEffect(() => {
        if (status === 'succeeded') {
            toast.success(t('Message sent successfully'));
        } else if (status === 'failed' && error) {
            toast.error(`${t('Failed to send message')}: ${error}`);
        }
    }, [status, error]);

    return [
        t,
        isDarkMode,
        formData,
        handleChange,
        formErrors,
        handleSubmit
    ]
}

export default ContactData