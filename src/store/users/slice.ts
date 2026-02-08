import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const DEFAULT_STATE = [
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
    name: "Midudev",
    email: "midudev@gmail.com",
    github: "midudev"
  },
  {
    id: "4",
    name: "Torvals",
    email: "torvalds@gmail.com",
    github: "torvalds"
  },
]
export type UserId = string

export interface User {
    name: string;
    email: string;
    github: string
}
export interface UserWithId extends User {
    id: UserId;
}

const initialState: UserWithId[] = (() =>{
    const persitedSatete = localStorage.getItem("__redux__state__");
    return persitedSatete ? JSON.parse(persitedSatete).users : DEFAULT_STATE;
})();



export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers:{
        addNewUser:(state, action: PayloadAction)=> {
            const id = crypto.randomUUID()
            state.push({
                id,
                ...action.payload,
            });
        },

        deleteUserById: (state, action: PayloadAction<UserId>) =>{
            const id = action.payload;
            return state.filter((user) => user.id !== id)
        }
    },
})

export default usersSlice.reducer; 

export const { addNewUser, deleteUserById } = usersSlice.actions