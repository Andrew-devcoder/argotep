import { useState } from "react"
import { getCatFact } from "../../../../services/cats/catfact.ninja"
import { useEffect } from "react"

const CatFat = ({ addNewRow }) => {

	const [listRows, setListRows] = useState([])

	useEffect(() => {
		const fetchData = async () => {
			try {
				const fact = await getCatFact();
				const newRow = <div key={fact}>{fact}</div>;
				setListRows((prevList) => [...prevList, newRow]);
			} catch (error) {
				console.error('get fact in component error:', error);
			}
		};

		if (addNewRow) {
			fetchData();
		}
	}, [addNewRow]);

	return (
		<>
			<div>
				<p>{listRows.map((row) => row)}</p>
			</div>
		</>
	)
}

export { CatFat }