<script>
	import 'virtual:windi.css'
	import '../app.css'
	import TopBar from '$lib/components/TopBar.svelte'
	import PageTransition from '$lib/components/PageTransition.svelte'
	import { base } from '$app/paths'
	export let data
</script>

<svelte:head>
	<title>nwp-app</title>
</svelte:head>

<TopBar>
	<nav slot="start" class="space-x-1 px-2">
		<a href="{base}/">Start</a>
	</nav>
	<nav slot="end" class="space-x-1 px-2">
		<a href="{base}/hsp">Hsp</a>
		<a href="{base}/settings">Settings</a>
	</nav>
</TopBar>

<main>
	<PageTransition pathname={data.pathname}><slot /></PageTransition>
</main>
