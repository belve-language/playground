<script lang="ts">
	import type {ChapterHeadingAtom} from "../../chapter-heading/ChapterHeadingAtom.ts";
	import type {StylesOfTableOfChaptersLiAtom} from "../styles/StylesOfTableOfChaptersLiAtom.ts";
	const {
		styles: styles,
		targetAtom: targetAtom,
	}: {
		readonly styles: StylesOfTableOfChaptersLiAtom;
		readonly targetAtom: ChapterHeadingAtom;
	} = $props();
	let lineElement: HTMLSpanElement;
</script>

<li style="margin-block: {styles.marginBlock}">
	<span
		>{targetAtom.chapterNumber.stringify()}
		{targetAtom.title}</span
	>
	<span class="line" bind:this={lineElement}></span>
	<span class="page-number">{targetAtom.numberOfPage.toString(10)}</span>
</li>

<style lang="scss">
	li {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 0.5em;
		> .line {
			flex: 1;
			background-color: black;
			height: 0.08em;
			background-size: 10px 1.125em;
		}
	}
</style>
