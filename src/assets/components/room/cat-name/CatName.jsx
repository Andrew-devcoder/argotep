import style from './CatName.module.scss'

const CatName = ({ row }) => {


	return (
		<>
			<input
				className={style.inputName}
				placeholder="Name"
				onChange={(e) => {
					handleChange(e, 'name')
				}
				}
				value={row.name}
			/>
		</>
	)
}
export { CatName }