<script lang="ts">
	import Editor from "./editor/Editor.svelte";
	import type {Preset} from "./preset/Preset.ts";
	import PresetItemList from "./preset-item-list/PresetItemList.svelte";
	import {presets} from "../../lib/instances/presets/presets.ts";
	import {extraCharactersParsingStateTypeName} from "../../lib/playground/parsing-state/implementations/extra-characters/type-name/extraCharactersParsingStateTypeName.ts";
	import {errorAbstractifyingStateTypeName} from "../../lib/playground/parsing-state/implementations/success/abstractifying-state/implementations/error/type-name/errorAbstractifyingStateTypeName.ts";
	import {successParsingStateTypeName} from "../../lib/playground/parsing-state/implementations/success/type-name/successParsingStateTypeName.ts";
	import {unexpectedCharacterParsingStateTypeName} from "../../lib/playground/parsing-state/implementations/unexpected-character/type-name/unexpectedCharacterParsingStateTypeName.ts";
	import {unexpectedFinalizingParsingStateTypeName} from "../../lib/playground/parsing-state/implementations/unexpected-finalizing/type-name/unexpectedFinalizingParsingStateTypeName.ts";
	import {State} from "../../lib/playground/state/State.ts";
	import {busyExecutingStateTypeName} from "./parsing-state/implementations/success/abstractifying-state/implementations/success/implementations/with-main-function/executing-state/implementations/busy/type-name/busyExecutingStateTypeName.ts";
	import {idleExecutingStateTypeName} from "./parsing-state/implementations/success/abstractifying-state/implementations/success/implementations/with-main-function/executing-state/implementations/idle/type-name/idleExecutingStateTypeName.ts";
	import {successHighlightTypeName} from "./parsing-state/implementations/success/abstractifying-state/implementations/success/implementations/with-main-function/highlight/implementations/success/type-name/successHighlightTypeName.ts";
	import {withMainFunctionSuccessAbstractifyingStateSubTypeName} from "./parsing-state/implementations/success/abstractifying-state/implementations/success/implementations/with-main-function/sub-type-name/withMainFunctionSuccessAbstractifyingStateSubTypeName.ts";
	import {withoutMainFunctionSuccessAbstractifyingStateSubTypeName} from "./parsing-state/implementations/success/abstractifying-state/implementations/success/implementations/without-main-function/sub-type-name/withoutMainFunctionSuccessAbstractifyingStateSubTypeName.ts";
	import {successAbstractifyingStateTypeName} from "./parsing-state/implementations/success/abstractifying-state/implementations/success/type-name/successAbstractifyingStateTypeName.ts";
	let state_ = $state.raw<State>(State.create(""));
	function handleTextareaInput(
		event: Event & {readonly currentTarget: HTMLTextAreaElement},
	): void {
		state_ = State.create(event.currentTarget.value);
	}
	function handleStepButtonClick(): void {
		state_ = state_.step();
	}
	function handleRunButtonClick(): void {
		state_ = state_.run();
	}
	let isPresetModalOpen = $state.raw<boolean>(false);
	function handleOpeningPresetModalButtonClick(): void {
		isPresetModalOpen = true;
	}
	function handleClosingPresetModalButtonClick(): void {
		isPresetModalOpen = false;
	}
	function handlePresetSet(preset: Preset): void {
		state_ = State.create(preset.sourceCode);
		isPresetModalOpen = false;
	}
	function handleSourceCodeChangedEvent(sourceCode: string): void {
		state_ = State.create(sourceCode);
	}
</script>

<svelte:head>
	<title>Belve Playground</title>
