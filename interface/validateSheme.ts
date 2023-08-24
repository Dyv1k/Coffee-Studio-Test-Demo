import * as Yup from 'yup'

const phone_REG_EXP = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;

export const validateShemeSubscribe = Yup.object({
    email: Yup.string().email('Некорректный адрес почты')
        .max(256,'Поле "email" не должно быть больше 256 символов')
        .required('Это поле обязательно'),
})