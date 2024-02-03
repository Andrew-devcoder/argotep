import { create } from 'zustand';

export const useCheckbox = create((set) => ({
	box: false,

	setChecked: () => {
		set(() => ({ box: true }))
		console.log('true')
	},

	setDisabled: () => {
		set(() => ({ box: false }))
		console.log('false')
	},
}));


export const useRooms = create((set) => ({
	array: [],

	addNewRoom: () => {
		set((state) => {
			// const newId = state.array.length + 1
			const NewRoom = {
				nameRoom: '', rows: []
			}
			return { array: [...state.array, NewRoom] }
		})
	},

	addRow: (table) => {
		set((state) => {
			const updatedArray = state.array.map((t) => {
				if (t === table) {
					const newRows = [...(t.rows || []), { rowId: t.rows ? t.rows.length + 1 : 1 }];
					return { ...t, rows: newRows }
				}
				return t
			})
			return { array: updatedArray }
		})
	},

	delRoom: (tableId) => {
		set((state) => {
			const updatedArray = state.array.filter((table) => table.tableId !== tableId)

			const updatedArrayWithCorrectIds = updatedArray.map((table, index) => ({
				...table,
				tableId: index + 1,
			}))

			return { array: updatedArrayWithCorrectIds }
		})
	},

	delRow: (tableId, rowId) => {
		set((state) => {
			const updatedArray = state.array.map((table) => {
				if (table.tableId === tableId) {
					const updatedRows = table.rows.filter((row) => row.rowId !== rowId)

					console.log('після видалення рядка, стан масива: ', updatedRows)

					const updatedRowsWithCorrectIds = updatedRows.map((row, index) => ({
						...row,
						rowId: index + 1,
					}));

					console.log('переписали всі id рядків :', updatedRowsWithCorrectIds)

					return { ...table, rows: updatedRowsWithCorrectIds }
				}
				return table;
			});
			return { array: updatedArray }
		})
	},

	updateRoomName: (newName, room) => {
		set((state) => {
			const updatedArray = state.array.map((prevRoom) => {
				if (prevRoom === room) {
					prevRoom.nameRoom = newName
					return state
				}
				return
			});
			return { array: updatedArray };
		});
	},


	updateRowName: (tableId, rowId, name) => {
		set((state) => {
			const updatedArray = state.array.map((table) => {
				if (table.tableId === tableId) {
					const updatedRows = table.rows.map((row) => {
						if (row.rowId === rowId) {
							const newRows = { ...row, name }
							console.log("begin update row name:", newRows)
							return newRows;
						}
						return row;
					});
					return { ...table, rows: updatedRows };
				}
				return table;
			});
			return { array: updatedArray };
		});
	},
}))

// export const useServer = create((set) => ({

// 	saveServer: async (array) => {
// 		try {
// 			const sendData = { array: [...array] };
// 			const response = await fetch('http://localhost:3001/saveData', {
// 				method: 'POST',
// 				headers: {
// 					'Content-Type': 'application/json',
// 				},
// 				body: JSON.stringify(sendData),
// 			});

// 			if (response.ok) {
// 				console.log('Data saved successfully!');
// 			} else {
// 				console.error('Failed to save data.');
// 			}
// 		} catch (error) {
// 			console.error('Error while saving data:', error);
// 		}
// 	},
// }));
