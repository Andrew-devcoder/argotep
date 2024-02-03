export const NameRoom = ({ room, setName, onBlur }) => {

	const handleChange = (e) => {
		const inputValue = e.target.value;
		setName(inputValue);
	};

	return (
		<>
			<input
				type="text"
				placeholder="Name room"
				onBlur={onBlur}
				onChange={(e) => {
					handleChange(e, 'name')
				}}
				value={room.nameRoom || ''}
			/>
		</>
	)
}