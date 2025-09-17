<script lang="ts">
	import type {Component} from "svelte";
	const {
		children,
	}: {
		readonly children: readonly Component<{readonly [name: string]: never}>[];
	} = $props();
</script>

<strong>
	{#each children as child}
		{@const Child = child}
		<Child />
	{/each}
</strong>
