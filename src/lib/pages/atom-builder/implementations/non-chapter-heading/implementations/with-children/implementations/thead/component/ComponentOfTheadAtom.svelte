<script lang="ts">
	import type {Atom} from "../../../../../../../../atom/Atom.ts";
	const {children: children}: {readonly children: readonly Atom[]} = $props();
</script>

<thead
	>{#each children as child, index (index)}<child.component />{/each}</thead
>
