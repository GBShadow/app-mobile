<script lang="ts">
	import { login } from '../api/auth.remote';
	import Input from '$lib/components/input.svelte';
	import logo from '$lib/assets/logo.png';
	import { getToastState } from '$lib/toast-state.svelte';
	const toastState = getToastState();
</script>

<div class="h-[100dvh] bg-primary p-4">
	<div class="mt-30 p-4">
		<img src={logo} alt="" class="mx-auto w-1/2 max-w-96" />
	</div>

	<form
		{...login.enhance(async ({ submit }) => {
			try {
				await submit();
			} catch (err) {
				const error = JSON.parse(err as string) as Error;
				toastState.add({
					title: 'Erro!',
					message: error.message,
					variant: 'alert-error',
					durationMs: 7000
				});
			}
		})}
		class="mt-10 space-y-6 rounded-xl bg-base-100 p-4"
	>
		<div class="w-full space-y-4 px-4">
			<Input
				label="Usuário"
				{...login.fields.usuario.as('text')}
				issues={login.fields.usuario.issues()}
			/>

			<Input
				label="Senha"
				{...login.fields.senha.as('password')}
				issues={login.fields.senha.issues()}
			/>

			<button class="btn w-full btn-primary" type="submit">
				{#if login.pending}
					<span class="loading loading-lg loading-spinner"></span>
				{:else}
					Login
				{/if}
			</button>
		</div>
	</form>
</div>
