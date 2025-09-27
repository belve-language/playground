<script lang="ts">
	import type {Atom} from "../../../../../../../../atom/Atom.ts";
	import type {PAtomStyles} from "../styles/PAtomStyles.ts";
	const {
		children: children,
		styles: styles,
	}: {readonly children: readonly Atom[]; readonly styles: PAtomStyles} =
		$props();
</script>

<p style="margin-block: {styles.marginBlock};">
	{#each children as child}<child.component />{/each}
</p>
