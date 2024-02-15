export const generationColor = (theme) => {
	const r = Math.floor(Math.random() * 256);
	const g = Math.floor(Math.random() * 256);
	const b = Math.floor(Math.random() * 256);

	let a = 1

	if (theme === 'dark') {
		a = 0.6;
	} else {
		a = 1
	}

	return `rgb(${r}, ${g}, ${b}, ${a})`;
};
