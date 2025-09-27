<script lang="ts">
	import type {SupportedAtomBuilder} from "./atom-builder/supported/SupportedAtomBuilder.ts";
	import {RootHierarchy} from "./hierarchy/implementations/root/RootHierarchy.ts";
	import Page from "./page/Page.svelte";
	import {Paging} from "./paging/Paging.ts";
	import {onMount} from "svelte";
	const {
		atomBuilders: atomBuilders,
	}: {readonly atomBuilders: readonly SupportedAtomBuilder[]} = $props();
	let lastAtomBuilders: readonly SupportedAtomBuilder[] =
		$state.raw<readonly SupportedAtomBuilder[]>(atomBuilders);
	let remainingAtomBuilders: readonly SupportedAtomBuilder[] =
		$state.raw<readonly SupportedAtomBuilder[]>(atomBuilders);
	let hierarchy: RootHierarchy = $state.raw<RootHierarchy>(
		RootHierarchy.createEmpty(),
	);
	$effect.pre((): void => {
		if (atomBuilders !== lastAtomBuilders) {
			remainingAtomBuilders = atomBuilders;
			hierarchy = RootHierarchy.createEmpty();
		}
	});
	function startLayoutingAtomBuilders(): void {
		const [firstRemainingAtomBuilder, ...restRemainingAtomBuilders] =
			remainingAtomBuilders;
		if (firstRemainingAtomBuilder !== undefined) {
			hierarchy = hierarchy.insertAtomBuilderAtEnd(firstRemainingAtomBuilder);
			remainingAtomBuilders = restRemainingAtomBuilders;
		}
	}
	$effect((): void => {
		if (atomBuilders !== lastAtomBuilders) {
			lastAtomBuilders = atomBuilders;
			startLayoutingAtomBuilders();
		}
	});
	onMount((): void => {
		startLayoutingAtomBuilders();
	});
	const pagings: readonly Paging[] = $derived<readonly Paging[]>(
		Array.from(hierarchy.generateEveryPaging()),
	);
	// TODO: make sure it's reset properly when props change
	let pageNumberOfOverflow: null | number = null;
	async function handleOverflowReportedEventInPage(
		pageNumber: number,
	): Promise<void> {
		if (pageNumberOfOverflow === null) {
			pageNumberOfOverflow = pageNumber;
		}
	}
	function reportRound(): void {
		if (pageNumberOfOverflow === null) {
			const [firstRemainingAtomBuilder, ...restRemainingAtomBuilders] =
				remainingAtomBuilders;
			if (firstRemainingAtomBuilder !== undefined) {
				hierarchy = hierarchy.insertAtomBuilderAtEnd(firstRemainingAtomBuilder);
				remainingAtomBuilders = restRemainingAtomBuilders;
			}
		} else {
			// for (const newHierarchy of pagingManager.fixOverflow(
			// 	pageNumberOfOverflow,
			// )) {
			// 	hierarchy = newHierarchy;
			// 	pageNumberOfOverflow = null;
			// 	return;
			// }
			throw new Error("Could not fix overflow");
		}
	}
</script>

<div class="pages">
	{#each pagings as paging, pageIndex (pageIndex)}
		<Page
			onOverflowReportedEvent={handleOverflowReportedEventInPage}
			{paging}
			countOfPages={pagings.length}
			{pageIndex}
			{reportRound}
		></Page>
	{/each}
</div>

<style lang="scss">
	.pages {
		display: flex;
		flex-direction: column;
	}
	@media screen {
		.pages {
			gap: 1cm;
		}
	}
</style>
