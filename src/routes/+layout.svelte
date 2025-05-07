<script lang="ts">
	import { getLoggedIn } from '$lib/auth.svelte';
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
