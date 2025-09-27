<script lang="ts">
	import type {Atom} from "../../../../../Atom.ts";
	const {children: children}: {readonly children: readonly Atom[]} = $props();
</script>

<div>
	{#each children as child}<child.component />{/each}
</div>
