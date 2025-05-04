<script>
	import ShortenedUrlCard from './ShortenedURLCard.svelte';
</script>

<div class="flex justify-center">
	<div class="grid min-w-full grid-cols-1 gap-5 md:min-w-[750px]">
		<h1 class="py-6 text-center">Shorten a URL</h1>
		<div class="card preset-filled-surface-100-900 w-full p-4 text-center">
			<label class="label">
				<span>URL</span>
				<input class="input" type="text" placeholder="Enter URL..." />
			</label>
		</div>

		<div class="py-6 text-center">
			<h3 class="p-3 text-center">Your Shortened URLs</h3>

			<ShortenedUrlCard />
		</div>
	</div>
</div>
