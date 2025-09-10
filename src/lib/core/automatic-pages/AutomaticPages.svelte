<script lang="ts">
	import {type Snippet} from "svelte";
	import Page from "../page/Page.svelte";
	type Part = Snippet<[]>;
	const {parts}: {readonly parts: readonly [Part, ...(readonly Part[])]} =
		$props();
	type Candidates = readonly [Part, ...(readonly Part[])];
	type Status = {
		readonly candidates: readonly Candidates[];
		readonly remainingParts: readonly Part[];
		readonly whereTo: "last" | "new";
	};
	let status: Status = $state.raw({
		candidates: [],
		remainingParts: parts,
		whereTo: "new",
	});
	async function wait(seconds: number): Promise<void> {
		await new Promise((resolve) => {
			setTimeout(resolve, seconds * 1000);
		});
	}
	async function handleNoOverflowReportedEvent() {
		await wait(0.01);
		const [firstRemainingPart, ...restRemainingParts] = status.remainingParts;
		if (firstRemainingPart !== undefined) {
			switch (status.whereTo) {
				case "new": {
					status = {
						candidates: [...status.candidates, [firstRemainingPart]],
						remainingParts: restRemainingParts,
						whereTo: "last",
					};
					return;
				}
				case "last": {
					const [firstCandidate, ...restCandidate] = status.candidates;
					if (firstCandidate === undefined) {
						throw new Error("Should not happen");
					} else {
						const lastCandidate = restCandidate[restCandidate.length - 1];
						if (lastCandidate === undefined) {
							status = {
								candidates: [[...firstCandidate, firstRemainingPart]],
								remainingParts: restRemainingParts,
								whereTo: "last",
							};
							return;
						} else {
							status = {
								candidates: [
									firstCandidate,
									...restCandidate.slice(0, -1),
									[...lastCandidate, firstRemainingPart],
								],
								remainingParts: restRemainingParts,
								whereTo: "last",
							};
							return;
						}
					}
				}
			}
		}
	}
	async function handleOverflowReportedEvent() {
		await wait(0.01);
		const [firstCandidate, ...restCandidates] = status.candidates;
		if (firstCandidate === undefined) {
			throw new Error("Should not happen");
		} else {
			const lastCandidate = restCandidates[restCandidates.length - 1];
			switch (status.whereTo) {
				case "last": {
					if (lastCandidate === undefined) {
						const [firstFirstCandidatePart, ...restFirstCandidateParts] =
							firstCandidate;
						const lastFirstCandidatePart =
							restFirstCandidateParts[restFirstCandidateParts.length - 1];
						if (lastFirstCandidatePart === undefined) {
							const [firstRemainingPart, ...restRemainingParts] =
								status.remainingParts;
							if (firstRemainingPart === undefined) {
								return;
							} else {
								status = {
									candidates: [firstCandidate, [firstRemainingPart]],
									whereTo: "last",
									remainingParts: restRemainingParts,
								};
								return;
							}
						} else {
							status = {
								candidates: [
									[
										firstFirstCandidatePart,
										...restFirstCandidateParts.slice(0, -1),
									],
								],
								remainingParts: [
									lastFirstCandidatePart,
									...status.remainingParts,
								],
								whereTo: "new",
							};
							return;
						}
					} else {
						const [firstLastCandidatePart, ...restLastCandidateParts] =
							lastCandidate;
						const lastLastCandidatePart =
							restLastCandidateParts[restLastCandidateParts.length - 1];
						if (lastLastCandidatePart === undefined) {
							alert("Cannot handle overflow - only 1 overflowing part");
							const [firstRemainingPart, ...restRemainingParts] =
								status.remainingParts;
							if (firstRemainingPart === undefined) {
								return;
							} else {
								status = {
									candidates: [...status.candidates, [firstRemainingPart]],
									remainingParts: restRemainingParts,
									whereTo: "last",
								};
								return;
							}
						} else {
							status = {
								candidates: [
									firstCandidate,
									...restCandidates.slice(0, -1),
									[
										firstLastCandidatePart,
										...restLastCandidateParts.slice(0, -1),
									],
								],
								remainingParts: [
									lastLastCandidatePart,
									...status.remainingParts,
								],
								whereTo: "new",
							};
							return;
						}
					}
				}
				case "new": {
					throw new Error("Should not happen");
				}
			}
		}
	}
	$effect(() => {
		const [firstPart, ...restParts] = parts;
		if (firstPart === undefined) {
			status = {remainingParts: [], candidates: [], whereTo: status.whereTo};
		} else {
			status = {
				remainingParts: restParts,
				candidates: [[firstPart]],
				whereTo: "last",
			};
		}
	});
</script>

<div class="pages">
	{#each status.candidates as candidate, candidateIndex (candidateIndex)}
		<Page
			onOverflowReportedEvent={handleOverflowReportedEvent}
			onNoOverflowReportedEvent={handleNoOverflowReportedEvent}
			number={candidateIndex + 1}
		>
			{#snippet content()}
				{#each candidate as part}
					{@render part()}
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
