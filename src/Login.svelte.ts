import { goto } from "$app/navigation";
import { setLoggedIn } from "$lib/auth.svelte";
import { config } from "$lib/config";
import type { LoginResponse } from "./app";

export enum RegisterResult {
    Success,
    Failed,
    Conflict,
}

export enum LoginResult {
    Success,
    Failed,
    Incorrect,
}

export async function login(username: string, password: string) : Promise<LoginResult> {
    console.log("Logging in with username:", username);
    console.log("backendUrl:", config.backendUrl);
    const response = await fetch(
        config.backendUrl + "/users/login",
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: username,
                password: password,
            }),
        }
    );
    if (!response.ok) {
        console.log(response.status);
        if (response.status === 404 || response.status === 400) {
            console.error("User not found");
            return LoginResult.Incorrect;
        }
        console.error("Login failed");
        return LoginResult.Failed;
    }
    
    const data = await response.json() as LoginResponse;
    console.log("Login response:", data);
    if (data.token.length === 0) {
        console.error("Login failed");
        return LoginResult.Failed;
    }
    localStorage.setItem("token", data.token);
    //goto("/dashboard");
    return LoginResult.Success;

    //setLoggedIn(true);
 }

export async function logout() {
    console.log("logging out")
    localStorage.removeItem("token")
    setLoggedIn(false)

    goto("/")
    
}
 
export async function register(username: string, password: string) : Promise<RegisterResult> {
    console.log("registering user: ", username)
    console.log("backendUrl:", config.backendUrl);
    const response = await fetch(
        config.backendUrl + "/users/register",
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: username,
                password: password,
            }),
        }
    );
    if (!response.ok) {
        console.error("register failed")
        if (response.status == 409) {
            console.error("username already exists")
            return RegisterResult.Conflict
        }
        return RegisterResult.Failed;
    }

    

    return RegisterResult.Success;
}