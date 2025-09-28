<script lang="ts">
	import type {Paging} from "../paging/Paging.ts";
	import {onMount} from "svelte";
	const {
		countOfPages: countOfPages,
		onOverflowReportedEvent: onOverflowReportedEvent,
		pageIndex: pageIndex,
		paging: paging,
		reportRound: reportRound,
	}: {
		readonly countOfPages: number;
		readonly onOverflowReportedEvent: (numberOfPage: number) => void;
		readonly pageIndex: number;
		readonly paging: Paging;
		readonly reportRound: () => void;
	} = $props();
	let contentElement: HTMLElement;
	let lastPaging: Paging = $state.raw<Paging>(paging);
	$effect((): void => {
		if (paging !== lastPaging) {
			lastPaging = paging;
			checkForOverflow();
			if (pageIndex + 1 === countOfPages) {
				reportRound();
			}
		}
	});
	onMount((): void => {
		if (pageIndex + 1 === countOfPages) {
			checkForOverflow();
			reportRound();
		}
	});
	function checkForOverflow(): void {
		if (contentElement.scrollHeight > contentElement.clientHeight) {
			onOverflowReportedEvent(paging.numberOfPage);
		}
	}
</script>

<div
	class="page"
	class:without-page-number={!paging.shouldHaveNumberOfPage}
	class:with-page-number={paging.shouldHaveNumberOfPage}
>
	<div class="content" bind:this={contentElement}>
		{#each paging.atoms as atom, index (index)}<atom.component />{/each}
	</div>
	{#if paging.shouldHaveNumberOfPage}
		<div class="footer">
			{paging.numberOfPage.toString(10)}
		</div>
	{/if}
</div>

<style lang="scss">
	.page {
		width: 210mm;
		// TODO: Document this
		// height: 297mm;
		height: 297.129mm;
		padding: 2.5cm;
		background-color: white;
		display: grid;
		grid-template-columns: 1fr;
		&.with-page-number {
			grid-template-rows: 1fr min-content;
			gap: 1cm;
		}
		&.without-page-number {
			grid-template-rows: 1fr;
		}
		overflow-wrap: break-word;
	}
	.content {
		overflow: auto;
	}
</style>
