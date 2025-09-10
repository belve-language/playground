<script lang="ts">
	import type {SupportedFunctionCallingResult} from "../lib/function-calling-result/supported/SupportedFunctionCallingResult.ts";
	import {parser} from "../lib/instances/parser/parser.ts";
	import {extraCharactersParsingResultTypeName} from "../lib/parsing-result/implementations/extra-characters/type-name/extraCharactersParsingResultTypeName.ts";
	import {unexpectedCharacterParsingResultTypeName} from "../lib/parsing-result/implementations/unexpected-character/type-name/unexpectedCharacterParsingResultTypeName.ts";
	import {unexpectedFinalizingParsingResultTypeName} from "../lib/parsing-result/implementations/unexpected-finalizing/type-name/unexpectedFinalizingParsingResultTypeName.ts";
	import {successParsingResultTypeName} from "../lib/parsing-result/implementations/success/type-name/successParsingResultTypeName.ts";
	import {successAbstractifyingResultTypeName} from "../lib/concrete-syntax-tree-node/abstractifying/result/implementations/success/type-name/successAbstractifyingResultTypeName.ts";
	import {errorAbstractifyingResultTypeName} from "../lib/concrete-syntax-tree-node/abstractifying/result/implementations/error/type-name/errorAbstractifyingResultTypeName.ts";
	import {builtInFunctions} from "../lib/built-in-functions/builtInFunctions.ts";
	import {SpanIndexes} from "../lib/span-indexes/SpanIndexes.ts";
	import {successFunctionCallingResultTypeName} from "../lib/function-calling-result/implementations/success/type-name/successFunctionCallingResultTypeName.ts";
	import {stepFunctionCallingResultTypeName} from "../lib/function-calling-result/implementations/step/type-name/stepFunctionCallingResultTypeName.ts";
	import {returnFunctionCallingResultTypeName} from "../lib/function-calling-result/implementations/return/type-name/returnFunctionCallingResultTypeName.ts";
	import {failureFunctionCallingResultTypeName} from "../lib/function-calling-result/implementations/failure/type-name/failureFunctionCallingResultTypeName.ts";
	import type {Index} from "../lib/index/Index.ts";
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
	class WithFunctionsSuccessfulAbstractifyingStatus extends AbstractifyingStatus<
		typeof withFunctionsSuccessAbstractifyingStatusTypeName
	> {
		public constructor(
			isDone: boolean,
			marking: Marking | null,
			steps: Generator<SupportedFunctionCallingResult, void, void>,
		) {
			super(withFunctionsSuccessAbstractifyingStatusTypeName);
			this.isDone = isDone;
			this.marking = marking;
			this.steps = steps;
		}
		public readonly isDone: boolean;
		public readonly marking: Marking | null;
		private readonly steps: Generator<
			SupportedFunctionCallingResult,
			void,
			void
		>;
		public next(): WithFunctionsSuccessfulAbstractifyingStatus {
			const step = this.steps.next();
			if (step.done) {
				return new WithFunctionsSuccessfulAbstractifyingStatus(
					true,
					null,
					this.steps,
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
						);
					}
					case returnFunctionCallingResultTypeName: {
						return new WithFunctionsSuccessfulAbstractifyingStatus(
							false,
							null,
							this.steps,
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
							const state = new State(
								new SuccessfulParsingStatus(
									new WithoutFunctionsSuccessfulAbstractifyingStatus(),
								),
								sourceCode,
							);
							return state;
						} else {
							const steps = abstractifiedParsedSourceCode.run(builtInFunctions);
							const state = new State(
								new SuccessfulParsingStatus(
									new WithFunctionsSuccessfulAbstractifyingStatus(
										false,
										null,
										steps,
									),
								),
								sourceCode,
							);
							return state;
						}
					}
					case errorAbstractifyingResultTypeName: {
						const state = new State(
							new SuccessfulParsingStatus(
								new ErrorAbstractifyingStatus(abstractifyingResult.message),
							),
							sourceCode,
						);
						return state;
					}
				}
			}
			case unexpectedCharacterParsingResultTypeName: {
				const state = new State(
					new UnexpectedCharacterParsingStatus(parsingResult.index),
					sourceCode,
				);
				return state;
			}
			case unexpectedFinalizingParsingResultTypeName: {
				const state = new State(
					new UnexpectedFinalizingParsingStatus(),
					sourceCode,
				);
				return state;
			}
			case extraCharactersParsingResultTypeName: {
				const state = new State(new ExtraCharactersParsingStatus(), sourceCode);
				return state;
			}
		}
	}
	let state: State = createState("");
	function handleTextareaInput(
		event: Event & {readonly currentTarget: HTMLTextAreaElement},
	): void {
		state = createState(event.currentTarget.value);
	}
	function handleStepButtonClick(): void {
		if (
			state.parsingStatus.typeName === successParsingStatusTypeName
			&& state.parsingStatus.abstractifyingStatus.typeName
				=== withFunctionsSuccessAbstractifyingStatusTypeName
		) {
			state = new State(
				new SuccessfulParsingStatus(
					state.parsingStatus.abstractifyingStatus.next(),
				),
				state.sourceCode,
			);
		}
	}
