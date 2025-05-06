<script lang="ts">
	import type { UrlInput } from './app';

	let inputUrl: UrlInput = {
		url: ''
	};
</script>

<div class="card preset-filled-surface-100-900 w-full p-4 text-center">
	<label class="label">
		<div class="flex items-center">
			<input
				class="input rounded-none rounded-l-lg"
				type="text"
				placeholder="Enter URL..."
				bind:value={inputUrl.url}
			/>
			<button class="btn preset-filled-primary-500 rounded-none rounded-r-lg">Shorten URL</button>
		</div>
	</label>
</div>
