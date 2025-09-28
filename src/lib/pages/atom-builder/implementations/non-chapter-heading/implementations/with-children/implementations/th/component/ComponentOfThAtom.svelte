<script lang="ts">
	import type {NonChapterHeadingAtom} from "../../../../../../../../atom/implementations/non-chapter-heading/NonChapterHeadingAtom.ts";
	const {
		children: children,
	}: {readonly children: readonly NonChapterHeadingAtom[]} = $props();
</script>

<th
	>{#each children as child}<child.component />{/each}</th
>

<style lang="scss">
	th {
		border: 1px solid black;
	}
</style>
