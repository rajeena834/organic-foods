import { IUser } from '@/interfaces'
import { create } from 'zustand'

export interface IUsersGlobalStore{
    user:IUser;
    setUser:(user:IUser)=>void;
}

const usersGlobalStore = create((set) => ({
  user: null,
  setUser: (user:IUser) => set({user}) 
}))
export default usersGlobalStore