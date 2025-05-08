<script lang="ts">
	import { getLoggedIn } from '$lib/auth.svelte';
	import { LogOut, ArrowLeft, Paperclip, Calendar, CircleUser } from '@lucide/svelte';
	import '../app.css';
	import { AppBar } from '@skeletonlabs/skeleton-svelte';
	import { logout } from '../Login.svelte';

	let { children } = $props();
</script>

{#snippet header()}
	<AppBar>
		{#snippet lead()}
			<h3 class="h3">URL Shortener</h3>
		{/snippet}
		{#snippet trail()}
			<div class="py-3">
				<button onclick={logout}>
					<LogOut size={24} />
				</button>
			</div>
			<!-- <Calendar size={20} />
			<CircleUser size={20} /> -->
		{/snippet}
		<!-- {#snippet headline()}
			<h3 class="h3">URL Shortener</h3>
		{/snippet} -->
	</AppBar>
{/snippet}

{@render header()}

{@render children()}
