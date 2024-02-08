import { useEffect } from "react";
import { useRooms } from "../../state/state";
import { getDataFromServer } from "../../services/data-server/dataServer";
import { Header } from "../header/Header"
import { RoomList } from "../room/room-list/RoomList";
import { useState } from "react";

const CentralArea = () => {

	const [isDark, setIsDark] = useState(true)

	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await getDataFromServer()
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
			<div data-theme={isDark ? "dark" : "light"}>
				<Header isChecked={isDark} handleChangeMode={() => setIsDark(!isDark)} />
				<RoomList />
			</div>
		</>
	)
}

export { CentralArea }