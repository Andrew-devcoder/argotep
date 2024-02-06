import { useEffect, useState } from "react";

import style from './CatAge.module.scss'

const CatAge = ({ row, onBlur }) => {
	const [value, setValue] = useState('');

	useEffect(() => {
		if (row.age) {
			setValue(row.age)
		} else {
			setValue('')
		}
	}, [])

	const handleInputChange = (e) => {
		const inputValue = e.target.value;

		if (/^\d{0,2}([.,]\d{0,1})?$/.test(inputValue)) {
			setValue(inputValue);
			row.age = inputValue
		}
	};

	return (
		<>
			<input
				className={style.inputAge}
				type="number"
				step="0.1"
				placeholder='age'
				onBlur={onBlur}
				value={value}
				onChange={handleInputChange}
			/>

		</>
	)
}

export { CatAge }