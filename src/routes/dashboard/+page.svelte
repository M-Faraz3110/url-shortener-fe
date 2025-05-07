<script lang="ts">
	import { getLoggedIn } from '$lib/auth.svelte';
	import { onMount } from 'svelte';
	import ShortenedUrlCard from '../../ShortenedURLCard.svelte';
	import ShortenUrlCard from '../../ShortenURLCard.svelte';
	import { getUrls, urlStore } from '../../UrlStore.svelte';
	import { goto } from '$app/navigation';

	console.log('urlStore', urlStore);
	onMount(() => {
		const token = localStorage.getItem('token');
		if (!token) {
			goto('/');
			return;
		}
		getUrls(token);
	});
</script>

<div class="flex justify-center">
	<div class="grid min-w-full grid-cols-1 gap-5 md:min-w-[750px]">
		<h1 class="py-6 text-center">Shorten a URL</h1>

		<ShortenUrlCard />

		<!-- get created urls -->
		<div class="py-6 text-center">
			<h3 class="p-3 text-center">Your Shortened URLs</h3>
			{#if urlStore.length === 0}
				<p class="text-center text-sm">No URLs shortened yet.</p>
			{:else}
				{#each urlStore as url (url.id)}
					<ShortenedUrlCard {url} />
				{/each}
			{/if}
		</div>
	</div>
</div>
