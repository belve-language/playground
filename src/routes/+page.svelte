<script lang="ts">
	import type {SupportedFunctionCallingResult} from "../lib/core/function-calling-result/supported/SupportedFunctionCallingResult.ts";
	import {parser} from "../lib/instances/parser/parser.ts";
	import {extraCharactersParsingResultTypeName} from "../lib/core/parsing-result/implementations/extra-characters/type-name/extraCharactersParsingResultTypeName.ts";
	import {unexpectedCharacterParsingResultTypeName} from "../lib/core/parsing-result/implementations/unexpected-character/type-name/unexpectedCharacterParsingResultTypeName.ts";
	import {unexpectedFinalizingParsingResultTypeName} from "../lib/core/parsing-result/implementations/unexpected-finalizing/type-name/unexpectedFinalizingParsingResultTypeName.ts";
	import {successParsingResultTypeName} from "../lib/core/parsing-result/implementations/success/type-name/successParsingResultTypeName.ts";
	import {successAbstractifyingResultTypeName} from "../lib/core/concrete-syntax-tree-node/abstractifying/result/implementations/success/type-name/successAbstractifyingResultTypeName.ts";
	import {errorAbstractifyingResultTypeName} from "../lib/core/concrete-syntax-tree-node/abstractifying/result/implementations/error/type-name/errorAbstractifyingResultTypeName.ts";
	import {builtInFunctions} from "../lib/core/built-in-functions/builtInFunctions.ts";
	import {SpanIndexes} from "../lib/core/span-indexes/SpanIndexes.ts";
	import {successFunctionCallingResultTypeName} from "../lib/core/function-calling-result/implementations/success/type-name/successFunctionCallingResultTypeName.ts";
	import {stepFunctionCallingResultTypeName} from "../lib/core/function-calling-result/implementations/step/type-name/stepFunctionCallingResultTypeName.ts";
	import {returnFunctionCallingResultTypeName} from "../lib/core/function-calling-result/implementations/return/type-name/returnFunctionCallingResultTypeName.ts";
	import {failureFunctionCallingResultTypeName} from "../lib/core/function-calling-result/implementations/failure/type-name/failureFunctionCallingResultTypeName.ts";
	import type {Index} from "../lib/core/index/Index.ts";
	import type {Preset} from "../lib/core/preset/Preset.ts";
	import {presets} from "../lib/instances/presets/presets.ts";
	import PresetItemList from "../lib/core/preset-item-list/PresetItemList.svelte";
	import type {Variables} from "../lib/core/variables/Variables.ts";
	abstract class ParsingStatus<TypeName extends string> {
		public readonly typeName: TypeName;
		protected constructor(typeName: TypeName) {
			this.typeName = typeName;
		}
	}
	const successParsingStatusTypeName = "success";
	class SuccessfulParsingStatus extends ParsingStatus<
		typeof successParsingStatusTypeName
	> {
		public constructor(abstractifyingStatus: SupportedAbstractifyingStatus) {
			super(successParsingStatusTypeName);
			this.abstractifyingStatus = abstractifyingStatus;
		}
		public readonly abstractifyingStatus: SupportedAbstractifyingStatus;
	}
	const unexpectedCharacterParsingStatusTypeName = "unexpectedCharacter";
	class UnexpectedCharacterParsingStatus extends ParsingStatus<
		typeof unexpectedCharacterParsingStatusTypeName
	> {
		public constructor(index: Index) {
			super(unexpectedCharacterParsingStatusTypeName);
			this.index = index;
		}
		public readonly index: Index;
	}
	const unexpectedFinalizingParsingStatusTypeName = "unexpectedFinalizing";
	class UnexpectedFinalizingParsingStatus extends ParsingStatus<
		typeof unexpectedFinalizingParsingStatusTypeName
	> {
		public constructor() {
			super(unexpectedFinalizingParsingStatusTypeName);
		}
	}
	const extraCharactersParsingStatusTypeName = "extraCharacters";
	class ExtraCharactersParsingStatus extends ParsingStatus<
		typeof extraCharactersParsingStatusTypeName
	> {
		public constructor() {
			super(extraCharactersParsingStatusTypeName);
		}
	}
	type SupportedParsingStatus =
		| SuccessfulParsingStatus
		| UnexpectedCharacterParsingStatus
		| UnexpectedFinalizingParsingStatus
		| ExtraCharactersParsingStatus;
	abstract class AbstractifyingStatus<TypeName extends string> {
		public readonly typeName: TypeName;
		protected constructor(typeName: TypeName) {
			this.typeName = typeName;
		}
	}
	const withFunctionsSuccessAbstractifyingStatusTypeName =
		"withFunctionsSuccess";
	type Marking = {
		readonly spanIndexes: SpanIndexes;
		readonly actionName: "step" | "success" | "failure" | "return";
	};
	// TODO CLASS FOR WITH MAIN FUNCTIONS?
	// TODO MOVE TO SEPARATE FILE
	// TODO MAKE CLASSES OF MARKING ETC
	// TODO BETTER FIELDS OF THE WithFunctionsSuccessfulAbstractifyingStatus
	// ABOVE BECAUSE FIELDS ARE RELATED
	class WithFunctionsSuccessfulAbstractifyingStatus extends AbstractifyingStatus<
		typeof withFunctionsSuccessAbstractifyingStatusTypeName
	> {
		public constructor(
			isDone: boolean,
			marking: Marking | null,
			steps: Generator<SupportedFunctionCallingResult, void, void>,
			variables: null | Variables,
		) {
			super(withFunctionsSuccessAbstractifyingStatusTypeName);
			this.isDone = isDone;
			this.marking = marking;
			this.steps = steps;
			this.variables = variables;
		}
		public readonly isDone: boolean;
		public readonly marking: Marking | null;
		private readonly steps: Generator<
			SupportedFunctionCallingResult,
			void,
			void
		>;
		public readonly variables: null | Variables;
		public next(): WithFunctionsSuccessfulAbstractifyingStatus {
			const step = this.steps.next();
			if (step.done) {
				return new WithFunctionsSuccessfulAbstractifyingStatus(
					true,
					null,
					this.steps,
					null,
				);
			} else {
				const functionCallingResult = step.value;
				switch (functionCallingResult.typeName) {
					case successFunctionCallingResultTypeName: {
						return new WithFunctionsSuccessfulAbstractifyingStatus(
							false,
							{
								spanIndexes: functionCallingResult.data.node.spanIndexes,
								actionName: "success",
							},
							this.steps,
							functionCallingResult.data.variables,
						);
					}
					case stepFunctionCallingResultTypeName: {
						return new WithFunctionsSuccessfulAbstractifyingStatus(
							false,
							{
								spanIndexes: functionCallingResult.data.node.spanIndexes,
								actionName: "step",
							},
							this.steps,
							functionCallingResult.data.variables,
						);
					}
					case returnFunctionCallingResultTypeName: {
						return new WithFunctionsSuccessfulAbstractifyingStatus(
							false,
							null,
							this.steps,
							functionCallingResult.data.variables,
						);
					}
					case failureFunctionCallingResultTypeName: {
						return new WithFunctionsSuccessfulAbstractifyingStatus(
							false,
							{
								spanIndexes: functionCallingResult.data.node.spanIndexes,
								actionName: "failure",
							},
							this.steps,
							functionCallingResult.data.variables,
						);
					}
				}
			}
		}
	}
	const withoutFunctionsSuccessAbstractifyingStatusTypeName =
		"withoutFunctionsSuccess";
	class WithoutFunctionsSuccessfulAbstractifyingStatus extends AbstractifyingStatus<
		typeof withoutFunctionsSuccessAbstractifyingStatusTypeName
	> {
		public constructor() {
			super(withoutFunctionsSuccessAbstractifyingStatusTypeName);
		}
	}
	const errorAbstractifyingStatusTypeName = "error";
	class ErrorAbstractifyingStatus extends AbstractifyingStatus<
		typeof errorAbstractifyingStatusTypeName
	> {
		public readonly message: string;
		public constructor(message: string) {
			super(errorAbstractifyingStatusTypeName);
			this.message = message;
		}
	}
	type SupportedAbstractifyingStatus =
		| WithFunctionsSuccessfulAbstractifyingStatus
		| WithoutFunctionsSuccessfulAbstractifyingStatus
		| ErrorAbstractifyingStatus;
	class State {
		public readonly sourceCode: string;
		public readonly parsingStatus: SupportedParsingStatus;
		public constructor(
			parsingStatus: SupportedParsingStatus,
			sourceCode: string,
		) {
			this.parsingStatus = parsingStatus;
			this.sourceCode = sourceCode;
		}
	}
	function createState(sourceCode: string): State {
		const sourceCodeCharacters = sourceCode.split("");
		const parsingResult = parser.parse(sourceCodeCharacters);
		switch (parsingResult.typeName) {
			case successParsingResultTypeName: {
				const parsedSourceCode = parsingResult.node;
				const abstractifyingResult = parsedSourceCode.abstractify();
				switch (abstractifyingResult.typeName) {
					case successAbstractifyingResultTypeName: {
						const abstractifiedParsedSourceCode = abstractifyingResult.data;
						if (abstractifiedParsedSourceCode === null) {
							const state_ = new State(
								new SuccessfulParsingStatus(
									new WithoutFunctionsSuccessfulAbstractifyingStatus(),
								),
								sourceCode,
							);
							return state_;
						} else {
							const steps = abstractifiedParsedSourceCode.run(builtInFunctions);
							const state_ = new State(
								new SuccessfulParsingStatus(
									new WithFunctionsSuccessfulAbstractifyingStatus(
										false,
										null,
										steps,
										null,
									),
								),
								sourceCode,
							);
							return state_;
						}
					}
					case errorAbstractifyingResultTypeName: {
						const state_ = new State(
							new SuccessfulParsingStatus(
								new ErrorAbstractifyingStatus(abstractifyingResult.message),
							),
							sourceCode,
						);
						return state_;
					}
				}
			}
			case unexpectedCharacterParsingResultTypeName: {
				const state_ = new State(
					new UnexpectedCharacterParsingStatus(parsingResult.index),
					sourceCode,
				);
				return state_;
			}
			case unexpectedFinalizingParsingResultTypeName: {
				const state_ = new State(
					new UnexpectedFinalizingParsingStatus(),
					sourceCode,
				);
				return state_;
			}
			case extraCharactersParsingResultTypeName: {
				const state_ = new State(
					new ExtraCharactersParsingStatus(),
					sourceCode,
				);
				return state_;
			}
		}
	}
	let state_ = $state.raw<State>(createState(""));
	function handleTextareaInput(
		event: Event & {readonly currentTarget: HTMLTextAreaElement},
	): void {
		state_ = createState(event.currentTarget.value);
	}
	function handleStepButtonClick(): void {
		if (
			state_.parsingStatus.typeName === successParsingStatusTypeName
			&& state_.parsingStatus.abstractifyingStatus.typeName
				=== withFunctionsSuccessAbstractifyingStatusTypeName
		) {
			state_ = new State(
				new SuccessfulParsingStatus(
					state_.parsingStatus.abstractifyingStatus.next(),
				),
				state_.sourceCode,
			);
		}
	}
	let isPresetModalOpen = $state.raw<boolean>(false);
	function handleOpeningPresetModalButtonClick(): void {
		isPresetModalOpen = true;
	}
	function handleClosingPresetModalButtonClick(): void {
		isPresetModalOpen = false;
	}
	function handlePresetSet(preset: Preset): void {
		state_ = createState(preset.sourceCode);
		isPresetModalOpen = false;
	}
