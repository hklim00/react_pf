import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchMembers = createAsyncThunk(
	'members/requestMembers',
	async () => {
		const url = process.env.PUBLIC_URL + '/DB/members.json';

		const response = await axios.get(url);
		return response.data.members;
	}
);

const memberSlice = createSlice({
	name: 'members',
	initialState: {
		data: [],
		isLoding: false,
	},

	extraReducers: {
		[fetchMembers.pending]: (state) => {
			state.isLoding = true;
		},
		[fetchMembers.fulfilled]: (state, action) => {
			state.isLoding = false;
			state.data = action.payload;
		},
		[fetchMembers.rejected]: (state) => {
			state.isLoding = false;
		},
	},
});

export default memberSlice.reducer;
