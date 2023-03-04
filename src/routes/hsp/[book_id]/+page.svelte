<script>
	import { _session } from '$lib'
	import { base } from '$app/paths'
	export let data

	$: console.log('data', data)
</script>

<section class="py-4">
	<div class="w-full max-w-3xl mx-auto px-4 nwp">
		<header class="py-4">
			<h5>Buch {data.params.book_id}</h5>
			<h2>{data.page.books[data.params.book_id-1].buch}</h2>
		</header>
		<hr class="mb-4">
		<article class="py-4">
			<nav>
				{#each data.hsp as { b_id, buch, id, h_id, name, titel, inhalt, audio_link }, i}
					<div class="mb-4 rounded-lg border flex justify-between">
						<div class="py-2 px-2 ">
							<h4>{titel}</h4>
							<h5>{name}</h5>
							<p>{buch}</p>
						</div>
						<figure>
							<img
								src="https://nwp-cgn.de/studio/upload/kat14/server/php/files/lotr{id}.jpg"
								alt=""
								class="h-32 w-32 rounded-r-lg" />
						</figure>
					</div>
				{/each}
			</nav>
		</article>
		{#if data.page.books.length}
			<div class="py-4">
				<div class="p-4 rounded-lg border bg-gray-50 shadow-lg">
					{#each data.page.books as { path, name, buch, id }, i}
					{#if id == data.params.book_id}
					<span class="block w-full text-slate-600 font-semibold italic">
						{name}:
						{buch}
					</span>
					{:else}
						<a href="{base}{path}" class="block w-full font-semibold text-blue-800">
							{name}:
							{buch}
						</a>
					{/if}	
					{/each}
				</div>
			</div>
		{/if}
	</div>
</section>
