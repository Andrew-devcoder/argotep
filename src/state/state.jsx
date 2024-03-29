import { create } from 'zustand';

export const useDateToday = create((set) => ({
	today: false,

	setCheckedDate: () => {
		set(() => ({ today: new Date() }))
	},

	setDisabledDate: () => {
		set(() => ({ today: false }))
	},
}));

export const useKittens = create((set) => ({
	kittens: false,

	setCheckedKittens: () => {
		set(() => ({ kittens: true }))
	},

	setDisabledKittens: () => {
		set(() => ({ kittens: false }))
	},
}));

export const useTheme = create((set) => ({
	theme: "dark",

	setIsLight: () => {
		set(() => ({ theme: "light" }))
	},

	setIsDark: () => {
		set(() => ({ theme: "dark" }))
	}
}))


export const useRooms = create((set) => ({
	array: [],

	addNewRoom: () => {
		set((state) => {
			const NewRoom = {
				nameRoom: '', rows: []
			}
			return { array: [...state.array, NewRoom] }
		})
	},

	addRow: (room) => {
		set((state) => {
			const updatedArray = state.array.map((r) => {
				if (r === room) {
					const newRows = [...(r.rows || []), {
						// rowId: t.rows ? t.rows.length + 1 : 1 
					}];
					return { ...r, rows: newRows }
				}
				return r
			})
			return { array: updatedArray }
		})
	},

	delRoom: (index) => {
		set((state) => {
			const updatedArray = state.array.filter((_, i) => i !== index);
			return { array: updatedArray || [] };
		});
	},

	delRow: (checkIndex) => {
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

}))
