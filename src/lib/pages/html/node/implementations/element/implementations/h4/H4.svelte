<script lang="ts">
	import type {Component} from "svelte";
	const {
		children,
	}: {
		readonly children: readonly Component<{readonly [name: string]: never}>[];
	} = $props();
</script>

<h4>
	{#each children as child}
		{@const Child = child}
		<Child />
	{/each}
</h4>
