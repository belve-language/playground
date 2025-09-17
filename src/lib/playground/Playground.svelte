<script lang="ts">
	import type {Preset} from "../../lib/belve/preset/Preset.ts";
	import PresetItemList from "../../lib/belve/preset-item-list/PresetItemList.svelte";
	import {extraCharactersParsingStateTypeName} from "../../lib/playground/parsing-state/implementations/extra-characters/type-name/extraCharactersParsingStateTypeName.ts";
	import {errorAbstractifyingStateTypeName} from "../../lib/playground/parsing-state/implementations/success/abstractifying-state/implementations/error/type-name/errorAbstractifyingStateTypeName.ts";
	import {
		failureHighlightTypeName,
		readyToRunExecutingStateTypeName,
		runningExecutingStateTypeName,
		stepHighlightTypeName,
		successHighlightTypeName,
	} from "../../lib/playground/parsing-state/implementations/success/abstractifying-state/implementations/with-main-function-success/WithMainFunctionAbstractifyingState.ts";
	import {withMainFunctionAbstractifyingStateTypeName} from "../../lib/playground/parsing-state/implementations/success/abstractifying-state/implementations/with-main-function-success/type-name/withMainFunctionAbstractifyingStateTypeName.ts";
	import {withoutMainFunctionAbstractifyingStateTypeName} from "../../lib/playground/parsing-state/implementations/success/abstractifying-state/implementations/without-main-function-success/type-name/withoutMainFunctionAbstractifyingStateTypeName.ts";
	import {successParsingStateTypeName} from "../../lib/playground/parsing-state/implementations/success/type-name/successParsingStateTypeName.ts";
	import {unexpectedCharacterParsingStateTypeName} from "../../lib/playground/parsing-state/implementations/unexpected-character/type-name/unexpectedCharacterParsingStateTypeName.ts";
	import {unexpectedFinalizingParsingStateTypeName} from "../../lib/playground/parsing-state/implementations/unexpected-finalizing/type-name/unexpectedFinalizingParsingStateTypeName.ts";
	import {State} from "../../lib/playground/state/State.ts";
	import {presets} from "../../lib/instances/presets/presets.ts";
	// TODO CLASS FOR WITH MAIN FUNCTIONS?
	// TODO MOVE TO SEPARATE FILE
	// TODO MAKE CLASSES OF MARKING ETC
	// TODO BETTER FIELDS OF THE WithFunctionsSuccessfulAbstractifyingState
	// ABOVE BECAUSE FIELDS ARE RELATED
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

	// class:unexpected={state_.parsingState.typeName
	// 					=== unexpectedCharacterParsingStateTypeName
	// 					&& state_.parsingState.index === index}
	// 				class:step={state_.parsingState.typeName
	// 					=== successParsingStateTypeName
	// 					&& state_.parsingState.abstractifyingState.typeName
	// 						=== withFunctionsSuccessAbstractifyingStateTypeName
	// 					&& state_.parsingState.abstractifyingState.marking !== null
	// 					&& state_.parsingState.abstractifyingState.marking.actionName
	// 						=== "step"
	// 					&& index
	// 						>= state_.parsingState.abstractifyingState.marking.spanIndexes
	// 							.from
	// 					&& index
	// 						< state_.parsingState.abstractifyingState.marking.spanIndexes
	// 							.until}
	// 				class:success={state_.parsingState.typeName
	// 					=== successParsingStateTypeName
	// 					&& state_.parsingState.abstractifyingState.typeName
	// 						=== withFunctionsSuccessAbstractifyingStateTypeName
	// 					&& state_.parsingState.abstractifyingState.marking !== null
	// 					&& state_.parsingState.abstractifyingState.marking.actionName
	// 						=== "success"
	// 					&& index
	// 						>= state_.parsingState.abstractifyingState.marking.spanIndexes
	// 							.from
	// 					&& index
	// 						< state_.parsingState.abstractifyingState.marking.spanIndexes
	// 							.until}
	// 				class:failure={state_.parsingState.typeName
	// 					=== successParsingStateTypeName
	// 					&& state_.parsingState.abstractifyingState.typeName
	// 						=== withFunctionsSuccessAbstractifyingStateTypeName
	// 					&& state_.parsingState.abstractifyingState.marking !== null
	// 					&& state_.parsingState.abstractifyingState.marking.actionName
	// 						=== "failure"
	// 					&& index
	// 						>= state_.parsingState.abstractifyingState.marking.spanIndexes
	// 							.from
	// 					&& index
	// 						< state_.parsingState.abstractifyingState.marking.spanIndexes
	// 							.until}>{character}</span
</script>

