import createStaticAdapter from "@sveltejs/adapter-static";
const staticAdapter = createStaticAdapter();
export default /** @type {const} @satisfies {import("@sveltejs/kit").Config} */ ({
	compilerOptions: {runes: true},
	kit: {adapter: staticAdapter},
	paths: {},
});
