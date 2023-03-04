<script>
	import { _session } from '$lib'
	import { base } from '$app/paths'
	export let data
	$: console.log(data)
</script>

<section
	class="flex-1 flex flex-col items-center justify-center bg-no-repeat bg-cover p-2"
	style="background-image: url(https://nwp-cgn.de/studio/upload/kat12/server/php/files/bga3.png);">
	<div class="text-center px-8 nwp bg-black bg-opacity-50 rounded-xl shadow-xl">
		{#if data && data.page}
			<header class="py-8 space-y-4">
				<h2 class="text-slate-100">{data.page.hoerspiel}</h2>
				<h3>
					<small class="text-slate-400 italic font-extralight">hsp nach</small>
					<span class="text-slate-100">{data.page.autor}</span>
				</h3>
				<div class="pt-4">
					<a href="{base}/hsp" class="btn btn-blue py-3 px4">Start</a>
				</div>
			</header>
		{/if}
	</div>
</section>
