import style from './CatName.module.scss'

const CatName = ({ row, setName, onBlur }) => {

	const handleChange = (e) => {
		const inputValue = e.target.value;
		setName(inputValue);
	};



	return (
		<>
			<input
				className={style.inputName}
				placeholder="Name"
				onBlur={onBlur}
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