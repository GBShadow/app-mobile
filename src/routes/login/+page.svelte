<script lang="ts">
	import { Button, Loading, NavBar } from 'stdf';
	import { login } from '../api/auth.remote';
	import Container from '$lib/components/container.svelte';
	import Input from '$lib/components/input.svelte';
	import logo from '$lib/assets/logo.png';
</script>

<Container>
	<NavBar title="Login" titleAlign="center">
		{#snippet leftChild()}
			<div></div>
		{/snippet}
	</NavBar>

	<div class="p-4">
		<img src={logo} alt="" class="mx-auto w-1/2" />
	</div>

	<form {...login} class="space-y-6">
		<div class="w-full space-y-4 px-4">
			<Input
				label="E-mail"
				{...login.fields.email.as('email')}
				issues={login.fields.email.issues()}
			/>

			<Input
				label="Senha"
				{...login.fields.password.as('password')}
				issues={login.fields.password.issues()}
			/>
		</div>

		<Button type="submit">
			{#if login.pending}
				<Loading />
			{:else}
				Login
			{/if}
		</Button>
		<div class="grid place-items-center">
			<a href="/usuario/criar">Registrar Usuário</a>
		</div>
	</form>
</Container>
