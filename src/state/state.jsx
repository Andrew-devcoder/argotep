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

	delRoom: (roomId) => {
		set((state) => {
			const updatedArray = state.array.filter((room) => room.id !== roomId)

			const updatedArrayWithCorrectIds = updatedArray.map((room, index) => ({
				...room,
				id: index + 1,
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

	removeRoom: (index) => {
		set((state) => {
			const updatedArray = state.array.filter((_, i) => i !== index);
			return { array: updatedArray };
		});
	},


	removeRow: (checkIndex) => {
		set((state) => {
			console.log(state.array)
			const updatedArray = state.array.map((room, index) => {
				const roomIndex = index.toString();
				const updatedRows = room.rows.filter((row, index) => {
					const rowIndex = index.toString();
					const roomPlusRow = rowIndex + roomIndex;
					return roomPlusRow !== checkIndex;
				});
				return { ...room, rows: updatedRows };
			});
			return { array: updatedArray };
		});
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


	updateRowName: (rowId, name) => {
		set((state) => {
			const updatedArray = state.array.map((table) => {
				const updatedRows = table.rows.map((row) => {
					if (row.rowId === rowId) {
						const newRows = { ...row, name }
						console.log("begin update row name:", newRows)
						return newRows;
					}
					return row;
				});
				return { ...table, rows: updatedRows };
			});
			return { array: updatedArray };
		});
	},

	updateRowData: (row, date) => {
		set(() => {
			row.date = date
		})
	}
}))
