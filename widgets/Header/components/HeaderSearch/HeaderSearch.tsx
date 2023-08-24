import { FC, ReactNode, forwardRef, useEffect, useState } from "react";
import { validateShemeSubscribe } from "@/interface/validateSheme";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import ru from 'date-fns/locale/ru';
import DatePicker from "react-datepicker";

import Dropdown from "@/UI/Dropdown/Dropdown";

import { searchParams } from "../../config";

import style from '../../Header.module.scss'

const HeaderSearch: FC = () => {

    const [activeTag, setActiveTag] = useState<string>(searchParams[0].tag)
    const [fetchStatus, setFetchStatus] = useState(false)

    const {
        register,
        reset,
        setValue,
        control,
        formState: {
            errors,
        },
        handleSubmit
    } = useForm({
        // resolver: yupResolver(validateShemeSubscribe)
    })

    const onSubmit = async (value: any) => {
        if (value) {
            alert('Thank you for your feedback! Check console!')
            console.log(value)
            setFetchStatus(true)
        }
        else {
            alert(`Error! Check if the server is on`)
            setFetchStatus(false)
        }
    }

    const setTags = (): ReactNode => {
        return searchParams.map((item, index) => {
            return (
                <button
                    className={
                        activeTag === item.tag ?
                            `${style["header-search__tags-item"]} ${style["header-search__tags-item_active"]}`
                            : style["header-search__tags-item"]
                    }
                    key={index}
                    onClick={() => activeTag !== item.tag ? setActiveTag(item.tag) : null}
                >
                    {item.tag}
                </button>
            )
        })
    }

    const date = new Date()

    const setFields = () => {
        const currentFields = searchParams.filter((item) => item.tag === activeTag)
        if (currentFields[0].inputs) {
            return currentFields[0].inputs.map((item, index) => {
                switch (item.type) {
                    case 'select':
                        return (
                            <div className={style["header-search__form__field"]}>
                                <Dropdown
                                    error={Boolean(errors[item.name]?.message)}
                                    errorMessage={errors[item.name]?.message?.toString()}
                                    status={"active"}
                                    placeholder={item.placeholder}
                                    {...register(item.name, { required: true })}
                                    initialValue={item.list ? item.list[0] : ''}
                                    values={item.list ? item.list : []}
                                    setValue={setValue}
                                />
                            </div>
                        )
                        break;
                    case 'date':
                        return (
                            <div className={style["header-search__form__field"]}>
                                <Controller
                                    control={control}
                                    name={item.name}
                                    render={({ field }) => (
                                        <DatePicker
                                            placeholderText={item.placeholder}
                                            onChange={(date) => field.onChange(date)}
                                            selected={field.value}
                                            locale={ru}
                                            minDate={date}
                                        />
                                    )}
                                />
                            </div>
                        )
                        break;
                    default:
                        break;
                }
            })
        }
    }

    useEffect(() => {
        if (fetchStatus) {
            reset()
            setFetchStatus(false)
        }
    }, [fetchStatus])

    return (
        <div className={style["header-search"]}>
            <div className={style["header-search__tags"]}>
                {setTags()}
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className={style["header-search__form"]}>
                {setFields()}
                <button type="submit" className={style["header-search__form__button"]}>12 вариантов</button>
            </form>
        </div>
    )
}

export default HeaderSearch