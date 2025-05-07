<script lang="ts">
	import { getLoggedIn } from '$lib/auth.svelte';
	import LoginCard from '../LoginCard.svelte';
	import ShortenUrlCard from '../ShortenURLCard.svelte';
</script>

<div class="flex justify-center">
	<div class="grid min-w-full grid-cols-1 gap-5 md:min-w-[750px]">
		<h1 class="py-6 text-center text-2xl font-bold">Shorten URLs instantly!</h1>
		<LoginCard />
	</div>
</div>
