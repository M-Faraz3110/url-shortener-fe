<script lang="ts">
	import type { UserRegister } from '../../app';
	import { register, RegisterResult } from '../../Login.svelte';
	import { Tooltip } from '@skeletonlabs/skeleton-svelte';
	import ShortenedUrlCard from '../../ShortenedURLCard.svelte';
	import { goto } from '$app/navigation';
	import { ArrowLeft } from '@lucide/svelte';

	let success = false;
	let exists = false;

	let registerData: UserRegister = {
		username: '',
		password: '',
		conf_password: ''
	};

	function validate_username(username: string): boolean {
		const regex = new RegExp('^[a-zA-Z0-9_.-]{3,32}$');
		return regex.test(username);
	}

	function validate_password(password: string): boolean {
		return password.length >= 8 && password.length <= 64;
	}

	async function sign_up(username: string, password: string) {
		console.log('registering');
		let res = await register(username, password);
		console.log('registering status: ', res);
		if (res === RegisterResult.Success) {
			success = true;
		} else if (res === RegisterResult.Conflict) {
			console.log('username already exists');
			exists = true;
		}
	}
</script>

{#if success === false}
	<div class="float-left p-4">
		<button onclick={() => goto('/')}>
			<ArrowLeft size={24} />
		</button>
	</div>
	<div class="card w-full justify-center p-4 text-center sm:mx-auto sm:w-full sm:max-w-sm">
		<h3 class="mb-4 mt-4 p-4 text-center text-lg font-medium">Sign up for your account</h3>
		<label class="label p-2">
			<div class="flex w-full justify-between">
				<span class="label-text text-left">Username</span>
				{#if exists}
					<span class="text-error-500 text-sm">Sorry, this username is taken</span>
				{/if}
			</div>
			<div class="flex items-center">
				<input class="input" type="text" bind:value={registerData.username} />
			</div>
			<span class="text-left text-xs font-light"
				>*Usernames must be longer than 3 characters and shorter than 32 characters. Usernames allow
				characters, numbers, _, - and .</span
			>
		</label>
		<label class="label p-2">
			<span class="label-text text-left">Password</span>
			<div class="flex items-center">
				<input class="input" type="password" bind:value={registerData.password} />
			</div>
			<span class="text-left text-xs font-light"
				>*Passwords must be longer than 8 characters and shorter than 64 characters</span
			>
		</label>
		<label class="label p-2">
			<span class="label-text text-left">Confirm Password</span>
			<div class="flex items-center">
				<input class="input" type="password" bind:value={registerData.conf_password} />
			</div>
		</label>

		<div class="mt-4 flex items-center justify-center">
			{#if validate_username(registerData.username) && validate_password(registerData.password) && registerData.conf_password === registerData.password}
				<button
					class="btn preset-filled-primary-500 w-full text-sm"
					onclick={() => sign_up(registerData.username, registerData.password)}>Sign up</button
				>
			{:else}
				<button class="btn preset-filled-primary-500 disabled w-full cursor-not-allowed text-sm"
					>Sign up</button
				>
			{/if}
		</div>
	</div>
{:else if success === true}
	<div class="card w-full justify-center p-4 text-center sm:mx-auto sm:w-full sm:max-w-sm">
		<h3 class="mb-4 mt-4 text-center text-lg font-medium">
			Account registered! You can now sign in
		</h3>
		<!-- <label class="label p-2">
			<span class="label-text text-left">Username</span>
			<div class="flex items-center">
				<input class="input" type="text" bind:value={registerData.username} />
			</div>
			<span class="text-left text-xs font-light"
				>*Usernames must be longer than 3 characters and shorter than 32 characters. Usernames allow
				characters, numbers, _, - and .</span
			>
		</label>
		<label class="label p-2">
			<span class="label-text text-left">Password</span>
			<div class="flex items-center">
				<input class="input" type="password" bind:value={registerData.password} />
			</div>
			<span class="text-left text-xs font-light"
				>*Passwords must be longer than 8 characters and shorter than 64 characters</span
			>
		</label>
		<label class="label p-2">
			<span class="label-text text-left">Confirm Password</span>
			<div class="flex items-center">
				<input class="input" type="password" bind:value={registerData.conf_password} />
			</div>
		</label> -->

		<div class="mt-4 flex items-center justify-center">
			<button class="btn preset-filled-primary-500 w-full text-sm" onclick={() => goto('/')}
				>Back to home</button
			>
		</div>
	</div>
{/if}
