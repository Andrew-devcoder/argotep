import { useEffect, useState } from 'react'
import style from './CatBreed.module.scss'

const CatBreed = ({ row, onBlur }) => {

	const [value, setValue] = useState('')

	useEffect(() => {
		if (row.breed) {
			console.log(true)
			setValue(row.breed)
		} else {
			console.log(false)
			setValue('')
		}
	}, [])

	const listBreedCats = [
		{ breed: "" },
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
			<select className={style.breed}
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