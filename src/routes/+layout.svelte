<script lang="ts">
	import '../app.css';
	import { AppBar } from '@skeletonlabs/skeleton-svelte';

	let { children } = $props();
</script>

{#snippet header()}
	<AppBar>
		<h3 class="text-left">URL Shortener</h3>
	</AppBar>
{/snippet}

{@render header()}

{@render children()}
