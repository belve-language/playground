import createStaticAdapter from "@sveltejs/adapter-static";
const staticAdapter = createStaticAdapter();
/** @satisfies {import("@sveltejs/kit").Config} */
export default {
	kit: {
		adapter: staticAdapter,
	},
	paths: {},
};
