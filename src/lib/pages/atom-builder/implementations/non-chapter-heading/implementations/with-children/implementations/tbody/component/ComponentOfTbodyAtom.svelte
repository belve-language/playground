<script lang="ts">
	import type {Atom} from "../../../../../../../../atom/Atom.ts";
	const {children: children}: {readonly children: readonly Atom[]} = $props();
</script>

<tbody
	>{#each children as child, index (index)}<child.component />{/each}</tbody
>
