<script lang="ts">
	import type { ShortenedUrl, Tab } from '../../app';
	import ShortenedUrlCard from '../../ShortenedURLCard.svelte';
	import { urlStore } from '../../UrlStore.svelte';

	export let tabs: Tab[] = [];
	export let activeTabValue = 1;

	const handleClick = (tabValue: number) => () => (activeTabValue = tabValue);
</script>

<!-- <ul>
	{#each tabs as tab}
		<li class={activeTabValue === tab.value ? 'active' : ''}>
			<span onclick={handleClick(tab.value)}>
				{tab.label}
			</span>
		</li>
	{/each}
</ul> -->

<div class="tabs">
	{#each tabs as tab}
		<label class={['tab', activeTabValue === tab.value ? 'active' : '']}>
			<input type="radio" name="tab" checked={activeTabValue === tab.value} />
			<span
				class={['name', activeTabValue === tab.value ? 'preset-filled-primary-500 text-white' : '']}
				onclick={handleClick(tab.value)}
			>
				{tab.label}
			</span>
		</label>
	{/each}
</div>

{#if activeTabValue === 1}
	{#each urlStore as url (url.id)}
		<ShortenedUrlCard {url} />
	{/each}
{:else}
	{#each urlStore.filter((url: ShortenedUrl) => url.favourite) as url (url.id)}
		<ShortenedUrlCard {url} />
	{/each}
{/if}

<style>
	.tabs {
		position: relative;
		display: flex;
		flex-wrap: wrap;
		border-radius: 0.5rem;
		background-color: #eee;
		box-sizing: border-box;
		box-shadow: 0 0 0px 1px rgba(0, 0, 0, 0.06);
		padding: 0.25rem;
		width: 300px;
		font-size: 14px;
		margin: auto;
	}

	.tabs .tab {
		flex: 1 1 auto;
		text-align: center;
	}

	.tabs .tab input {
		display: none;
	}

	.tabs .tab .name {
		display: flex;
		cursor: pointer;
		align-items: center;
		justify-content: center;
		border-radius: 0.5rem;
		border: none;
		padding: 0.5rem 0;
		transition: all 0.15s ease-in-out;
	}

	.tabs .tab input:checked + .name {
	}
</style>
