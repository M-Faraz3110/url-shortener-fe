import { config } from "$lib/config";
import type { ShortenedUrl, UrlInput } from "./app";
import type { ShortenedUrlResponse } from "./app";
export const urlStore = $state<ShortenedUrl[]>([]);

export async function addUrl(input: UrlInput) {
    //create url on BE
    console.log("Adding URL:", input.url);
    console.log("backendUrl:", config.backendUrl + "/urls/shorten");
    const response = await fetch(
        config.backendUrl + "/urls/shorten",
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem("token"),
            },
            body: JSON.stringify({
                url: input.url,
            }),
        }
    )
    console.log(response);
    if (!response.ok) {
        if (response.status === 401) {
            console.error("Unauthorized. Please log in.");
            return;
         }
        console.error("Failed to add URL");
        return;
    }
    const data = await response.json() as ShortenedUrlResponse;
    console.log("Add URL response:", data);

    let url : ShortenedUrl = {
        ...data,
    }

    urlStore.push(url);
}

export async function deleteUrl(id: string) {
    let url = urlStore.find((url) => url.id === id);
    
    if (!url) {
        // Handle the case where the URL is not found
        console.error(`URL with id ${id} not found.`);
        return;
    }

    //delete url on BE
    console.log("Deleting URL:", url.url);
    console.log("backendUrl:", config.backendUrl + "/urls/delete");
    const response = await fetch(
        config.backendUrl + "/urls/delete/" + id,
        {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem("token"),
            },
        }
    )
    console.log(response);
    if (!response.ok) {
        if (response.status === 401) {
            console.error("Unauthorized. Please log in.");
            return;
         }
        console.error("Failed to delete URL");
        return;
    }
    const data = await response.json() as ShortenedUrlResponse;
    console.log("Delete URL response:", data);
    //remove url from store

    urlStore.splice(urlStore.indexOf(url), 1);

}

export async function getUrls(token: string) {
    console.log("Getting URLs");
    console.log("backendUrl:", config.backendUrl + "/urls/user");

    const response = await fetch(
        config.backendUrl + "/urls/user",
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token,
            },
        }
    )
    if (!response.ok) {
        if (response.status === 401) {
            console.error("Unauthorized. Please log in.");
            return;
         }
        console.error("Failed to get URLs");
        return;
    }
    const data = await response.json() as ShortenedUrlResponse[];
    console.log("Get URLs response:", data);
    // let url : ShortenedUrl[] = {
    //     ...data,
    // }

    urlStore.push(...data);
}