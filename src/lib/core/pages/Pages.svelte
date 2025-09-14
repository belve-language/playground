<script lang="ts">
	import Page from "../page/Page.svelte";
	import type {Atom} from "./atom/Atom.ts";
	import type {State} from "./state/State.ts";
	import {computeNewStateAfterNoOverflowReported} from "./computing-new-state-after-no-overflow-reported/computeNewStateAfterNoOverflowReported.ts";
	import {emptyState} from "./empty-state/emptyState.ts";
	import {computeNewStateAfterAtomsChanged} from "./computing-new-state-after-atoms-changed/computeNewStateAfterAtomsChanged.ts";
	import {computeNewStateAfterOverflowReported} from "./computing-new-state-after-overflow-reported/computeNewStateAfterOverflowReported.ts";
	const {atoms}: {readonly atoms: readonly [Atom, ...(readonly Atom[])]} =
		$props();
	let state_: State = $state.raw<State>(emptyState);
	async function handleNoOverflowReportedEvent(): Promise<void> {
		state_ = computeNewStateAfterNoOverflowReported(state_);
	}
	async function handleOverflowReportedEvent(): Promise<void> {
		state_ = computeNewStateAfterOverflowReported(state_);
	}
	$effect((): void => {
		state_ = computeNewStateAfterAtomsChanged(atoms);
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
					{@render atom()}
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
