import { useEffect } from "react";
import { useRooms } from "../../state/state";
import { getDataFromServer } from "../../services/data-server/dataServer";
import { Header } from "../header/Header"
import { RoomList } from "../room/room-list/RoomList";

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
				<RoomList />
			</div>
		</>
	)
}

export { CentralArea }