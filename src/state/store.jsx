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
	},

	saveServer: async () => {
		try {
			const sendData = { array: [...state.array] };
			const response = await fetch('http://localhost:3001/saveData', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(sendData),
			});

			if (response.ok) {
				console.log('Data saved successfully!');
			} else {
				console.error('Failed to save data.');
			}
		} catch (error) {
			console.error('Error while saving data:', error);
		}
	}

}))