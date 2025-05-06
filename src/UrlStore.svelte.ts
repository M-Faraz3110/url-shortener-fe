import type { ShortenedUrl, UrlInput } from "./app";
import type { ShortenedUrlResponse } from "./app";
export const urlStore = $state<ShortenedUrl[]>([]);

export function addUrl(input: UrlInput) {
    //create url on BE
    

    let resp: ShortenedUrlResponse = {
        id: "",
        url: input.url,
        short_url: "",
        favourite: false,
        deleted: false,
        created_at: "",
    };

    let url : ShortenedUrl = {
        ...resp,
    }

    urlStore.push(url);
}

export function deleteUrl(id: string) {
    let url = urlStore.find((url) => url.id === id);
    
    if (!url) {
        // Handle the case where the URL is not found
        console.error(`URL with id ${id} not found.`);
        return;
    }

    //delete url on BE

    

    urlStore.splice(urlStore.indexOf(url), 1);

}