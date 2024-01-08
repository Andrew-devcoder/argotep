import style from './CatBreed.module.scss'

const CatBreed = () => {

	const listBreedCats = [
		{ breed: "мейкун" },
		{ breed: "сіамська" },
		{ breed: "сфінкс" },
		{ breed: "бірманка" },
	]

	return (
		<>
			<select className={style.breed}>
				{listBreedCats.map((item, index) => (
					<option key={index} value={item.breed}>{item.breed}</option>
				))}
			</select>
		</>
	)
}

export { CatBreed }