</script>

<main>
	<div class="status">
		{#if state_.parsingStatus.typeName === successParsingStatusTypeName}
			{#if state_.parsingStatus.abstractifyingStatus.typeName === withFunctionsSuccessAbstractifyingStatusTypeName}
				✔️ Valid <button
					type="button"
					onclick={handleStepButtonClick}
					disabled={state_.parsingStatus.abstractifyingStatus.isDone}
					>👣 Do a step</button
				>
			{:else if state_.parsingStatus.abstractifyingStatus.typeName === withoutFunctionsSuccessAbstractifyingStatusTypeName}
				❓ Nothing to run
			{:else if state_.parsingStatus.abstractifyingStatus.typeName === errorAbstractifyingStatusTypeName}
				❌ {state_.parsingStatus.abstractifyingStatus.message}
			{/if}
		{:else if state_.parsingStatus.typeName === unexpectedCharacterParsingStatusTypeName}
			❌ Unexpected character at index {state_.parsingStatus.index}
		{:else if state_.parsingStatus.typeName === unexpectedFinalizingParsingStatusTypeName}
			❌ Unexpected end of the source code
		{:else if state_.parsingStatus.typeName === extraCharactersParsingStatusTypeName}
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
					class:unexpected={state_.parsingStatus.typeName
						=== unexpectedCharacterParsingStatusTypeName
						&& state_.parsingStatus.index === index}
					class:step={state_.parsingStatus.typeName
						=== successParsingStatusTypeName
						&& state_.parsingStatus.abstractifyingStatus.typeName
							=== withFunctionsSuccessAbstractifyingStatusTypeName
						&& state_.parsingStatus.abstractifyingStatus.marking !== null
						&& state_.parsingStatus.abstractifyingStatus.marking.actionName
							=== "step"
						&& index
							>= state_.parsingStatus.abstractifyingStatus.marking.spanIndexes
								.from
						&& index
							< state_.parsingStatus.abstractifyingStatus.marking.spanIndexes
								.until}
					class:success={state_.parsingStatus.typeName
						=== successParsingStatusTypeName
						&& state_.parsingStatus.abstractifyingStatus.typeName
							=== withFunctionsSuccessAbstractifyingStatusTypeName
						&& state_.parsingStatus.abstractifyingStatus.marking !== null
						&& state_.parsingStatus.abstractifyingStatus.marking.actionName
							=== "success"
						&& index
							>= state_.parsingStatus.abstractifyingStatus.marking.spanIndexes
								.from
						&& index
							< state_.parsingStatus.abstractifyingStatus.marking.spanIndexes
								.until}
					class:failure={state_.parsingStatus.typeName
						=== successParsingStatusTypeName
						&& state_.parsingStatus.abstractifyingStatus.typeName
							=== withFunctionsSuccessAbstractifyingStatusTypeName
						&& state_.parsingStatus.abstractifyingStatus.marking !== null
						&& state_.parsingStatus.abstractifyingStatus.marking.actionName
							=== "failure"
						&& index
							>= state_.parsingStatus.abstractifyingStatus.marking.spanIndexes
								.from
						&& index
							< state_.parsingStatus.abstractifyingStatus.marking.spanIndexes
								.until}>{character}</span
				>{/each}</pre>
	</div>
	<ul class="variables">
		{#if state_.parsingStatus.typeName === successParsingStatusTypeName && state_.parsingStatus.abstractifyingStatus.typeName === withFunctionsSuccessAbstractifyingStatusTypeName && state_.parsingStatus.abstractifyingStatus.variables !== null}
			{#each Object.entries(state_.parsingStatus.abstractifyingStatus.variables) as [name, value] (name)}
				<li>{name}: {JSON.stringify(value)}</li>
			{/each}
		{/if}
	</ul>
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
</style>
