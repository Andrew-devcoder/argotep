import style from './CatName.module.scss'

const CatName = ({ handleChange, state }) => {


	return (
		<>
			<input
				className={style.inputName}
				placeholder="Name"
				onChange={(e) => {
					handleChange(e, 'name')
				}
				}
				value={state.name}
			/>
		</>
	)
}
export { CatName }