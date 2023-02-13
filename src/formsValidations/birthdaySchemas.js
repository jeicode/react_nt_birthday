import * as yup from 'yup'


const birthdayFormSchema = yup.object().shape({
    name: yup.string().required(),
    lastname: yup.string().required(),
    birthDate: yup.string().required()
})


export { birthdayFormSchema }