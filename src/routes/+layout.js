export const prerender = true
export const ssr = false
export const load = async ({ url: { pathname } }) => {
	return { pathname }
}
