<script lang="ts">
	import type {NonChapterHeadingAtom} from "../../../../../../../../atom/implementations/non-chapter-heading/NonChapterHeadingAtom.ts";
	const {
		children: children,
		styles: styles,
	}: {
		readonly children: readonly NonChapterHeadingAtom[];
		readonly styles: {readonly marginBlock: `${number}em ${number}em`};
	} = $props();
</script>

<table style="margin-block: {styles.marginBlock};">
	{#each children as child, index (index)}<child.component />{/each}
</table>

<style lang="scss">
	table {
		border-collapse: collapse;
	}
</style>
