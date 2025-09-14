<script lang="ts">
	import type {Component} from "svelte";
	const {
		children,
	}: {
		readonly children: readonly Component<{readonly [name: string]: never}>[];
	} = $props();
</script>

<pre>{#each children as Child}
		<Child />
	{/each}</pre>

<style lang="scss">
	pre {
		margin-block: 0;
		background-color: hsl(0, 0%, 95%);
	}
</style>
