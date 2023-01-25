import * as yup from 'yup'

const emailValidation = yup.string().email().required()
const passwordValidation = yup.string().required().max(14).min(3) 

const loginSchema = yup.object().shape({
    email: emailValidation,
    password: yup.string().required().max(14).min(3)
})


const registerSchema = yup.object().shape({
    email: emailValidation,
    password: passwordValidation,
    repeatPassword: passwordValidation
})


export {registerSchema, loginSchema}