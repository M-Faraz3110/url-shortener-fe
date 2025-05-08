<script lang="ts">
	import type { ShortenedUrl } from './app';
	import { deleteUrl, favoriteUrl } from './UrlStore.svelte';

	export let url: ShortenedUrl;

	export let favorited = url.favourite;

	async function copyToClipboard(text: string) {
		if (navigator.clipboard) {
			await navigator.clipboard.writeText(text);
		} else {
			alert('Clipboard not supported');
		}
	}

	async function toggleFavorite() {
		console.log('Toggling favorite for URL:', url.favourite);
		await favoriteUrl(url.id, !url.favourite);
		favorited = !favorited;
		console.log('New favorite status:', favorited);
	}
</script>

<div class="p-3">
	<div class="card preset-filled-surface-100-900 p-4">
		<h3 class="card-header p-6 text-center">
			<span class="text-lg font-medium">{url.url}</span>
			<div class="float-right">
				<button
					class="inline-flex items-center space-x-1 rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-800 hover:bg-slate-100 hover:text-blue-600"
					aria-label="Favorite"
					onclick={toggleFavorite}
				>
					<span>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 22 22"
							stroke-width="1.5"
							stroke="currentColor"
							class="h-3 w-3"
							class:fill-primary-500={favorited}
							class:fill-none={!favorited}
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 
                   2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 
                   4.5 2.09C13.09 3.81 14.76 3 16.5 3 
                   19.58 3 22 5.42 22 8.5c0 3.78-3.4 
                   6.86-8.55 11.54L12 21.35z"
							></path>
						</svg>
					</span>
				</button>

				<button
					class="inline-flex items-center space-x-1 rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-800 hover:bg-slate-100 hover:text-red-600"
					aria-label="Delete"
					onclick={() => {
						deleteUrl(url.id);
					}}
				>
					<span>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="h-3 w-3"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
							/>
						</svg>
					</span>
				</button>
			</div>
		</h3>

		<div class="flex items-center">
			<div
				class="flex w-full items-center rounded-l-lg border border-gray-800 bg-white px-4 py-1 font-mono text-sm text-gray-800"
			>
				<div class="flex gap-1">
					<span>{url.short_url}</span>
				</div>
			</div>
			<button
				class="btn preset-filled-primary-500 border-primary-500 rounded-none rounded-r-lg border py-1 text-sm"
				onclick={() => copyToClipboard(url.short_url)}
				aria-label="Copy to clipboard"
			>
				<svg
					width="15"
					height="15"
					viewBox="0 0 15 15"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M1 9.50006C1 10.3285 1.67157 11.0001 2.5 11.0001H4L4 10.0001H2.5C2.22386 10.0001 2 9.7762 2 9.50006L2 2.50006C2 2.22392 2.22386 2.00006 2.5 2.00006L9.5 2.00006C9.77614 2.00006 10 2.22392 10 2.50006V4.00002H5.5C4.67158 4.00002 4 4.67159 4 5.50002V12.5C4 13.3284 4.67158 14 5.5 14H12.5C13.3284 14 14 13.3284 14 12.5V5.50002C14 4.67159 13.3284 4.00002 12.5 4.00002H11V2.50006C11 1.67163 10.3284 1.00006 9.5 1.00006H2.5C1.67157 1.00006 1 1.67163 1 2.50006V9.50006ZM5 5.50002C5 5.22388 5.22386 5.00002 5.5 5.00002H12.5C12.7761 5.00002 13 5.22388 13 5.50002V12.5C13 12.7762 12.7761 13 12.5 13H5.5C5.22386 13 5 12.7762 5 12.5V5.50002Z"
						fill="currentColor"
						fill-rule="evenodd"
						clip-rule="evenodd"
					></path>
				</svg>
				Copy</button
			>
		</div>

		<!-- <section class="p-4">
		<div
			class="flex w-[250px] max-w-sm items-center justify-between rounded-md border border-gray-800 bg-white px-4 py-3 font-mono text-sm text-gray-800"
		>
			<div class="flex gap-1">
				<span>$</span>
				<span>npm run dev</span>
			</div>
			<span class="flex h-5 w-5 cursor-pointer text-gray-800 duration-200 hover:text-gray-400">
				<svg
					class="fill-current"
					version="1.1"
					id="Layer_1"
					xmlns="http://www.w3.org/2000/svg"
					xmlns:xlink="http://www.w3.org/1999/xlink"
					x="0px"
					y="0px"
					viewBox="0 0 115.77 122.88"
					style="enable-background:new 0 0 115.77 122.88"
					xml:space="preserve"
					><style type="text/css">
						.st0 {
							fill-rule: evenodd;
							clip-rule: evenodd;
						}
					</style><g
						><path
							class="st0"
							d="M89.62,13.96v7.73h12.19h0.01v0.02c3.85,0.01,7.34,1.57,9.86,4.1c2.5,2.51,4.06,5.98,4.07,9.82h0.02v0.02 v73.27v0.01h-0.02c-0.01,3.84-1.57,7.33-4.1,9.86c-2.51,2.5-5.98,4.06-9.82,4.07v0.02h-0.02h-61.7H40.1v-0.02 c-3.84-0.01-7.34-1.57-9.86-4.1c-2.5-2.51-4.06-5.98-4.07-9.82h-0.02v-0.02V92.51H13.96h-0.01v-0.02c-3.84-0.01-7.34-1.57-9.86-4.1 c-2.5-2.51-4.06-5.98-4.07-9.82H0v-0.02V13.96v-0.01h0.02c0.01-3.85,1.58-7.34,4.1-9.86c2.51-2.5,5.98-4.06,9.82-4.07V0h0.02h61.7 h0.01v0.02c3.85,0.01,7.34,1.57,9.86,4.1c2.5,2.51,4.06,5.98,4.07,9.82h0.02V13.96L89.62,13.96z M79.04,21.69v-7.73v-0.02h0.02 c0-0.91-0.39-1.75-1.01-2.37c-0.61-0.61-1.46-1-2.37-1v0.02h-0.01h-61.7h-0.02v-0.02c-0.91,0-1.75,0.39-2.37,1.01 c-0.61,0.61-1,1.46-1,2.37h0.02v0.01v64.59v0.02h-0.02c0,0.91,0.39,1.75,1.01,2.37c0.61,0.61,1.46,1,2.37,1v-0.02h0.01h12.19V35.65 v-0.01h0.02c0.01-3.85,1.58-7.34,4.1-9.86c2.51-2.5,5.98-4.06,9.82-4.07v-0.02h0.02H79.04L79.04,21.69z M105.18,108.92V35.65v-0.02 h0.02c0-0.91-0.39-1.75-1.01-2.37c-0.61-0.61-1.46-1-2.37-1v0.02h-0.01h-61.7h-0.02v-0.02c-0.91,0-1.75,0.39-2.37,1.01 c-0.61,0.61-1,1.46-1,2.37h0.02v0.01v73.27v0.02h-0.02c0,0.91,0.39,1.75,1.01,2.37c0.61,0.61,1.46,1,2.37,1v-0.02h0.01h61.7h0.02 v0.02c0.91,0,1.75-0.39,2.37-1.01c0.61-0.61,1-1.46,1-2.37h-0.02V108.92L105.18,108.92z"
						/></g
					></svg
				>
			</span>
		</div>
	</section> -->
	</div>
</div>
