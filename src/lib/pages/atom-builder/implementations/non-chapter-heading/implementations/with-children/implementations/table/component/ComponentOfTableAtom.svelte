<script lang="ts">
	import type {NonChapterHeadingAtom} from "../../../../../../../../atom/implementations/non-chapter-heading/NonChapterHeadingAtom.ts";
	const {
		children: children,
	}: {readonly children: readonly NonChapterHeadingAtom[]} = $props();
</script>

<table>
	{#each children as child, index (index)}<child.component />{/each}
</table>

<style lang="scss">
	table {
		border-collapse: collapse;
	}
</style>
