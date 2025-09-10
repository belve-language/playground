<script lang="ts">
	import {type Snippet} from "svelte";
	import Page from "../page/Page.svelte";
	type Part = Snippet<[]>;
	const {parts}: {readonly parts: readonly [Part, ...(readonly Part[])]} =
		$props();
	type Candidates = readonly [Part, ...(readonly Part[])];
	type Status = {
		readonly candidates: readonly [Candidates, ...(readonly Candidates[])];
		readonly remainingParts: readonly Part[];
	};
	const [firstPart, ...restParts] = parts;
	let status: Status = $state.raw({
		candidates: [[firstPart]],
		remainingParts: restParts,
	});
	async function wait(seconds: number): Promise<void> {
		await new Promise((resolve) => {
			setTimeout(resolve, seconds * 1000);
		});
	}
	async function handleNoOverflowReportedEvent() {
		await wait(1);
		const [firstRemainingPart, ...restRemainingParts] = status.remainingParts;
		console.log({firstRemainingPart, restRemainingParts});
		if (firstRemainingPart !== undefined) {
			const [firstCandidate, ...restCandidate] = status.candidates;
			const lastCandidate = restCandidate[restCandidate.length - 1];
			if (lastCandidate === undefined) {
				status = {
					candidates: [[...firstCandidate, firstRemainingPart]],
					remainingParts: restRemainingParts,
				};
			} else {
				status = {
					candidates: [
						firstCandidate,
						...restCandidate.slice(0, -1),
						[...lastCandidate, firstRemainingPart],
					],
					remainingParts: restRemainingParts,
				};
			}
		}
	}
	async function handleOverflowReportedEvent() {
		await wait(1);
		const [firstCandidate, ...restCandidates] = status.candidates;
		const lastCandidate = restCandidates[restCandidates.length - 1];
		if (lastCandidate === undefined) {
			const [firstFirstCandidatePart, ...restFirstCandidateParts] =
				firstCandidate;
			const lastFirstCandidatePart =
				restFirstCandidateParts[restFirstCandidateParts.length - 1];
			if (lastFirstCandidatePart === undefined) {
				const [firstRemainingPart, ...restRemainingParts] =
					status.remainingParts;
				if (firstRemainingPart !== undefined) {
					status = {
						candidates: [firstCandidate, [firstRemainingPart]],
						remainingParts: restRemainingParts,
					};
				}
			} else {
				console.log({
					candidates: [
						[firstFirstCandidatePart, ...restFirstCandidateParts.slice(0, -1)],
						[lastFirstCandidatePart],
					],
					remainingParts: status.remainingParts,
				});
				await wait(10);
				status = {
					candidates: [
						[firstFirstCandidatePart, ...restFirstCandidateParts.slice(0, -1)],
						[lastFirstCandidatePart],
					],
					remainingParts: status.remainingParts,
				};
			}
		} else {
			const [firstLastCandidatePart, ...restLastCandidateParts] = lastCandidate;
			const lastLastCandidatePart =
				restLastCandidateParts[restLastCandidateParts.length - 1];
			if (lastLastCandidatePart === undefined) {
				alert("Cannot handle overflow - only 1 overflowing part");
				const [firstRemainingPart, ...restRemainingParts] =
					status.remainingParts;
				if (firstRemainingPart !== undefined) {
					status = {
						candidates: [...status.candidates, [firstRemainingPart]],
						remainingParts: restRemainingParts,
					};
				}
			} else {
				status = {
					candidates: [
						firstCandidate,
						...restCandidates.slice(0, -1),
						[firstLastCandidatePart, ...restLastCandidateParts.slice(0, -1)],
						[lastLastCandidatePart],
					],
					remainingParts: status.remainingParts,
				};
				console.log(status);
			}
		}
	}
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
