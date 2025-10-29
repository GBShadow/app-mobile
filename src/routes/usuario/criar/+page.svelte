<script lang="ts">
	import { Button, Loading, NavBar } from 'stdf';
	import { signup } from '../../api/auth.remote';
	import Input from '$lib/components/input.svelte';
	import Container from '$lib/components/container.svelte';
</script>

<Container>
	<NavBar title="Registar Usuário" />

	<form {...signup}>
		<div class="px-4">
			<Input title="Nome" placeholder="Seu Nome" {...signup.fields.name.as('text')} />
			{#each signup.fields.name.issues() ?? [] as issue}
				<p class="text-brand-red px-4 text-sm">{issue.message}</p>
			{/each}

			<Input title="E-mail" placeholder="Seu E-mail" {...signup.fields.email.as('email')} />
			{#each signup.fields.email.issues() ?? [] as issue}
				<p class="text-brand-red px-4 text-sm">{issue.message}</p>
			{/each}

			<Input title="Senha" placeholder="Senha" {...signup.fields.password.as('password')} />
			{#each signup.fields.password.issues() ?? [] as issue}
				<p class="text-brand-red px-4 text-sm">{issue.message}</p>
			{/each}
		</div>

		<div class="w-full">
			<Button type="submit">
				{#if signup.pending}
					<Loading />
				{:else}
					Registrar
				{/if}
			</Button>
		</div>
	</form>
</Container>
