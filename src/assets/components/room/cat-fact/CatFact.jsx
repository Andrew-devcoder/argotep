import { useState } from "react"
import { getCatFact } from "../../../../services/cats/catfact.ninja"
import { useEffect } from "react"

const CatFat = ({ addNewRow, currentOrderNumber }) => {

	const [listRows, setListRows] = useState([])

	useEffect(() => {
		const fetchData = async () => {
			try {
				const fact = await getCatFact();
				const newRow = <div key={fact}>{currentOrderNumber}. {fact}</div>;
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
			{listRows.map((row) => row)}
		</>
	)
}

export { CatFat }