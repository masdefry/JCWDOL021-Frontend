import * as yup from 'yup';

export const createProductSchema = yup.object().shape({
    name: yup.string().required('Product name is required').max(100, 'Product name have maximum 100 characters'),
    price: yup.number().min(1, 'Product price have minimum value is 1').required('Product price is required')
})