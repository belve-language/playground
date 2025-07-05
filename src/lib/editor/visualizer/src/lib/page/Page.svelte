<script lang="ts">
	import {goto} from "$app/navigation";
	import {page} from "$app/state";
	import {modeSearchParamName} from "../modeSearchParamName.ts";
	import {sourceCodeSearchParamName} from "../sourceCodeSearchParamName.ts";
	import AbstractSyntaxTreeDisplayer from "./AbstractSyntaxTreeDisplayer.svelte";
	import AbstractSyntaxTree from "./AbstractSyntaxTreeDisplayer.svelte";
	import AnimatedConcreteSyntaxTreeDisplayer from "./AnimatedConcreteSyntaxTreeDisplayer.svelte";
	import Animated from "./AnimatedConcreteSyntaxTreeDisplayer.svelte";
	import InstantConcreteSyntaxTreeDisplayer from "./InstantConcreteSyntaxTreeDisplayer.svelte";
	import Instant from "./InstantConcreteSyntaxTreeDisplayer.svelte";
	import type {ParsingConfiguration} from "./ParsingConfiguration.ts";
	const {
		parsingConfiguration,
	}: Readonly<{parsingConfiguration: ParsingConfiguration}> = $props();
	async function handleSourceCodeTextAreaInput(
		event: Event & Readonly<{currentTarget: HTMLTextAreaElement}>,
	): Promise<void> {
		const newUrl = new URL(page.url);
		newUrl.searchParams.set(
			sourceCodeSearchParamName,
			event.currentTarget.value,
		);
		await goto(newUrl, {keepFocus: true, invalidateAll: false});
	}
	async function handleModeInputChange(
		event: Event & Readonly<{currentTarget: HTMLInputElement}>,
	): Promise<void> {
		console.log(event);
		const newUrl = new URL(page.url);
		newUrl.searchParams.set(modeSearchParamName, event.currentTarget.value);
		await goto(newUrl, {keepFocus: true, invalidateAll: false});
	}
</script>

<main>
	<textarea rows="10" oninput={handleSourceCodeTextAreaInput}
		>{parsingConfiguration.sourceCode}</textarea
	>
	<fieldset>
		<legend>Mode</legend>
		<div>
			<!-- <label>
				<input type="radio" name="mode" value="none" checked=
				None
			</label>
			<label>
				<input type="radio" name="mode" value="animated" />
				Animated
			</label> -->
			{#each ["none", "instant-concrete-syntax-tree", "animated-concrete-syntax-tree", "abstract-syntax-tree"] as mode}
				<label>
					<input
						type="radio"
						name="mode"
						value={mode}
						checked={mode === parsingConfiguration.mode}
						onchange={handleModeInputChange}
					/>
					{mode}
				</label>
			{/each}
		</div>
	</fieldset>
	{#if parsingConfiguration.mode === "instant-concrete-syntax-tree"}
		<InstantConcreteSyntaxTreeDisplayer
			sourceCode={parsingConfiguration.sourceCode}
		/>
	{/if}
	{#if parsingConfiguration.mode === "animated-concrete-syntax-tree"}
		<AnimatedConcreteSyntaxTreeDisplayer
			sourceCode={parsingConfiguration.sourceCode}
		/>
	{/if}
	{#if parsingConfiguration.mode === "abstract-syntax-tree"}
		<AbstractSyntaxTreeDisplayer sourceCode={parsingConfiguration.sourceCode} />
	{/if}
</main>

<style lang="scss">
	main {
		display: flex;
		flex-direction: column;
		padding: 1rem;
		height: 100vh;
	}
	textarea {
		resize: vertical;
		flex-shrink: 0;
	}
</style>
