<script lang="ts">
	import type {Atom} from "../../../../../../../../atom/Atom.ts";
	import type {SpanAtomStyles} from "../styles/SpanAtomStyles.ts";
	const {
		children: children,
		styles: styles,
	}: {readonly children: readonly Atom[]; readonly styles: SpanAtomStyles} =
		$props();
</script>

<span style="color: {styles.color};">
	{#each children as child}
		<child.component />
	{/each}
</span>
