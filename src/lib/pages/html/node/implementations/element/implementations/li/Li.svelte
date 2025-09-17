<script lang="ts">
	import type {Component} from "svelte";
	const {
		children,
	}: {
		readonly children: readonly Component<{readonly [name: string]: never}>[];
	} = $props();
</script>

<li>
	<span class="bullet">•</span>
	<span class="content">
		{#each children as child}
			{@const Child = child}
			<Child />
		{/each}
	</span>
</li>

<style lang="scss">
	li {
		display: grid;
		grid-template-columns: 1em 1fr;
		grid-template-rows: auto;
	}
</style>
