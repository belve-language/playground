<script lang="ts">
	import type {Atom} from "../../../../../../../../atom/Atom.ts";
	import type {PreAtomStyles} from "../styles/PreAtomStyles.ts";
	const {
		children: children,
		styles: styles,
	}: {readonly children: readonly Atom[]; readonly styles: PreAtomStyles} =
		$props();
</script>

<pre
	style="background-color: {styles.backgroundColor}; display: {styles.display}; font-size: {styles.fontSize}; margin-block: {styles.marginBlock}; tab-size: {styles.tabSize.toString(
		10,
	)};">{#each children as child}<child.component />{/each}</pre>
