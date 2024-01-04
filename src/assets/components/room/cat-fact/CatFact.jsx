import { useState } from "react"
import { getCatFact } from "../../../../services/cats/catfact.ninja"
import { useEffect } from "react"

const CatFat = () => {
	const [catFact, setCatFat] = useState('')

	useEffect(() => {
		const fetchData = async () => {
			try {
				const fact = await getCatFact();
				setCatFat(fact);
			} catch (error) {
				console.error('get fact in component error:', error)
			}
		}

		fetchData()
	}, [])

	return (
		<>
			<div>
				<p>{catFact}</p>
			</div>
		</>
	)
}

export { CatFat }