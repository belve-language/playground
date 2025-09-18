<script lang="ts">
	import Mirror from "../mirror/Mirror.svelte";
	import type {State} from "../state/State.ts";
	const {
		onSourceCodeChangedEvent,
		state_,
	}: {
		readonly onSourceCodeChangedEvent: (sourceCode: string) => void;
		readonly state_: State;
	} = $props();
	function handleTextareaInput(
		event: Event & {readonly currentTarget: HTMLTextAreaElement},
	): void {
		onSourceCodeChangedEvent(event.currentTarget.value);
	}
	// TODO textarea -> new component
</script>

<div class="editor">
	<div class="actual-source-code-wrapper">
		<textarea value={state_.sourceCode} oninput={handleTextareaInput}
		></textarea>
	</div>
	<div class="mirror-wrapper">
		<Mirror {state_} />
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
	.actual-source-code-wrapper,
	.mirror-wrapper {
		grid-area: 1 / 1 / 2 / 2;
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: 1fr;
	}
	textarea {
		padding: 0;
		border: none;
		font-size: inherit;
		resize: none;
		color: transparent;
		caret-color: hsl(0, 0%, 100%);
		background-color: transparent;
		overflow: hidden;
	}
	.mirror-wrapper {
		pointer-events: none;
		font-size: inherit;
	}
</style>
