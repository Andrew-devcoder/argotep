import { useEffect, useState } from 'react'
import { TableList } from '../table/table-list/TableList'

import style from './Header.module.scss'

const Header = () => {
	const [addNewTable, setAddNewTable] = useState(false);
	const [isTodayChecked, setTodayChecked] = useState(false);

	const handleNewTable = () => {
		setAddNewTable(true);
	};

	const handleCheckboxIsToday = () => {
		setTodayChecked(!isTodayChecked)
		console.log(isTodayChecked)
	}

	useEffect(() => {
		if (addNewTable) {
			setAddNewTable(false);
		}
	}, [addNewTable]);

	return (
		<>
			<div className={style.wrapper}>
				<div className={style.nav}>
					<button onClick={handleNewTable}>new block</button>

					<div>
						<input type='checkbox' id='today' name='today' checked={isTodayChecked} onChange={handleCheckboxIsToday}></input>
						<label htmlFor="today">today</label>
					</div>

					<div>
						<input type='checkbox' id='kittens' name='kittens'></input>
						<label htmlFor="kittens">kittens</label>
					</div>
				</div>


				<TableList addNewTable={addNewTable} isTodayChecked={isTodayChecked} />
			</div>
		</>
	)
}

export { Header }