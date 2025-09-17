<script lang="ts">
	import {onMount, type Snippet} from "svelte";
	const {
		content,
		number,
		onNoOverflowReportedEvent,
		onOverflowReportedEvent,
	}: {
		readonly content: Snippet<[]>;
		readonly number: number;
		readonly onNoOverflowReportedEvent: (pageNumber: number) => void;
		readonly onOverflowReportedEvent: (pageNumber: number) => void;
	} = $props();
	let contentElement: HTMLElement;
	function checkForOverflow(): void {
		if (contentElement.scrollHeight > contentElement.clientHeight) {
			onOverflowReportedEvent(number);
		} else {
			onNoOverflowReportedEvent(number);
		}
	}
	onMount((): (() => void) => {
		const observer = new MutationObserver(() => {
			checkForOverflow();
		});
		observer.observe(contentElement, {
			characterData: true,
			childList: true,
			subtree: true,
		});
		checkForOverflow();
		return (): void => {
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
	}
</style>
