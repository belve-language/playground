<script lang="ts">
	import type {Atom} from "../../../../../../../../atom/Atom.ts";
	const {children: children}: {readonly children: readonly Atom[]} = $props();
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
