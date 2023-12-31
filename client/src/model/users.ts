/* B"H
*/
import data from "../data/users.json"
import { ref } from 'vue';

export let users = ref(data.users.map((user) => ({ ...user, role: user.id <= 5 ? 'admin' : 'user', isVisible: true })));

export interface User {
    id: number, 
    firstName: string, 
    lastName: string, 
    email: string, 
    password: string,
    role: "admin" | "user", 
    token?: string
    username: string
    isVisible?: boolean;
}

export function getUsers(): User[] {
    return data.users.map( x => ({ ...x, role: x.id <= 5 ? 'admin' : 'user' }) ) as User[]; 
}

// export function getUsers(): Promise < User[]> {
//     return api("users")
// }

// export async function getUserByEmail(email: string): Promise <User | undefined> {
//     const users = await getUsers()
//     return users.find( x => x.email === email)
// }


export function getUserByEmail(email: string): User | undefined {
    return getUsers().find( x => x.email === email)
}


export function remove(index: number){
    users.value.splice(index, 1);
};