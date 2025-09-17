<script lang="ts">
	import type {Component} from "svelte";
	const {
		children,
		display,
		marginBlock,
	}: {
		readonly children: readonly Component<{readonly [name: string]: never}>[];
	} & (
		| {
				readonly display: "block";
				readonly marginBlock: "both" | "end" | "none" | "start";
		  }
		| {readonly display: "inline"; readonly marginBlock: "none"}
	) = $props();
</script>

<pre
	class={[
		`with-${marginBlock}-margin-block`,
		`with-${display}-display`,
	]}>{#each children as child}{@const Child = child}<Child />{/each}</pre>

<style lang="scss">
	pre {
		background-color: hsl(0, 0%, 90%);
		tab-size: 4;
		margin-block: 0;
		&.with-both-margin-block {
			margin-block: 1em;
		}
		&.with-start-margin-block {
			margin-block-start: 1em;
		}
		&.with-end-margin-block {
			margin-block-end: 1em;
		}
		&.with-none-margin-block {
			margin-block: 0;
		}
		&.with-block-display {
			display: block;
		}
		&.with-inline-display {
			display: inline;
		}
	}
</style>
