import { useState, useEffect } from "react"
import { useRooms } from "../../../state/state"
import { getCatFact } from "../../../services/cats/catfact.ninja"
import { sendDataToServer } from "../../../services/data-server/dataServer"

// import style from './CatFact.module.scss'

const CatFact = ({ row }) => {
	const [fact, setFact] = useState('')
	const { array } = useRooms()

	useEffect(() => {
		const fetchData = async () => {
			try {
				const getFact = await getCatFact();
				row.fact = getFact
				setFact(getFact)

				sendDataToServer(array)

			} catch (error) {
				console.error('get fact in component error:', error);
				throw error;
			}
		};

		if (!row.fact) {
			fetchData();
		} else {
			setFact(row.fact)
		}

	}, []);

	return (
		<>
			<div>{fact}</div>
		</>
	)
}

export { CatFact }