<script lang="ts">
	import type {SupportedParsingState} from "../parsing-state/supported/SupportedParsingState.ts";
	import type {State} from "../state/State.ts";
	import MirrorOfEditor from "./mirror/MirrorOfEditor.svelte";
	import TextareaOfEditor from "./textarea/TextareaOfEditor.svelte";
	const {
		onSourceCodeChangedEvent: onSourceCodeChangedEvent,
		state: state_,
	}: {
		readonly onSourceCodeChangedEvent: (
			newSourceCode: readonly string[],
		) => void;
		readonly state: State<SupportedParsingState>;
	} = $props();
	function handleSourceCodeChangedEvent(newSourceCode: string): void {
		onSourceCodeChangedEvent(newSourceCode.split(""));
	}
</script>

<div class="editor">
	<div class="textarea-wrapper">
		<TextareaOfEditor
			onSourceCodeChangedEvent={handleSourceCodeChangedEvent}
			sourceCode={state_.sourceCode.join("")}
		/>
	</div>
	<div class="mirror-wrapper">
		<MirrorOfEditor state={state_} />
	</div>
</div>

<style lang="scss">
	.editor {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: 1fr;
		padding: 2px;
		overflow: scroll;
		font-size: 1rem;
		border: 1px solid hsl(0, 0%, 100%);
	}
	.mirror-wrapper,
	.textarea-wrapper {
		grid-area: 1 / 1 / 2 / 2;
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: 1fr;
	}
	.mirror-wrapper {
		pointer-events: none;
	}
</style>
