<script lang="ts">
	import ShortenedUrlCard from '../../ShortenedURLCard.svelte';
	import ShortenUrlCard from '../../ShortenURLCard.svelte';
	import { urlStore } from '../../UrlStore.svelte';

	console.log('urlStore', urlStore);
</script>

<div class="flex justify-center">
	<div class="grid min-w-full grid-cols-1 gap-5 md:min-w-[750px]">
		<h1 class="py-6 text-center">Shorten a URL</h1>

		<ShortenUrlCard />

		<div class="py-6 text-center">
			<h3 class="p-3 text-center">Your Shortened URLs</h3>
			{#if urlStore.length === 0}
				<p class="text-center text-sm">No URLs shortened yet.</p>
			{:else}
				{#each urlStore as url}
					<ShortenedUrlCard />
				{/each}
			{/if}
		</div>
	</div>
</div>