<svelte:head>
	<title>Belve Playground</title>
</svelte:head>
<main>
	<div class="status">
		{#if state_.parsingState.typeName === successParsingStateTypeName}
			{#if state_.parsingState.abstractifyingState.typeName === withMainFunctionAbstractifyingStateTypeName}
				✔️ Valid
				{#if state_.parsingState.abstractifyingState.executingState.typeName === readyToRunExecutingStateTypeName}
					<button type="button" onclick={handleRunButtonClick}>▶️ Run</button>
				{:else if state_.parsingState.abstractifyingState.executingState.typeName === runningExecutingStateTypeName}
					<button type="button" onclick={handleStepButtonClick}
						>👣 Do a step</button
					>
				{/if}
			{:else if state_.parsingState.abstractifyingState.typeName === withoutMainFunctionAbstractifyingStateTypeName}
				❓ Nothing to run
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
	<div class="editor">
		<textarea value={state_.sourceCode} oninput={handleTextareaInput}
		></textarea>
		<pre>{#each state_.sourceCode.split("") as character, index}<span
					class:unexpected={state_.parsingState.typeName
						=== unexpectedCharacterParsingStateTypeName
						&& state_.parsingState.index === index}
					class:step={state_.parsingState.typeName
						=== successParsingStateTypeName
						&& state_.parsingState.abstractifyingState.typeName
							=== withMainFunctionAbstractifyingStateTypeName
						&& state_.parsingState.abstractifyingState.executingState.typeName
							=== runningExecutingStateTypeName
						&& state_.parsingState.abstractifyingState.executingState.highlight
							.spanIndexes.from <= index
						&& state_.parsingState.abstractifyingState.executingState.highlight
							.spanIndexes.until > index
						&& state_.parsingState.abstractifyingState.executingState.highlight
							.typeName === stepHighlightTypeName}
					class:success={state_.parsingState.typeName
						=== successParsingStateTypeName
						&& state_.parsingState.abstractifyingState.typeName
							=== withMainFunctionAbstractifyingStateTypeName
						&& state_.parsingState.abstractifyingState.executingState.typeName
							=== runningExecutingStateTypeName
						&& state_.parsingState.abstractifyingState.executingState.highlight
							.spanIndexes.from <= index
						&& state_.parsingState.abstractifyingState.executingState.highlight
							.spanIndexes.until > index
						&& state_.parsingState.abstractifyingState.executingState.highlight
							.typeName === successHighlightTypeName}
					class:failure={state_.parsingState.typeName
						=== successParsingStateTypeName
						&& state_.parsingState.abstractifyingState.typeName
							=== withMainFunctionAbstractifyingStateTypeName
						&& state_.parsingState.abstractifyingState.executingState.typeName
							=== runningExecutingStateTypeName
						&& state_.parsingState.abstractifyingState.executingState.highlight
							.spanIndexes.from <= index
						&& state_.parsingState.abstractifyingState.executingState.highlight
							.spanIndexes.until > index
						&& state_.parsingState.abstractifyingState.executingState.highlight
							.typeName === failureHighlightTypeName}>{character}</span
				>{/each}</pre>
	</div>
	<div>
		{#if state_.parsingState.typeName === successParsingStateTypeName && state_.parsingState.abstractifyingState.typeName === withMainFunctionAbstractifyingStateTypeName && state_.parsingState.abstractifyingState.executingState.typeName === runningExecutingStateTypeName}
			<h2>Variables</h2>
			<ul class="variables">
				{#each Object.entries(state_.parsingState.abstractifyingState.executingState.variables) as [name, value] (name)}
					<li>{name}: {JSON.stringify(value)}</li>
				{/each}
			</ul>
		{/if}
		{#if state_.parsingState.typeName === successParsingStateTypeName && state_.parsingState.abstractifyingState.typeName === withMainFunctionAbstractifyingStateTypeName && state_.parsingState.abstractifyingState.executingState.typeName === runningExecutingStateTypeName && state_.parsingState.abstractifyingState.executingState.unknowns !== null}
			<h2>Unknowns</h2>
			<ul class="unknowns">
				{#each Object.entries(state_.parsingState.abstractifyingState.executingState.unknowns) as [name, value] (name)}
					<li>{name}: {JSON.stringify(value)}</li>
				{/each}
			</ul>
		{/if}
	</div>
</main>

<style lang="scss">
	main {
		height: 100%;
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: min-content 2fr 1fr;
	}
	.step {
		background-color: hsl(240, 100%, 50%);
	}
	.success {
		background-color: hsl(120, 100%, 25%);
	}
	.failure {
		background-color: hsl(0, 100%, 50%);
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
