<script lang="ts">
	import type {ChapterNumber} from "../../../../chapter-number/ChapterNumber.ts";
	const {
		chapterNumber: chapterNumber,
		title: title,
	}: {readonly chapterNumber: ChapterNumber; readonly title: string} = $props();
</script>

{chapterNumber.stringify()}
{title}
