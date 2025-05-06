import { setLoggedIn } from "$lib/auth.svelte";

export function login(username: string, password: string) {
    setLoggedIn(true);
 }