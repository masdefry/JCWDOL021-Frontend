import * as Yup from 'yup';

export const registerValidationSchema = Yup.object({
    username: Yup.string().required('Username is required'),
    email: Yup.string().email('Email format is invalid'),
    password: Yup.string().required('Password is required')
})