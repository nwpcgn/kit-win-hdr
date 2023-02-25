<script>
	import 'virtual:windi.css'
	import '../app.css'
	import TopBar from '$lib/components/TopBar.svelte'
	import PageTransition from '$lib/components/PageTransition.svelte';
	export let data
	$: console.log("path: " + data.pathname)
</script>

<svelte:head>
	<title>nwp-app</title>
</svelte:head>

<TopBar>
	<nav slot="start" class="space-x-1 px-2">
		<a href="/">Start</a>
	</nav>
	<nav slot="end" class="space-x-1 px-2">
		<a href="/hsp">Hsp</a>
		<a href="/settings">Settings</a>
	</nav>
</TopBar>


<PageTransition pathname={data.pathname}><slot /></PageTransition>
