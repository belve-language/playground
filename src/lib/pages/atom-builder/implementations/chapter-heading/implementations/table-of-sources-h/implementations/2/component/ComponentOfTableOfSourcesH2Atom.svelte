<script lang="ts">
	import type {ChapterNumber} from "../../../../../../../../chapter-number/ChapterNumber.ts";
	import ContentOfComponentOfChapterHeadingAtom from "../../../../../content-of-component/ContentOfComponentOfChapterHeadingAtom.svelte";
	const {
		chapterNumber: chapterNumber,
		title: title,
	}: {readonly chapterNumber: ChapterNumber; readonly title: string} = $props();
</script>

<h2>
	<ContentOfComponentOfChapterHeadingAtom {chapterNumber} {title} />
</h2>
