import { useState } from "react"
import { useEffect } from "react"
import { getCatFact } from "../../../../services/cats/catfact.ninja"

import style from './CatFact.module.scss'

const CatFat = ({ item }) => {
	const [fact, setFact] = useState('')

	useEffect(() => {
		const fetchData = async () => {
			try {
				const getFact = await getCatFact();
				console.log(getFact)
				setFact(getFact)
			} catch (error) {
				console.error('get fact in component error:', error);
			}
		};

		if (item) {
			fetchData();
		}
	}, [item]);

	return (
		<>
			{fact}
		</>
	)
}

export { CatFat }