const CatName = ({ row, setRow }) => {
	return (
		<>
			<input placeholder="Name"
				onChange={e => setRow(prev => ({ ...prev, name: e.target.value }))}
				value={''}
			/>
		</>
	)
}
export { CatName }