</script>

<main>
	<div class="status">
		{#if state.parsingStatus.typeName === successParsingStatusTypeName}
			{#if state.parsingStatus.abstractifyingStatus.typeName === withFunctionsSuccessAbstractifyingStatusTypeName}
				✔️ Valid <button
					type="button"
					onclick={handleStepButtonClick}
					disabled={state.parsingStatus.abstractifyingStatus.isDone}
					>👣 Do a step</button
				>
			{:else if state.parsingStatus.abstractifyingStatus.typeName === withoutFunctionsSuccessAbstractifyingStatusTypeName}
				❓ Nothing to run
			{:else if state.parsingStatus.abstractifyingStatus.typeName === errorAbstractifyingStatusTypeName}
				❌ {state.parsingStatus.abstractifyingStatus.message}
			{/if}
		{:else if state.parsingStatus.typeName === unexpectedCharacterParsingStatusTypeName}
			❌ Unexpected character at index {state.parsingStatus.index}
		{:else if state.parsingStatus.typeName === unexpectedFinalizingParsingStatusTypeName}
			❌ Unexpected end of the source code
		{:else if state.parsingStatus.typeName === extraCharactersParsingStatusTypeName}
			❌ Extra characters at the end of the source code
		{/if}
	</div>
	<div class="editor">
		<textarea value={state.sourceCode} oninput={handleTextareaInput}></textarea>
		<pre>{#each state.sourceCode.split("") as character, index}<span
					class:unexpected={state.parsingStatus.typeName
						=== unexpectedCharacterParsingStatusTypeName
						&& state.parsingStatus.index === index}
					class:step={state.parsingStatus.typeName
						=== successParsingStatusTypeName
						&& state.parsingStatus.abstractifyingStatus.typeName
							=== withFunctionsSuccessAbstractifyingStatusTypeName
						&& state.parsingStatus.abstractifyingStatus.marking !== null
						&& state.parsingStatus.abstractifyingStatus.marking.actionName
							=== "step"
						&& index
							>= state.parsingStatus.abstractifyingStatus.marking.spanIndexes
								.from
						&& index
							< state.parsingStatus.abstractifyingStatus.marking.spanIndexes
								.until}
					class:success={state.parsingStatus.typeName
						=== successParsingStatusTypeName
						&& state.parsingStatus.abstractifyingStatus.typeName
							=== withFunctionsSuccessAbstractifyingStatusTypeName
						&& state.parsingStatus.abstractifyingStatus.marking !== null
						&& state.parsingStatus.abstractifyingStatus.marking.actionName
							=== "success"
						&& index
							>= state.parsingStatus.abstractifyingStatus.marking.spanIndexes
								.from
						&& index
							< state.parsingStatus.abstractifyingStatus.marking.spanIndexes
								.until}
					class:failure={state.parsingStatus.typeName
						=== successParsingStatusTypeName
						&& state.parsingStatus.abstractifyingStatus.typeName
							=== withFunctionsSuccessAbstractifyingStatusTypeName
						&& state.parsingStatus.abstractifyingStatus.marking !== null
						&& state.parsingStatus.abstractifyingStatus.marking.actionName
							=== "failure"
						&& index
							>= state.parsingStatus.abstractifyingStatus.marking.spanIndexes
								.from
						&& index
							< state.parsingStatus.abstractifyingStatus.marking.spanIndexes
								.until}>{character}</span
				>{/each}</pre>
	</div>
</main>

<style lang="scss">
	main {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: min-content 1fr;
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
	}
	pre {
		grid-area: 1 / 1 / 2 / 2;
		margin-block: 0;
		pointer-events: none;
		font-size: inherit;
		color: hsl(0, 0%, 100%);
	}
</style>
