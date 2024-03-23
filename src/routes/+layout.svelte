<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
	import Logo from "$lib/images/degen-mafia-official-logo.png"
</script>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<img class="h-8" src={Logo} alt="Degen Mafia" />
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<div class="btn-group variant-ghost-surface">
					<a
					class="variant-ghost-surface"
					href="/"
					rel="noreferrer"
				>
					Home
				</a>
					<a
					class="variant-ghost-surface"
					href="/about/"
					rel="noreferrer"
				>
					About
				</a>
				<a
					class="variant-ghost-surface"
					href="https://discord.gg/F62cEvrDwv"
					target="_blank"
					rel="noreferrer"
				>
					Join
				</a>
				</div>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
</AppShell>
