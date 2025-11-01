<script lang="ts">
	import { login } from '../api/auth.remote';
	import Input from '$lib/components/input.svelte';
	import logo from '$lib/assets/logo.png';
	import { getToastState } from '$lib/toast-state.svelte';

	const toastState = getToastState();
</script>

<dir
	class="absolute inset-0 bg-[url(./lib/assets/txaico.png)] bg-[position:-110px_120%] bg-no-repeat opacity-20"
></dir>
<div class="h-[100dvh] bg-base-200">
	<div class="relative z-10 px-[10%] py-4">
		<div class="mt-[30%] p-4">
			<img src={logo} alt="" class="mx-auto w-1/2 max-w-96" />
		</div>

		<div class="mt-[20%] flex flex-col gap-1">
			<strong class="text-xl">Bem Vindo!</strong>
			<strong class="text-sm text-[#3C4040]">Faça o login para continuar</strong>
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
			class="mt-6 space-y-6 rounded-xl bg-base-100 p-4 shadow-lg shadow-black/40"
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
</div>
