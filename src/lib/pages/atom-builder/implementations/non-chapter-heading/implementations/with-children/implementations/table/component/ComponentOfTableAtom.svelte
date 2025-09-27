<script lang="ts">
	import type {Atom} from "../../../../../../../../atom/Atom.ts";
	const {children: children}: {readonly children: readonly Atom[]} = $props();
</script>

<table>
	{#each children as child, index (index)}<child.component />{/each}
</table>

<style lang="scss">
	table {
		border-collapse: collapse;
	}
</style>
