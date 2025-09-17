import {withMainFunctionFunctionsAbstractSyntaxTreeNodeTypeName} from "../../belve/abstract-syntax-tree-node/implementations/functions/implementations/with-main-function/type-name/withMainFunctionFunctionsAbstractSyntaxTreeNodeTypeName.ts";
import {withoutMainFunctionFunctionsAbstractSyntaxTreeNodeTypeName} from "../../belve/abstract-syntax-tree-node/implementations/functions/implementations/without-main-function/type-name/withoutMainFunctionFunctionsAbstractSyntaxTreeNodeTypeName.ts";
import {errorAbstractifyingResultTypeName} from "../../belve/abstractifying-result/implementations/error/type-name/errorAbstractifyingResultTypeName.ts";
import {successAbstractifyingResultTypeName} from "../../belve/abstractifying-result/implementations/success/type-name/successAbstractifyingResultTypeName.ts";
import {extraCharactersParsingResultTypeName} from "../../belve/parsing-result/implementations/extra-characters/type-name/extraCharactersParsingResultTypeName.ts";
import {successParsingResultTypeName} from "../../belve/parsing-result/implementations/success/type-name/successParsingResultTypeName.ts";
import {unexpectedCharacterParsingResultTypeName} from "../../belve/parsing-result/implementations/unexpected-character/type-name/unexpectedCharacterParsingResultTypeName.ts";
import {unexpectedFinalizingParsingResultTypeName} from "../../belve/parsing-result/implementations/unexpected-finalizing/type-name/unexpectedFinalizingParsingResultTypeName.ts";
import {parser} from "../../instances/parser/parser.ts";
import {ExtraCharactersParsingState} from "../parsing-state/implementations/extra-characters/ExtraCharactersParsingState.ts";
import {SuccessParsingState} from "../parsing-state/implementations/success/SuccessParsingState.ts";
import {ErrorAbstractifyingState} from "../parsing-state/implementations/success/abstractifying-state/implementations/error/ErrorAbstractifyingState.ts";
import {
	ReadyToRunExecutingState,
	WithMainFunctionAbstractifyingState,
} from "../parsing-state/implementations/success/abstractifying-state/implementations/with-main-function-success/WithMainFunctionAbstractifyingState.ts";
import {WithoutMainFunctionAbstractifyingState} from "../parsing-state/implementations/success/abstractifying-state/implementations/without-main-function-success/WithMainFunctionAbstractifyingState.ts";
import {UnexpectedCharacterParsingState} from "../parsing-state/implementations/unexpected-character/type-name/UnexpectedCharacterParsingState.ts";
import {UnexpectedFinalizingParsingState} from "../parsing-state/implementations/unexpected-finalizing/UnexpectedFinalizingParsingState.ts";
import type {SupportedParsingState} from "../parsing-state/supported/SupportedParsingState.ts";
export class State {
	public static create(sourceCode: string): State {
		const sourceCodeCharacters = sourceCode.split("");
		const parsingResult = parser.parse(sourceCodeCharacters);
		switch (parsingResult.typeName) {
			case extraCharactersParsingResultTypeName: {
				const state = new State(new ExtraCharactersParsingState(), sourceCode);
				return state;
			}
			case successParsingResultTypeName: {
				const concreteSourceCode = parsingResult.node;
				const abstractifyingResult = concreteSourceCode.abstractify();
				const state = new State(
					SuccessParsingState.create(abstractifyingResult),
					sourceCode,
				);
				return state;
			}
			case unexpectedCharacterParsingResultTypeName: {
				const state = new State(
					new UnexpectedCharacterParsingState(parsingResult.index),
					sourceCode,
				);
				return state;
			}
			case unexpectedFinalizingParsingResultTypeName: {
				const state = new State(
					new UnexpectedFinalizingParsingState(),
					sourceCode,
				);
				return state;
			}
		}
	}
	private constructor(parsingState: SupportedParsingState, sourceCode: string) {
		this.parsingState = parsingState;
		this.sourceCode = sourceCode;
	}
	public readonly parsingState: SupportedParsingState;
	public run(): State | this {
		if (this.parsingState.typeName === successParsingResultTypeName) {
			const nextParsingState = this.parsingState.run();
			const nextState = new State(nextParsingState, this.sourceCode);
			return nextState;
		} else {
			return this;
		}
	}
	public readonly sourceCode: string;
	public step(): State | this {
		if (this.parsingState.typeName === successParsingResultTypeName) {
			const nextParsingState = this.parsingState.step();
			const nextState = new State(nextParsingState, this.sourceCode);
			return nextState;
		} else {
			return this;
		}
	}
}
