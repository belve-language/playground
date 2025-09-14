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
		{#each children as Child}
			<Child />
		{/each}
	</span>
</li>

<style lang="scss">
	li {
		display: flex;
	}
	.bullet {
		width: 1em;
	}
</style>
