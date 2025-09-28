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
	let atomsElement: HTMLElement;
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
		if (atomsElement.scrollHeight > atomsElement.clientHeight) {
			onOverflowReportedEvent(paging.numberOfPage);
		}
	}
	// height: 297mm;
	// display: grid;
	// grid-template-columns: 1fr;
	// &.with-page-number {
	// 	grid-template-rows: 1fr min-content;
	// 	gap: 1cm;
	// }
	// &.without-page-number {
	// 	grid-template-rows: 1fr;
	// }
	// padding: 2.5cm;

	// .wrapper {
	// 	margin: 2.5cm;
	// 	height: calc(100% - 2 * 2.5cm);
	// 	width: calc(100% - 2 * 2.5cm);
	// }
</script>

<div
	class="page"
	class:without-page-number={!paging.shouldHaveNumberOfPage}
	class:with-page-number={paging.shouldHaveNumberOfPage}
>
	<!-- <div class="wrapper" bind:this={contentElement}> -->
	<div class="content">
		<div class="atoms" bind:this={atomsElement}>
			{#each paging.atoms as atom, index (index)}<atom.component />{/each}
		</div>
		{#if paging.shouldHaveNumberOfPage}
			<div class="footer">
				{paging.numberOfPage.toString(10)}
			</div>
		{/if}
	</div>
	<!-- {#if paging.shouldHaveNumberOfPage}
			<div class="footer">
				{paging.numberOfPage.toString(10)}
			</div>
		{/if} -->
	<!-- </div> -->
</div>

<style lang="scss">
	.page {
		width: 210mm;
		height: 297.129mm;
		background-color: white;
		overflow-wrap: break-word;
		> .content {
			height: calc(100% - 2 * 2.5cm);
			// overflow: auto;
			margin: 2.5cm;
			> .atoms {
				height: 100%;
			}
			&:has(> .footer) {
				> .atoms {
					margin-block-end: 1cm;
				}
				> .footer {
					margin-block-start: 1cm;
				}
			}
		}
	}
</style>
