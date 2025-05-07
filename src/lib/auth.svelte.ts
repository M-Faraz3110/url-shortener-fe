import { goto } from "$app/navigation";

let isLoggedIn = $state(false);

export function setLoggedIn(value: boolean) {
    isLoggedIn = value;
}

export function getLoggedIn() {
    console.log("isLoggedIn:", isLoggedIn);
    if (typeof window !== "undefined") {
        if (localStorage.getItem("token") === null) {
            console.log("No token found. Redirecting to login.");
            isLoggedIn = false;
            goto("/");
        } else {
            isLoggedIn = true;
        }
    } else {
        console.log("Not in browser environment. Assuming logged out.");
        isLoggedIn = false;
        goto("/");
    }
    
    return isLoggedIn;
}