import style from './CatName.module.scss'

const CatName = ({ row, setName }) => {

	const handleChange = (e) => {
		const inputValue = e.target.value;
		setName(inputValue);
	};



	return (
		<>
			<input
				className={style.inputName}
				placeholder="Name"
				onChange={(e) => {
					handleChange(e, 'name')
				}
				}
				value={row.name || ''}
			/>
		</>
	)
}
export { CatName }