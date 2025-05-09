// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export { };
	
export interface Tab {
	label: string;
	value: number;
}
	
export interface UrlInput {
	url: string;	
}

export interface ShortenedUrl {
	id: string,
    url: string,
	short_url: string,
	favourite: boolean,
    deleted: bool,
    created_at: string,
}

export interface ShortenedUrlResponse {
	id: string,
    url: string,
	short_url: string,
	favourite: boolean,
    deleted: bool,
    created_at: string,
}

export interface UserLogin {
	username: string;
	password: string;
}

export interface UserRegister {
	username: string;
	password: string;
	conf_password: string,
}

export interface LoginResponse {
	token: string;
}

export interface UserRegister {
	username: string;
	password: string;
}