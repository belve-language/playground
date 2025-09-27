<script lang="ts">
	const {
		onSourceCodeChangedEvent,
		sourceCode: sourceCode,
	}: {
		readonly onSourceCodeChangedEvent: (newSourceCode: string) => void;
		readonly sourceCode: string;
	} = $props();
	function handleTextareaInputEvent(
		event: Event & {readonly currentTarget: HTMLTextAreaElement},
	): void {
		onSourceCodeChangedEvent(event.currentTarget.value);
	}
</script>

<textarea value={sourceCode} oninput={handleTextareaInputEvent}></textarea>

<style lang="scss">
	textarea {
		padding: 0;
		border: none;
		font-size: inherit;
		resize: none;
		color: transparent;
		caret-color: hsl(0, 0%, 100%);
		background-color: transparent;
		overflow: hidden;
		font-size: inherit;
	}
</style>
