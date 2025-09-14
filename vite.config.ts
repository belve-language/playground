import {sveltekit} from "@sveltejs/kit/vite";
import type {UserConfig} from "vite";
const svelteKitPlugins = await sveltekit();
export default {plugins: svelteKitPlugins} as const satisfies UserConfig;
