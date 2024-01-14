import { useState } from "react"
import { useEffect } from "react"
import { getCatFact } from "../../../../services/cats/catfact.ninja"

import style from './CatFact.module.scss'

const CatFact = ({ row }) => {
	const [fact, setFact] = useState('')

	useEffect(() => {
		const fetchData = async () => {
			try {
				const getFact = await getCatFact();
				setFact(getFact)
			} catch (error) {
				console.error('get fact in component error:', error);
				throw error;
			}
		};

		if (row) {
			fetchData();
		}
	}, [row]);

	return (
		<>
			<p>
				{fact}
			</p>
		</>
	)
}

export { CatFact }