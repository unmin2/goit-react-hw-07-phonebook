import { createSlice, nanoid } from '@reduxjs/toolkit';

export const sliceContact = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    add(state, action) {
      state.push({
        id: nanoid(),
        name: action.payload.name,
        number: action.payload.number,
      });
    },

    remove(state, action) {
      return state.filter(item => item.id !== action.payload.id);
    },
  },
});

export const { add, remove } = sliceContact.actions;