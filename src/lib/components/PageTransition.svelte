<script>
	import { fly } from 'svelte/transition';
	export let pathname = '';
</script>

{#key pathname}
	<main in:fly={{ x: -10, duration: 500, delay: 500 }} out:fly={{ x: 10, duration: 500 }}>
		<slot />
	</main>
{/key}
