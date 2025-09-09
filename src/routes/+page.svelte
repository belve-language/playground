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
	const errorParsingStatusTypeName = "error";
	class ErrorParsingStatus extends ParsingStatus<
		typeof errorParsingStatusTypeName
	> {
		public readonly message: string;
		public constructor(message: string) {
			super(errorParsingStatusTypeName);
			this.message = message;
		}
	}
	type SupportedParsingStatus = SuccessfulParsingStatus | ErrorParsingStatus;
	abstract class AbstractifyingStatus<TypeName extends string> {
		public readonly typeName: TypeName;
		protected constructor(typeName: TypeName) {
			this.typeName = typeName;
		}
	}
	const withFunctionsSuccessAbstractifyingStatusTypeName =
		"withFunctionsSuccess";
	class WithFunctionsSuccessfulAbstractifyingStatus extends AbstractifyingStatus<
		typeof withFunctionsSuccessAbstractifyingStatusTypeName
	> {
		public constructor(
			steps: Generator<SupportedFunctionCallingResult, void, void>,
		) {
			super(withFunctionsSuccessAbstractifyingStatusTypeName);
			this.steps = steps;
		}
		public readonly steps: Generator<
			SupportedFunctionCallingResult,
			void,
			void
		>;
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
	// type SupportedParsingStatus =
	// 	| {
	// 			readonly typeName: "success";
	// 			readonly data: {
	// 				readonly abstractifyingResult: SupportedAbstractifyingStatus;
	// 			};
	// 	  }
	// 	| {readonly typeName: "error"; readonly data: {readonly message: string}};
	// type SupportedAbstractifyingStatus =
	// 	| {readonly typeName: "success"}
	// 	| {readonly typeName: "error"; readonly data: {readonly message: string}};
	// type State = {
	// 	readonly rawSourceCode: string;
	// 	readonly parsingStatus: SupportedParsingStatus;
	// };
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
							const steps =
								abstractifiedParsedSourceCode.executeComplexly(
									builtInFunctions,
								);
							const state = new State(
								new SuccessfulParsingStatus(
									new WithFunctionsSuccessfulAbstractifyingStatus(steps),
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
			case unexpectedFinalizingParsingResultTypeName:
			case unexpectedCharacterParsingResultTypeName:
			case extraCharactersParsingResultTypeName: {
				const state = new State(new ErrorParsingStatus("Error"), sourceCode);
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
			const step = state.parsingStatus.abstractifyingStatus.steps.next();
			if (step.done) {
				console.log("No more steps.");
			} else {
				console.log({step: step});
			}
		}
	}
</script>

<main>
	<div class="status">
		{#if state.parsingStatus.typeName === successParsingStatusTypeName}
			{#if state.parsingStatus.abstractifyingStatus.typeName === withFunctionsSuccessAbstractifyingStatusTypeName}
				✔️ Ready to be executed
			{:else if state.parsingStatus.abstractifyingStatus.typeName === withoutFunctionsSuccessAbstractifyingStatusTypeName}
				❓ Nothing to execute
			{:else if state.parsingStatus.abstractifyingStatus.typeName === errorAbstractifyingStatusTypeName}
				❌ Abstractifying error: {state.parsingStatus.abstractifyingStatus
					.message}
			{/if}
		{:else if state.parsingStatus.typeName === errorParsingStatusTypeName}
			❌ Parsing error: {state.parsingStatus.message}
		{/if}
		<button
			type="button"
			onclick={handleStepButtonClick}
			disabled={state.parsingStatus.typeName !== successParsingStatusTypeName
				|| state.parsingStatus.abstractifyingStatus.typeName
					!== withFunctionsSuccessAbstractifyingStatusTypeName}>👣</button
		>
	</div>
	<div class="editor">
		<textarea value={state.sourceCode} oninput={handleTextareaInput}></textarea>
		<pre>{state.sourceCode}</pre>
	</div>
</main>

<style lang="scss">
	main {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: min-content 1fr;
	}
	.status {
		padding: 0.5rem;
	}
	.editor {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: 1fr;
		padding: 2px;
		overflow: scroll;
		font-size: 1rem;
		border: 1px solid black;
	}
	textarea {
		padding: 0;
		border: none;
		grid-area: 1 / 1 / 2 / 2;
		font-size: inherit;
		resize: none;
		color: transparent;
		caret-color: black;
	}
	pre {
		grid-area: 1 / 1 / 2 / 2;
		margin-block: 0;
		pointer-events: none;
		font-size: inherit;
	}
</style>
