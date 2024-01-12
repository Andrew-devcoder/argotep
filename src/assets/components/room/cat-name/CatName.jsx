import style from './CatName.module.scss'

const CatName = ({ row, setRow }) => {
	return (
		<>
			<input
				className={style.inputName}
				placeholder="Name"
				onChange={e => setRow(prev => ({ ...prev, name: e.target.value }))}
				value={''}
			/>
		</>
	)
}
export { CatName }