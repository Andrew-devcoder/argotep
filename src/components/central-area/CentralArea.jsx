import { useEffect } from "react";
import { useRooms, useTheme } from "../../state/state";
import { getDataFromServer } from "../../services/data-server/dataServer";
import { Header } from "../header/Header"
import { RoomList } from "../room/room-list/RoomList";
import { generationColor } from "../../services/generation-color/GenerationColor";

const CentralArea = () => {
	const { theme } = useTheme()

	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await getDataFromServer()
				const dataArray = data.data.array

				dataArray.some(room => room.rows.some(row => {
					if (row.bgColor == undefined) {
						row.bgColor = generationColor(theme)
					}
				}));

				useRooms.setState({ array: dataArray })
			} catch (error) {
				console.error("Error fetching data from server:", error);
			}
		};

		fetchData()
	}, [])

	return (
		<>
			<div data-theme={theme}>
				<Header />
				<RoomList />
			</div>
		</>
	)
}

export { CentralArea }