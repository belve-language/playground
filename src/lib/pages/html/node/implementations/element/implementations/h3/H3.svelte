<script lang="ts">
	import type {Component} from "svelte";
	const {
		children,
	}: {
		readonly children: readonly Component<{readonly [name: string]: never}>[];
	} = $props();
</script>

<h3>
	{#each children as child}
		{@const Child = child}
		<Child />
	{/each}
</h3>
