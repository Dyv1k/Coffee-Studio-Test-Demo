import React, { useState, FC, forwardRef, useEffect, ReactNode } from "react";
import { ChangeHandler, FieldValues, UseFormSetValue } from "react-hook-form";
import Image from "next/image";

import pagination_arrow from 'public/images/icons/pagination_arrow.svg'

import style from './Dropdown.module.scss'

type DropdownProps = {
	placeholder?: string,
    name: string,
    status?: 'active' | 'disable'
    error:  boolean,
    errorMessage: string | undefined,
    onChange: ChangeHandler,
    onBlur: ChangeHandler,
    ref: React.Ref<any> | undefined,
	initialValue: string,
	values: string[],
	setValue: UseFormSetValue<FieldValues>
}

const Dropdown: FC<DropdownProps> = forwardRef((
    {
        placeholder,
        name,
        status = 'active',
        error,
        onChange,
        onBlur, 
        errorMessage,
		initialValue,
		values,
		setValue
    }, ref): ReactNode => {

	const [isActive, setIsActive] = useState(false);
	const [selected, setIsSelected] = useState(initialValue);

	const setItems = () => {
		return values.map((item, index)=>{
			return(
				<div
					key={index}
					onClick={() => {
						setIsSelected(item);
						setIsActive(!isActive);
					}}
					className={style["dropdown-content__item"]}
				>
					{item}
				</div>
			)
		})
	}

	useEffect(()=>{
		if (selected) {
			setValue(name, selected)
		}
	}, [selected])

	return (
		<div className={isActive ? `${style["dropdown"]} ${style["dropdown_active"]}` : style["dropdown"]}>
			<input
				type="hidden"
				ref={ref}
				name={name}
				onChange={onChange}
                onBlur={onBlur}
				placeholder={placeholder}
			/>
			<div
				onClick={() => setIsActive(!isActive)}
				className={style["dropdown-btn"]}
			>
				<p>{error? errorMessage : selected}</p>
				<Image {...pagination_arrow} />
			</div>
			<div
				className={style["dropdown-content"]}
				style={{ display: isActive ? "block" : "none" }}
			>
				<div className={style["dropdown-content__wrapper"]}>
					{setItems()}
				</div>
			</div>
		</div>
	)
})

export default Dropdown;