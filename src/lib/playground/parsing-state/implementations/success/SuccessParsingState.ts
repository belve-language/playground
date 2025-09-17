import {
	WithMainFunctionAbstractifyingState,
	ReadyToRunExecutingState,
} from "./abstractifying-state/implementations/with-main-function-success/WithMainFunctionAbstractifyingState.ts";
import {withMainFunctionFunctionsAbstractSyntaxTreeNodeTypeName} from "../../../../belve/abstract-syntax-tree-node/implementations/functions/implementations/with-main-function/type-name/withMainFunctionFunctionsAbstractSyntaxTreeNodeTypeName.ts";
import {withoutMainFunctionFunctionsAbstractSyntaxTreeNodeTypeName} from "../../../../belve/abstract-syntax-tree-node/implementations/functions/implementations/without-main-function/type-name/withoutMainFunctionFunctionsAbstractSyntaxTreeNodeTypeName.ts";
import type {SupportedFunctionsAbstractSyntaxTreeNode} from "../../../../belve/abstract-syntax-tree-node/implementations/functions/supported/SupportedFunctionsAbstractSyntaxTreeNode.ts";
import type {ErrorAbstractifyingResult} from "../../../../belve/abstractifying-result/implementations/error/ErrorAbstractifyingResult.ts";
import {errorAbstractifyingResultTypeName} from "../../../../belve/abstractifying-result/implementations/error/type-name/errorAbstractifyingResultTypeName.ts";
import type {SuccessAbstractifyingResult} from "../../../../belve/abstractifying-result/implementations/success/SuccessAbstractifyingResult.ts";
import {successAbstractifyingResultTypeName} from "../../../../belve/abstractifying-result/implementations/success/type-name/successAbstractifyingResultTypeName.ts";
import {ParsingState} from "../../ParsingState.ts";
import {ErrorAbstractifyingState} from "./abstractifying-state/implementations/error/ErrorAbstractifyingState.ts";
import {withMainFunctionAbstractifyingStateTypeName} from "./abstractifying-state/implementations/with-main-function-success/type-name/withMainFunctionAbstractifyingStateTypeName.ts";
import {WithoutMainFunctionAbstractifyingState} from "./abstractifying-state/implementations/without-main-function-success/WithMainFunctionAbstractifyingState.ts";
import type {SupportedAbstractifyingState} from "./abstractifying-state/supported/SupportedAbstractifyingState.ts";
import {successParsingStateTypeName} from "./type-name/successParsingStateTypeName.ts";
export class SuccessParsingState extends ParsingState<
	typeof successParsingStateTypeName
> {
	public static create(
		abstractifyingResult:
			| ErrorAbstractifyingResult
			| SuccessAbstractifyingResult<null>
			| SuccessAbstractifyingResult<SupportedFunctionsAbstractSyntaxTreeNode>,
	): SuccessParsingState {
		switch (abstractifyingResult.typeName) {
			case errorAbstractifyingResultTypeName: {
				const state = new SuccessParsingState(
					new ErrorAbstractifyingState(abstractifyingResult.message),
				);
				return state;
			}
			case successAbstractifyingResultTypeName: {
				const abstractSourceCode = abstractifyingResult.data;
				if (abstractSourceCode === null) {
					const state = new SuccessParsingState(
						new WithoutMainFunctionAbstractifyingState(),
					);
					return state;
				} else {
					switch (abstractSourceCode.typeName) {
						case withMainFunctionFunctionsAbstractSyntaxTreeNodeTypeName: {
							const state = new SuccessParsingState(
								new WithMainFunctionAbstractifyingState(
									new ReadyToRunExecutingState(),
									abstractSourceCode,
								),
							);
							return state;
						}
						case withoutMainFunctionFunctionsAbstractSyntaxTreeNodeTypeName: {
							const state = new SuccessParsingState(
								new WithoutMainFunctionAbstractifyingState(),
							);
							return state;
						}
					}
				}
			}
		}
	}
	private constructor(abstractifyingState: SupportedAbstractifyingState) {
		super(successParsingStateTypeName);
		this.abstractifyingState = abstractifyingState;
	}
	public readonly abstractifyingState: SupportedAbstractifyingState;
	public run(): SuccessParsingState | this {
		if (
			this.abstractifyingState.typeName
			=== withMainFunctionAbstractifyingStateTypeName
		) {
			const nextAbstractifyingState = this.abstractifyingState.run();
			const nextState = new SuccessParsingState(nextAbstractifyingState);
			return nextState;
		} else {
			return this;
		}
	}
	public step(): SuccessParsingState | this {
		if (
			this.abstractifyingState.typeName
			=== withMainFunctionAbstractifyingStateTypeName
		) {
			const nextAbstractifyingState = this.abstractifyingState.step();
			const nextState = new SuccessParsingState(nextAbstractifyingState);
			return nextState;
		} else {
			return this;
		}
	}
}
