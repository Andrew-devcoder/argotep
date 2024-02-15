import { useEffect, useState } from 'react'
import style from './CatBreed.module.scss'
import { useTheme } from '../../../state/state'

const CatBreed = ({ row, onBlur }) => {
	const [value, setValue] = useState('')
	const { theme } = useTheme()


	useEffect(() => {
		if (row.breed) {
			setValue(row.breed)
		} else {
			setValue('')
		}
	}, [])

	const listBreedCats = [
		{ breed: "choose breed..." },
		{ breed: "мейкун" },
		{ breed: "сіамська" },
		{ breed: "сфінкс" },
		{ breed: "бірманка" },
	]

	const handleChange = (e) => {
		const inputValue = e.target.value;
		setValue(inputValue);
		row.breed = inputValue
	}

	return (
		<>
			<select
				data-theme={theme}
				className={style.breed}
				onChange={(e) => {
					handleChange(e, 'select');
				}}
				value={value}
				onBlur={onBlur}
			>
				{listBreedCats.map((item, index) => (
					<option
						key={index}
						value={item.breed}
					>
						{item.breed}
					</option>
				))}
			</select>
		</>
	)
}

export { CatBreed }