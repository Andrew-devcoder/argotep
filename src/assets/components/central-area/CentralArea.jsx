import { useEffect } from "react";
import { useRooms } from "../../../state/state";
import { getDataFromServer } from "../../../services/send-data-to-server/sendDataToServer";
import { Header } from "../header/Header"
import { TableList } from "../table/table-list/TableList"

const CentralArea = () => {

	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await getDataFromServer()
				console.log(data)
				const dataArray = data.data.array
				useRooms.setState({ array: dataArray })
			} catch (error) {
				console.error("Error fetching data from server:", error);
			}
		};

		fetchData()
	}, [])

	return (
		<>
			<div>
				<Header />
				<TableList />
			</div>
		</>
	)
}

export { CentralArea }