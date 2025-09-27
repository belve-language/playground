<script lang="ts">
	import type {Atom} from "../../../../../../../../atom/Atom.ts";
	import type {LiAtomStyles} from "../styles/LiAtomStyles.ts";
	const {
		children: children,
		styles: styles,
	}: {readonly children: readonly Atom[]; readonly styles: LiAtomStyles} =
		$props();
</script>

<li style="margin-block: {styles.marginBlock}">
	<span class="bullet">•</span>
	<span class="content"
		>{#each children as child}<child.component />{/each}</span
	>
</li>

<style lang="scss">
	li {
		display: grid;
		grid-template-columns: min-content 1fr;
		gap: 0.5em;
		grid-template-rows: auto;
		> .content {
			min-width: 0;
		}
	}
</style>
