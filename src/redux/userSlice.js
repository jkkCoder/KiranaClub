import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    id: null,
    username: null,
    stores: [],
  },
  reducers: {
    addUser: (state, action) => {
        state.id = action.payload.id
        state.username = action.payload.username
        state.stores = action.payload.stores
    }
  },
})

export const { addUser } = userSlice.actions

export default userSlice.reducer