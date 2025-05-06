<script lang="ts">
	import type { UserLogin } from './app';
	import { login } from './Login.svelte';

	let loginData: UserLogin = {
		username: '',
		password: ''
	};
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

	<div class="mt-4 flex items-center justify-center">
		<button
			class="btn preset-filled-primary-500 w-full text-sm"
			onclick={() => login(loginData.username, loginData.password)}>Sign in</button
		>
	</div>
</div>
