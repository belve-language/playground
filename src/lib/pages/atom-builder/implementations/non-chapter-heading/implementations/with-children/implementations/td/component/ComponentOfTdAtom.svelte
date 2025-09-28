<script lang="ts">
	import type {NonChapterHeadingAtom} from "../../../../../../../../atom/implementations/non-chapter-heading/NonChapterHeadingAtom.ts";
	const {
		children: children,
	}: {readonly children: readonly NonChapterHeadingAtom[]} = $props();
</script>

<td
	>{#each children as child}<child.component />{/each}</td
>

<style lang="scss">
	td {
		border: 1px solid black;
		text-align: center;
	}
</style>
