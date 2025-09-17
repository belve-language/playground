<script lang="ts">
	import type {Component} from "svelte";
	const {
		children,
	}: {
		readonly children: readonly Component<{readonly [name: string]: never}>[];
	} = $props();
</script>

<pre>{#each children as child}{@const Child = child}<Child />{/each}</pre>

<style lang="scss">
	pre {
		margin-block: 0;
		background-color: hsl(0, 0%, 90%);
	}
</style>
