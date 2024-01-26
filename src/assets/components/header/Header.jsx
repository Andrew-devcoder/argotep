import { sendDataToServer } from '../../../services/send-data-to-server/sendDataToServer';
import { useCheckbox, useTables } from '../../../state/store';

import style from './Header.module.scss'

const Header = () => {

	// test for use new table 
	const { addTable } = useTables()

	const { box, setChecked, setDisabled } = useCheckbox()

	const sendData = async () => {
		await addTable()

		useTables.setState((state) => {
			console.log(state, state.array)
			sendDataToServer(state.array)
			return state
		})
	}

	return (
		<>
			<div className={style.wrapper}>
				<div className={style.nav}>

					<button onClick={() => sendData()}>add new table</button>

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