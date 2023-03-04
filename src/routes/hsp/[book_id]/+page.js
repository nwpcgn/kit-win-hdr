import { base } from '$app/paths'
export const prerender = false
export const ssr = false
const books = [
	'',
	'Die Gefaehrten',
	'Die zwei Türme',
	'Die Rückkehr des Königs'
]
export async function load({ params }) {
	let res = await fetch(`${base}/hdr.json`)
	let dat = await res.json()
	let hsp = dat.filter((x) => x.b_id == params.book_id)
	let book = books[params.book_id]
	if (hsp) {
		return { hsp, book, params }
	} else {
		return {
			hsp: null,
			book: null,
			params: params
		}
	}
}