</svelte:head>
<main>
	<div class="status">
		{#if state_.parsingState.typeName === successParsingStateTypeName}
			{#if state_.parsingState.abstractifyingState.typeName === successAbstractifyingStateTypeName}
				{#if state_.parsingState.abstractifyingState.subTypeName === withMainFunctionSuccessAbstractifyingStateSubTypeName}
					✔️ Valid
					{#if state_.parsingState.abstractifyingState.executingState.typeName === idleExecutingStateTypeName}
						<button type="button" onclick={handleRunButtonClick}>▶️ Run</button>
					{:else if state_.parsingState.abstractifyingState.executingState.typeName === busyExecutingStateTypeName}
						<button type="button" onclick={handleStepButtonClick}
							>👣 Do a step</button
						>
					{/if}
				{:else if state_.parsingState.abstractifyingState.subTypeName === withoutMainFunctionSuccessAbstractifyingStateSubTypeName}
					❓ Nothing to run
				{/if}
			{:else if state_.parsingState.abstractifyingState.typeName === errorAbstractifyingStateTypeName}
				❌ {state_.parsingState.abstractifyingState.message}
			{/if}
		{:else if state_.parsingState.typeName === unexpectedCharacterParsingStateTypeName}
			❌ Unexpected character at index {state_.parsingState.index}
		{:else if state_.parsingState.typeName === unexpectedFinalizingParsingStateTypeName}
			❌ Unexpected end of the source code
		{:else if state_.parsingState.typeName === extraCharactersParsingStateTypeName}
			❌ Extra characters at the end of the source code
		{/if}
		<span>
			<button type="button" onclick={handleOpeningPresetModalButtonClick}
				>🌱 Apply a preset</button
			>
			{#if isPresetModalOpen}
				<dialog open>
					<ul>
						{#each presets as preset}
							<PresetItemList {preset} onPresetSet={handlePresetSet} />
						{/each}
					</ul>
					<button type="button" onclick={handleClosingPresetModalButtonClick}
						>✖️ Close</button
					>
				</dialog>
			{/if}
		</span>
	</div>
	<Editor {state_} onSourceCodeChangedEvent={handleSourceCodeChangedEvent} />
	{#if state_.parsingState.typeName === successParsingStateTypeName && state_.parsingState.abstractifyingState.typeName === successAbstractifyingStateTypeName && state_.parsingState.abstractifyingState.subTypeName === withMainFunctionSuccessAbstractifyingStateSubTypeName && state_.parsingState.abstractifyingState.executingState.typeName === busyExecutingStateTypeName}
		<div>
			{#if state_.parsingState.abstractifyingState.executingState.highlight !== null}
				<h2>Variables</h2>
				<ul class="variables">
					{#each Object.entries(state_.parsingState.abstractifyingState.executingState.highlight.variables) as [name, value] (name)}
						<li>{name}: {JSON.stringify(value)}</li>
					{/each}
				</ul>
				{#if state_.parsingState.abstractifyingState.executingState.highlight.typeName === successHighlightTypeName}
					<h2>Unknowns</h2>
					<ul class="unknowns">
						{#each Object.entries(state_.parsingState.abstractifyingState.executingState.highlight.unknowns) as [name, value] (name)}
							<li>{name}: {JSON.stringify(value)}</li>
						{/each}
					</ul>
				{/if}
			{/if}
		</div>
	{/if}
</main>

<style lang="scss">
	main {
		height: 100%;
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: min-content 1fr auto;
	}
	pre {
		&.step-highlight {
			> span.highlight {
				background-color: hsl(240, 100%, 50%);
			}
		}
		&.success-highlight {
			> span.highlight {
				background-color: hsl(120, 100%, 25%);
			}
		}
		&.failure-highlight {
			> span.highlight {
				background-color: hsl(0, 100%, 50%);
			}
		}
	}
	.unexpected {
		outline: 5px solid hsl(0, 100%, 50%);
	}
	.status {
		padding: 0.5rem;
		color: hsl(0, 0%, 100%);
	}
	.editor {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: 1fr;
		padding: 2px;
		overflow: scroll;
		font-size: 1rem;
		border: 1px solid hsl(0, 0%, 100%);
	}
	textarea {
		padding: 0;
		border: none;
		grid-area: 1 / 1 / 2 / 2;
		font-size: inherit;
		resize: none;
		color: transparent;
		caret-color: hsl(0, 0%, 100%);
		background-color: hsl(0, 0%, 10%);
		overflow: hidden;
	}
	pre {
		grid-area: 1 / 1 / 2 / 2;
		margin-block: 0;
		pointer-events: none;
		font-size: inherit;
		color: hsl(0, 0%, 100%);
	}
	ul.variables > li {
		color: hsl(0, 0%, 100%);
	}
	:global {
		.sveltekit-body,
		body,
		html {
			height: 100%;
		}
		body {
			margin: 0;
			background-color: hsl(0, 0%, 0%);
			color: white;
		}
	}
</style>
