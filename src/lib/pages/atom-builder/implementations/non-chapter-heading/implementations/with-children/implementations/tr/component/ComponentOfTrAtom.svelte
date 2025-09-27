<script lang="ts">
	import type {Atom} from "../../../../../../../../atom/Atom.ts";
	const {children: children}: {readonly children: readonly Atom[]} = $props();
</script>

<tr
	>{#each children as child}<child.component />{/each}</tr
>
