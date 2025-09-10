<script lang="ts">
	import type {Snippet} from "svelte";

	const {
		content,
		onOverflowReportedEvent,
		onNoOverflowReportedEvent,
		number,
	}: {
		readonly content: Snippet<[]>;
		readonly onOverflowReportedEvent: () => void;
		readonly onNoOverflowReportedEvent: () => void;
		readonly number: number;
	} = $props();
	let contentElement: HTMLElement;
	function check(): void {
		if (contentElement.scrollHeight > contentElement.clientHeight) {
			onOverflowReportedEvent();
		} else {
			onNoOverflowReportedEvent();
		}
	}
	$effect(() => {
		const observer = new MutationObserver(() => {
			check();
		});
		check();
		observer.observe(contentElement, {
			childList: true,
			subtree: true,
			characterData: true,
		});
		return () => {
			observer.disconnect();
		};
	});
</script>

<div class="page">
	<div class="content" bind:this={contentElement}>
		{@render content()}
	</div>
	<div class="footer">{number.toString(10)}</div>
</div>

<style lang="scss">
	.page {
		width: 210mm;
		height: 297mm;
		padding: 2.5cm;
		background-color: white;
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: 1fr min-content;
		gap: 1cm;
	}
	.content {
		overflow: auto;
		// display: grid;
		// grid-template-columns: 1fr;
		// repeat auto for rows, no matter how many rows
	}
</style>
