import { useEffect } from "react";
import { useRooms, useTheme } from "../../state/state";
import { getDataFromServer } from "../../services/data-server/dataServer";
import { Header } from "../header/Header"
import { RoomList } from "../room/room-list/RoomList";

const CentralArea = () => {
	const { theme } = useTheme()

	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await getDataFromServer()
				const dataArray = data.data.array
				// dataArray.map((item)=>{
				// if (item == "rows") {
				// item.map((row) => {
				// 	RowList.bgColor = genColor()

				// })
				// }

				// })

				console.log(dataArray)
				useRooms.setState({ array: dataArray })
			} catch (error) {
				console.error("Error fetching data from server:", error);
			}
		};

		fetchData()
	}, [])

	//  func gen color array.map row -> add bg color 

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