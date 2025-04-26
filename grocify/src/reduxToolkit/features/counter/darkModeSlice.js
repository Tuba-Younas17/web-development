import { createSlice } from "@reduxjs/toolkit";


const initialState = {
	darkMode: false, // false = light mode by default
};

const darkModeSlice = createSlice({
	name: "darkMode",
	initialState,
	reducers: {
		toggleDarkMode: (state) => {
			state.darkMode = !state.darkMode;
		},
	},
});

export const { toggleDarkMode } = darkModeSlice.actions;
export default darkModeSlice.reducer;
