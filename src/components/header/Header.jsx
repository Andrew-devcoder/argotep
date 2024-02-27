import { sendDataToServer } from '../../services/data-server/dataServer';
import { useDateToday, useKittens, useRooms } from '../../state/state';
import { ToggleTheme } from '../toggle-theme/ToggleTheme';

import style from './Header.module.scss'

const Header = () => {
	const { addNewRoom } = useRooms()
	const { today, setCheckedDate, setDisabledDate } = useDateToday()
	const { kittens, setCheckedKittens, setDisabledKittens } = useKittens()

	const sendData = async () => {
		await addNewRoom()

		useRooms.setState((state) => {
			sendDataToServer(state.array)
			return state
		})
	}

	return (
		<div className={style.wrapper}>
			<div className={style.nav}>

				<button onClick={sendData}>new room</button>

				<div>
					<input
						type='checkbox'
						id='today'
						name='today'
						checked={today}
						onChange={() => (today ? setDisabledDate() : setCheckedDate())}
					>
					</input>
					<label htmlFor="today">today</label>
				</div>

				<div>
					<input
						type='checkbox'
						id='kittens'
						name='kittens'
						checked={kittens}
						onChange={() => (kittens ? setDisabledKittens() : setCheckedKittens())}
					>

					</input>
					<label htmlFor="kittens">kittens</label>
				</div>

				<ToggleTheme />

			</div>

		</div >
	)
}

export { Header }