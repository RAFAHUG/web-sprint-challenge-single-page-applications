import * as yup from 'yup'

const formSchema = yup.object().shape({
    username:yup
    .string()
    .trim()
    .required('Name is required')
    .min(2, "name must be at least 2 characters"),
    specialInstructions:yup
    .string()
    .trim()
    .required('Must specify type of sauce'),
    size:yup
    .string()
    .oneOf(['small', 'medium', 'large', 'x-large'], 'Size is required'),
    pepperoni:yup.boolean(),
    greenPepper:yup.boolean(),
    blackOlives:yup.boolean(),
    pineapple:yup.boolean(),
})

export default formSchema