<script lang="ts">
	import type {Atom} from "../../../../../../../../atom/Atom.ts";
	const {children: children}: {readonly children: readonly Atom[]} = $props();
</script>

<th
	>{#each children as child}<child.component />{/each}</th
>

<style lang="scss">
	th {
		border: 1px solid black;
	}
</style>
