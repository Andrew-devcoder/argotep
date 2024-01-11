import { useEffect, useState } from 'react'
import { TableList } from '../table/table-list/TableList'

import style from './Header.module.scss'

const Header = ({ setCount }) => {

	const [checkToday, setCheckToday] = useState(null);

	const toggleEvent = () => {
		if (checkToday) {
			setCheckToday(null);
			console.log(checkToday)
		} else {
			setCheckToday(new Date());
			console.log(checkToday)
		}
	};

	return (
		<>
			<div className={style.wrapper}>
				<div className={style.nav}>

					<button onClick={() => setCount(count => count + 1)}>new block</button>

					<div>
						<input
							type='checkbox'
							id='today'
							name='today'
							checked={checkToday == null}
							onChange={toggleEvent}
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