import { useCheckbox, useTables } from '../../../state/store';

import style from './Header.module.scss'

const Header = () => {

	// test for use new table 
	const { addTable } = useTables()

	const { box, setChecked, setDisabled } = useCheckbox()

	return (
		<>
			<div className={style.wrapper}>
				<div className={style.nav}>

					<button onClick={addTable}>add new table</button>

					<div>
						<input
							type='checkbox'
							id='today'
							name='today'
							checked={box}
							onChange={() => (box ? setDisabled() : setChecked())}
						>
						</input>
						<label htmlFor="today">today</label>
					</div>

					<div>
						<input type='checkbox' id='kittens' name='kittens'></input>
						<label htmlFor="kittens">kittens</label>
					</div>
				</div>

			</div>
		</>
	)
}

export { Header }