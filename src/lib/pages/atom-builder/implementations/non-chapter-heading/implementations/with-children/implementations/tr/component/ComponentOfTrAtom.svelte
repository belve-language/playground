<script lang="ts">
	import type {NonChapterHeadingAtom} from "../../../../../../../../atom/implementations/non-chapter-heading/NonChapterHeadingAtom.ts";
	const {
		children: children,
	}: {readonly children: readonly NonChapterHeadingAtom[]} = $props();
</script>

<tr
	>{#each children as child}<child.component />{/each}</tr
>
