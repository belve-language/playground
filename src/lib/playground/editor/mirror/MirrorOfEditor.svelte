<script lang="ts">
	import CodeOfMirrorOfEditor from "./code/CodeOfMirrorOfEditor.svelte";
	import type {SupportedParsingState} from "../../parsing-state/supported/SupportedParsingState.ts";
	import type {State} from "../../state/State.ts";
	const {state: state_}: {readonly state: State<SupportedParsingState>} =
		$props();
</script>

<pre><CodeOfMirrorOfEditor state={state_} /></pre>

<style lang="scss">
	pre {
		margin-block: 0;
	}
</style>
