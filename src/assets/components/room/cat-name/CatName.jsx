import { useEffect, useRef } from 'react';
import style from './CatName.module.scss'

const CatName = ({ row, setName, onBlur }) => {

	const handleChange = (e) => {
		const inputValue = e.target.value;
		setName(inputValue);
	};

	console.log(row.name)

	const inputRef = useRef(null);

	useEffect(() => {
		if (inputRef.current) {
			inputRef.current.value = row.name;
		}
	}, [row.name]);


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