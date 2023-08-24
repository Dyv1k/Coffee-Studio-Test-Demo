import { FC, useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useForm, useWatch } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import Button from '@/UI/Button/Button'
import { Input } from '@/UI/Input/Input'

import { validateShemeSubscribe } from '@/interface/validateSheme'

import image from 'public/images/Subscribe/image.png'

import style from './Subscribe.module.scss'

const Subscribe: FC = () => {

    const [fetchStatus, setFetchStatus] = useState(false)

    const {
        register,
        reset,
        formState: {
            errors,
        },
        handleSubmit
    } = useForm({
        resolver: yupResolver(validateShemeSubscribe)
    })

    const onSubmit = async (value: any) => {
        if (value){
            alert('Thank you for your feedback! Check console!')
            console.log(value)
            setFetchStatus(true)
        }
        else{
            alert(`Error! Check if the server is on`)
            setFetchStatus(false)
        }
    }

    useEffect(()=>{
        if (fetchStatus) {
            reset()
            setFetchStatus(false)
        }
    }, [fetchStatus])

    return(
        <section className={style["subscribe"]}>
            <div className="container">
                <div className={style["subscribe__block"]}>
                    <div className={style["subscribe__block__wrapper"]}>
                        <h2 className="title title_subscribe">Подписка на хорошие новости</h2>
                        <p className={style["subscribe__block__description"]}>Оставьте адрес эл. почты и мы будем присылать вам наши обновления, специальные предложения и просто хорошие новости про путешествия</p>
                        <form onSubmit={handleSubmit(onSubmit)} className={style["subscribe__block__form"]}>
                            <Input
                                type={'email'}
                                error={Boolean(errors['email']?.message)}
                                errorMessage={errors['email']?.message?.toString()}
                                status={"active"}
                                placeholder={'Адрес эл. почты'}
                                {...register('email', { required: true })}
                            />
                            <Button color='orange' type='submit' size='large'>Подписаться</Button>
                        </form>
                        <p className={style["subscribe__block__policy"]}>
                            Нажимая на кнопку «Заказать» вы соглашаетесь с <Link href={'#'}>политикой конфиденциальности</Link>
                        </p>
                    </div>
                    <Image className={style["subscribe__block__image"]} {...image} alt='Подписка изображение'/>
                </div>
            </div>
        </section>
    )
}

export default Subscribe