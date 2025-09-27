import type {Character} from "../../belve/character/Character.ts";
import type {NonMainFunctions} from "../../belve/non-main-functions/NonMainFunctions.ts";
import {extraCharactersParsingResultTypeName} from "../../belve/parsing-result/implementations/extra-characters/type-name/extraCharactersParsingResultTypeName.ts";
import {successParsingResultTypeName} from "../../belve/parsing-result/implementations/success/type-name/successParsingResultTypeName.ts";
import {unexpectedCharacterParsingResultTypeName} from "../../belve/parsing-result/implementations/unexpected-character/type-name/unexpectedCharacterParsingResultTypeName.ts";
import {unexpectedFinalizingParsingResultTypeName} from "../../belve/parsing-result/implementations/unexpected-finalizing/type-name/unexpectedFinalizingParsingResultTypeName.ts";
import {parser} from "../../instances/parser/parser.ts";
import type {BuiltInFunction} from "../built-in-functions/built-in-function/BuiltInFunction.ts";
import {ExtraCharactersParsingState} from "../parsing-state/implementations/extra-characters/ExtraCharactersParsingState.ts";
import {SuccessParsingState} from "../parsing-state/implementations/success/SuccessParsingState.ts";
import type {WithMainFunctionSuccessAbstractifyingState} from "../parsing-state/implementations/success/abstractifying-state/implementations/success/implementations/with-main-function/WithMainFunctionSuccessAbstractifyingState.ts";
import type {SupportedAbstractifyingState} from "../parsing-state/implementations/success/abstractifying-state/supported/SupportedAbstractifyingState.ts";
import {UnexpectedCharacterParsingState} from "../parsing-state/implementations/unexpected-character/type-name/UnexpectedCharacterParsingState.ts";
import {UnexpectedFinalizingParsingState} from "../parsing-state/implementations/unexpected-finalizing/UnexpectedFinalizingParsingState.ts";
import type {SupportedParsingState} from "../parsing-state/supported/SupportedParsingState.ts";
export class State<ParsingStateToUse extends SupportedParsingState> {
	public static create(
		builtInFunctions: NonMainFunctions<BuiltInFunction>,
		sourceCode: readonly string[],
	):
		| State<ExtraCharactersParsingState>
		| State<SupportedParsingState>
		| State<UnexpectedCharacterParsingState>
		| State<UnexpectedFinalizingParsingState> {
		const parsingResult = parser.parse(sourceCode);
		switch (parsingResult.typeName) {
			case extraCharactersParsingResultTypeName: {
				const state: State<ExtraCharactersParsingState> =
					new this<ExtraCharactersParsingState>(
						new ExtraCharactersParsingState(),
						sourceCode,
					);
				return state;
			}
			case successParsingResultTypeName: {
				const concreteSourceCode = parsingResult.node;
				const abstractifyingResult = concreteSourceCode.abstractify();
				const parsingState: SuccessParsingState<SupportedAbstractifyingState> =
					SuccessParsingState.create(abstractifyingResult, builtInFunctions);
				const state: State<SupportedParsingState> =
					new this<SupportedParsingState>(parsingState, sourceCode);
				return state;
			}
			case unexpectedCharacterParsingResultTypeName: {
				const parsingState: UnexpectedCharacterParsingState =
					new UnexpectedCharacterParsingState(parsingResult.index);
				const state: State<UnexpectedCharacterParsingState> =
					new this<UnexpectedCharacterParsingState>(parsingState, sourceCode);
				return state;
			}
			case unexpectedFinalizingParsingResultTypeName: {
				const parsingState: UnexpectedFinalizingParsingState =
					new UnexpectedFinalizingParsingState();
				const state: State<UnexpectedFinalizingParsingState> =
					new this<UnexpectedFinalizingParsingState>(parsingState, sourceCode);
				return state;
			}
		}
	}
	private constructor(
		parsingState: ParsingStateToUse,
		sourceCode: readonly string[],
	) {
		this.parsingState = parsingState;
		this.sourceCode = sourceCode;
	}
	public *generateEveryExecutingState(): Generator<
		State<SuccessParsingState<WithMainFunctionSuccessAbstractifyingState>>,
		void,
		undefined
	> {
		if (this.parsingState.typeName === successParsingResultTypeName) {
			const parsingStates = this.parsingState.generateEveryExecutingState();
			for (const parsingState of parsingStates) {
				const state: State<
					SuccessParsingState<WithMainFunctionSuccessAbstractifyingState>
				> = new State(parsingState, this.sourceCode);
				yield state;
			}
		}
	}
	public readonly parsingState: ParsingStateToUse;
	public run(): State<
		SuccessParsingState<WithMainFunctionSuccessAbstractifyingState>
	> {
		if (this.parsingState.typeName === successParsingResultTypeName) {
			const newParsingState = this.parsingState.run();
			const newState: State<
				SuccessParsingState<WithMainFunctionSuccessAbstractifyingState>
			> = new State<
				SuccessParsingState<WithMainFunctionSuccessAbstractifyingState>
			>(newParsingState, this.sourceCode);
			return newState;
		} else {
			throw new Error("Cannot run non-success parsing state.");
		}
	}
	public readonly sourceCode: readonly Character[];
	public step(): State<
		SuccessParsingState<WithMainFunctionSuccessAbstractifyingState>
	> {
		if (this.parsingState.typeName === successParsingResultTypeName) {
			const newParsingState = this.parsingState.step();
			const newState: State<
				SuccessParsingState<WithMainFunctionSuccessAbstractifyingState>
			> = new State<
				SuccessParsingState<WithMainFunctionSuccessAbstractifyingState>
			>(newParsingState, this.sourceCode);
			return newState;
		} else {
			throw new Error("Cannot step non-success parsing state.");
		}
	}
}
