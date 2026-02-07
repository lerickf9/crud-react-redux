import { createSlice, type PayloadAction } from "@reduxjs/toolkit";


export type UserId = string

export interface User {
    name: string;
    email: string;
    github: string
}
export interface UserWithId extends User {
    id: UserId;
}

const initialState: UserWithId[] = [
{
    id: "1",
    name: "Erick",
    email: "efuentes.edf9@gmail.com",
    github: "lerickf9"
  },
  {
    id: "2",
    name: "Moure",
    email: "moure@gmail.com",
    github: "mouredev"
  },
  {
    id: "3",
    name: "GG",
    email: "midudev@gmail.com",
    github: "midudev"
  },
  {
    id: "3",
    name: "GG",
    email: "torvalds@gmail.com",
    github: "torvalds"
  },


]

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers:{
        deleteUserById: (state, action: PayloadAction<UserId>) =>{
            const id = action.payload;
            return state.filter((user) => user.id !== id)
        }
    },
})

export default usersSlice.reducer; 

export const { deleteUserById } = usersSlice.actions