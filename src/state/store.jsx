import { create } from 'zustand';

// export const useStore = create((set) => ({
// 	count: 0,
// 	increment: () => set((state) => ({ count: state.count + 1 })),
// 	decrement: () => set((state) => ({ count: state.count - 1 })),
// }));



export const useTables = create((set) => ({
	array: [],

	addTable: () => {
		set((state) => {
			const newId = state.array.length + 1
			const newTable = { tableId: newId, rows: [] }
			return { array: [...state.array, newTable] }
		})
	},

	addRow: (table) => {
		set((state) => {
			const updatedArray = state.array.map((t) => {
				if (t === table) {
					const newRows = [...(t.rows || []), { rowId: t.rows ? t.rows.length + 1 : 1 }];
					// console.log('Updated Rows:', newRows); // Додайте вивід в консоль для перевірки
					return { ...t, rows: newRows }
				}
				return t
			})
			return { array: updatedArray }
		})
	},

	deleteTable: (tableId) => {
		set((state) => {
			const updatedArray = state.array.filter((table) => table.tableId !== tableId)

			// Оновити tableId в усіх залишених об'єктах
			const updatedArrayWithCorrectIds = updatedArray.map((table, index) => ({
				...table,
				tableId: index + 1,
			}))

			return { array: updatedArrayWithCorrectIds }
		})
	},

	deleteRow: (tableId, rowId) => {
		set((state) => {
			const updatedArray = state.array.map((table) => {
				console.log(table)

				if (table.tableId === tableId) {
					const updatedRows = table.rows.filter((row) => row.rowId !== rowId)

					const updatedRowsWithCorrectIds = updatedRows.map((row, index) => ({
						...row,
						rowId: index + 1,
					}));

					return { ...table, rows: updatedRowsWithCorrectIds }
				}

				console.log(table)

				return table;
			});

			console.log(tableId, rowId)

			return { array: updatedArray }
		})
	}

}))