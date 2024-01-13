import { useState } from "react";

import style from './CatAge.module.scss'

const CatAge = ({ row, handleChange, state }) => {

	const [value, setValue] = useState('');

	const handleInputChange = (e) => {
		const inputValue = e.target.value;

		if (/^\d{0,2}([.,]\d{0,1})?$/.test(inputValue)) {
			setValue(inputValue);
			handleChange({ target: { value: inputValue } }, 'age');
		}
	};

	return (
		<>
			<input
				type="number"
				step="0.1"
				placeholder='age'
				value={value}
				onChange={handleInputChange}
				className={style.inputAge}
			/>

		</>
	)
}

export { CatAge }