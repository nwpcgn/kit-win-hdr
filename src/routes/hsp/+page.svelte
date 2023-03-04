<script>
	import { _session } from '$lib'
	import { base } from '$app/paths'
	export let data
	$: console.log(data)
</script>

<section class="py-4">
	<div class="w-full max-w-3xl mx-auto px-4 nwp">
		{#if data && data.page}
			<header class="py-4">
				<h1>{data.page.hoerspiel}</h1>
				<h2>by {data.page.autor}</h2>
				<h3>Hoerspielfasung</h3>
				<h4><em>{data.page.veroeffentlicht}</em> / {data.page.produktion}</h4>
				<h5><small>regie</small> {data.page.regie}</h5>
			</header>
			<article>
				<figure class="space-y-1">
					<img
						src={data.page.img_url}
						class="rounded w-full h-full max-w-full max-h-sm object-cover"
						alt="" />
					<figcaption class="p-2">
						<span class="text-sm leading-none">
							{data.page.info}
						</span>
					</figcaption>
				</figure>
				{#if data.page.books.length}
					<div class="py-4 px-4">
						<div class="grid grid-cols-1  sm:grid-cols-3 gap-2">
							{#each data.page.books as { path, name, buch, id, img_url }, i}
								<figure class="rounded-xl shadow-lg">
									<img src={img_url} alt={buch} class="w-full max-w-full rounded-t-xl" />
									<figcaption
										class="text-slate-600 text-center rounded-b-xl x-2 py-2">
										<a href="{base}{path}">
											<div>{name}</div>
											<div class="font-semibold truncate">{buch}</div>
										</a>
									</figcaption>
								</figure>
							{/each}
						</div>
					</div>
				{/if}
			</article>
		{/if}
	</div>
</section>
