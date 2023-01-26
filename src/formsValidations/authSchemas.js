import * as yup from 'yup'

const emailValidation = yup.string().email().required()
const passwordValidation = yup.string().required().max(50).min(6)

const loginSchema = yup.object().shape({
    email: emailValidation,
    password: yup.string().required()
})


const registerSchema = yup.object().shape({
    email: emailValidation,
    password: passwordValidation,
    repeatPassword: passwordValidation.test(
        'passwords-are-equal',
        'Passwords not match',
        (value, context) => {
            return value == context.parent.password
        },
    )
})




export { registerSchema, loginSchema }