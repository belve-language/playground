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
	import type {SupportedParsingState} from "./parsing-state/supported/SupportedParsingState.ts";
	import {builtInFunctions} from "../instances/built-in-functions/builtInFunctions.ts";
	import {doneExecutingStateTypeName} from "./parsing-state/implementations/success/abstractifying-state/implementations/success/implementations/with-main-function/executing-state/implementations/done/type-name/doneExecutingStateTypeName.ts";
	let state_: State<SupportedParsingState> = $state.raw<
		State<SupportedParsingState>
	>(State.create(builtInFunctions, []));
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
		state_ = State.create(builtInFunctions, preset.sourceCode.split(""));
		isPresetModalOpen = false;
	}
	function handleSourceCodeChangedEvent(sourceCode: readonly string[]): void {
		state_ = State.create(builtInFunctions, sourceCode);
	}
</script>

<svelte:head>
	<title>Belve Playground</title>
</svelte:head>
<div class="playground">
	<main>
		<div class="status">
			<span>
				{#if state_.parsingState.typeName === successParsingStateTypeName}
					{#if state_.parsingState.abstractifyingState.typeName === successAbstractifyingStateTypeName}
						{#if state_.parsingState.abstractifyingState.subTypeName === withMainFunctionSuccessAbstractifyingStateSubTypeName}
							✔️ Valid
							{#if state_.parsingState.abstractifyingState.executingState.typeName === idleExecutingStateTypeName || state_.parsingState.abstractifyingState.executingState.typeName === doneExecutingStateTypeName}
								<button type="button" onclick={handleRunButtonClick}
									>▶️ Run</button
								>
							{:else if state_.parsingState.abstractifyingState.executingState.typeName === busyExecutingStateTypeName}
								<button type="button" onclick={handleStepButtonClick}
									>👣 Do a step</button
								>
							{/if}
							{#if state_.parsingState.abstractifyingState.functions !== null}
								{state_.parsingState.abstractifyingState.functions
									.lint(builtInFunctions)
									.join(", ")}
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
			</span>
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
		<Editor
			state={state_}
			onSourceCodeChangedEvent={handleSourceCodeChangedEvent}
		/>
		{#if state_.parsingState.typeName === successParsingStateTypeName && state_.parsingState.abstractifyingState.typeName === successAbstractifyingStateTypeName && state_.parsingState.abstractifyingState.subTypeName === withMainFunctionSuccessAbstractifyingStateSubTypeName && state_.parsingState.abstractifyingState.executingState.typeName === busyExecutingStateTypeName}
			<div class="debug">
				{#if state_.parsingState.abstractifyingState.executingState.highlight !== null}
					{state_.parsingState.abstractifyingState.executingState.highlight.node.constructor.name.slice(
						0,
						-"AbstractSyntaxTreeNode".length,
					)}
					<h2>Availables</h2>
					<ul class="availables">
						{#each Object.entries(state_.parsingState.abstractifyingState.executingState.highlight.availables) as [name, value] (name)}
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
	<aside>
		<ul>
			{#each Object.entries(builtInFunctions) as [id, function_], index (index)}
				<li><strong>{id}</strong><br />{function_.description}</li>
			{/each}
		</ul>
	</aside>
</div>

<style lang="scss">
	.playground {
		display: grid;
		grid-template-columns: 1fr 15em;
		grid-template-rows: 100%;
	}
	aside {
		overflow: auto;
		> ul {
			display: flex;
			flex-direction: column;
			gap: 0.5em;
		}
	}
	main {
		height: 100%;
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: min-content 1fr 15em;
		--step-light: #b2d8ff;
		--success-light: #75f000;
		--failure-light: #ffc6d0;
		--step-dark: #2a4257;
		--success-dark: #2f4627;
		--failure-dark: #5a363d;
	}
	.status {
		padding: 0.5rem;
		color: hsl(0, 0%, 100%);
		display: flex;
		justify-content: space-between;
	}
	ul.availables > li {
		color: hsl(0, 0%, 100%);
	}
	.debug {
		overflow-y: scroll;
	}
	:global {
		.sveltekit-body,
		body,
		html {
			height: 100%;
			display: grid;
			grid-template-columns: 100%;
			grid-template-rows: 100%;
		}
		body {
			margin: 0;
			background-color: hsl(0, 0%, 0%);
			color: white;
		}
	}
</style>
