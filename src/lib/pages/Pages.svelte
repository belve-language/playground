<script lang="ts">
	import type {Atom} from "./atom/Atom.ts";
	import {wait} from "../waiting/wait.ts";
	import Page from "./page/Page.svelte";
	import {ToLastPageState} from "./state/implementations/to-last-page/ToLastPageState.ts";
	import {ToNewPageState} from "./state/implementations/to-new-page/ToNewPageState.ts";
	import type {SupportedState} from "./state/supported/SupportedState.ts";
	const {atoms}: {readonly atoms: readonly [Atom, ...(readonly Atom[])]} =
		$props();
	let state_: SupportedState = $state.raw<SupportedState>(
		ToNewPageState.createEmpty(atoms),
	);
	function handleNoOverflowReportedEvent(): void {
		state_ = state_.handleNoOverflowReported();
	}
	function handleOverflowReportedEvent(): void {
		state_ = state_.handleOverflowReported();
	}
	$effect((): void => {
		state_ = ToLastPageState.createAfterAtomsChanged(atoms);
	});
</script>

<div class="pages">
	{#each state_.pagedAtomses as pagedAtoms, pageIndex (pageIndex)}
		{@const pageNumber: number = pageIndex + 1}
		<Page
			onOverflowReportedEvent={handleOverflowReportedEvent}
			onNoOverflowReportedEvent={handleNoOverflowReportedEvent}
			number={pageNumber}
		>
			{#snippet content()}
				{#each pagedAtoms as atom}
					{@const Atom_ = atom}
					<Atom_ />
				{/each}
			{/snippet}
		</Page>
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
