<script lang="ts">
	import { login } from '../api/auth.remote';
	import Container from '$lib/components/container.svelte';
	import Input from '$lib/components/input.svelte';
	import logo from '$lib/assets/logo.png';
</script>

<Container>
	<div class="p-4">
		<img src={logo} alt="" class="mx-auto w-1/2 max-w-96" />
	</div>

	<form {...login} class="space-y-6">
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
</Container>
