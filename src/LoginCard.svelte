<script lang="ts">
	import { goto } from '$app/navigation';
	import type { UserLogin } from './app';
	import { login, LoginResult, register } from './Login.svelte';

	let loginData: UserLogin = {
		username: '',
		password: ''
	};

	let failure = false;
	let notExists = false;

	async function sign_in(username: string, password: string) {
		let res = await login(username, password);
		if (res === LoginResult.Failed) {
			failure = true;
		} else if (res === LoginResult.Incorrect) {
			notExists = true;
		} else if (res === LoginResult.Success) {
			goto('/dashboard');
		}
	}
</script>

<div class="card w-full justify-center p-4 text-center sm:mx-auto sm:w-full sm:max-w-sm">
	<h3 class="mb-4 mt-4 text-center text-lg font-medium">Sign in to your account</h3>
	<label class="label p-2">
		<span class="label-text text-left">Username</span>
		<div class="flex items-center">
			<input class="input" type="text" bind:value={loginData.username} />
		</div>
	</label>
	<label class="label p-2">
		<span class="label-text text-left">Password</span>
		<div class="flex items-center">
			<input class="input" type="password" bind:value={loginData.password} />
		</div>
	</label>

	{#if failure}
		<span class="text-error-500 text-sm">Unable to sign in. Please try again later.</span>
	{:else if notExists}
		<span class="text-error-500 text-sm">Username or password is incorrect.</span>
	{/if}

	<div class="mt-4 flex items-center justify-center">
		<button
			class="btn preset-filled-primary-500 w-full text-sm"
			onclick={() => sign_in(loginData.username, loginData.password)}>Sign in</button
		>
	</div>
	<div class="mt-4 flex items-center justify-center">
		<button class="btn preset-filled-primary-500 w-full text-sm" onclick={() => goto('/register')}
			>Sign up</button
		>
	</div>
</div>
