import { create } from 'zustand';

export const useStore = create((set) => ({
	count: 0,
	increment: () => set((state) => ({ count: state.count + 1 })),
	decrement: () => set((state) => ({ count: state.count - 1 })),
}));



export const useTables = create((set) => ({
	array: [],

	addTable: () => {
		console.log('click')
		set((state) => {
			const newId = state.array.length + 1
			const newTable = { tableId: newId, rows: [] }
			return { array: [...state.array, newTable] }
		})
	}

}))