import {create} from 'zustand';

export type TAuth = {
    username: string; 
    email: string;
    role: string;
}

export interface IAuthStoreStateProps{
    auth: TAuth,
    setAuth: ({username, email, role}: TAuth) => void;
}

export const authStore = create<IAuthStoreStateProps>()((set) => ({
    auth: {
        username: '',
        email: '', 
        role: ''
    }, 
    setAuth: ({username, email, role}: TAuth) => set((state) => ({auth: {username: username, email: email, role: role}}))
}))