import style from './CatBreed.module.scss'

const CatBreed = ({ handleChange, state }) => {

	const listBreedCats = [
		{ breed: "мейкун" },
		{ breed: "сіамська" },
		{ breed: "сфінкс" },
		{ breed: "бірманка" },
	]

	return (
		<>
			<select className={style.breed}
				onChange={(e) => {
					handleChange(e, 'select');
				}}
				value={state.select}
			>
				{listBreedCats.map((item, index) => (
					<option key={index} value={item.breed}>{item.breed}</option>
				))}
			</select>
		</>
	)
}

export { CatBreed }