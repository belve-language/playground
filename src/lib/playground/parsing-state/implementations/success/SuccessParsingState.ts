import {WithMainFunctionSuccessAbstractifyingState} from "./abstractifying-state/implementations/success/implementations/with-main-function/WithMainFunctionSuccessAbstractifyingState.ts";
import {withMainFunctionSuccessAbstractifyingStateSubTypeName} from "./abstractifying-state/implementations/success/implementations/with-main-function/sub-type-name/withMainFunctionSuccessAbstractifyingStateSubTypeName.ts";
import {WithoutMainFunctionSuccessAbstractifyingState} from "./abstractifying-state/implementations/success/implementations/without-main-function/WithoutMainFunctionSuccessAbstractifyingState.ts";
import {successAbstractifyingStateTypeName} from "./abstractifying-state/implementations/success/type-name/successAbstractifyingStateTypeName.ts";
import {withMainFunctionFunctionsAbstractSyntaxTreeNodeTypeName} from "../../../../belve/abstract-syntax-tree-node/implementations/functions/implementations/with-main-function/type-name/withMainFunctionFunctionsAbstractSyntaxTreeNodeTypeName.ts";
import {withoutMainFunctionFunctionsAbstractSyntaxTreeNodeTypeName} from "../../../../belve/abstract-syntax-tree-node/implementations/functions/implementations/without-main-function/type-name/withoutMainFunctionFunctionsAbstractSyntaxTreeNodeTypeName.ts";
import type {SupportedFunctionsAbstractSyntaxTreeNode} from "../../../../belve/abstract-syntax-tree-node/implementations/functions/supported/SupportedFunctionsAbstractSyntaxTreeNode.ts";
import type {ErrorAbstractifyingResult} from "../../../../belve/abstractifying-result/implementations/error/ErrorAbstractifyingResult.ts";
import {errorAbstractifyingResultTypeName} from "../../../../belve/abstractifying-result/implementations/error/type-name/errorAbstractifyingResultTypeName.ts";
import type {SuccessAbstractifyingResult} from "../../../../belve/abstractifying-result/implementations/success/SuccessAbstractifyingResult.ts";
import {successAbstractifyingResultTypeName} from "../../../../belve/abstractifying-result/implementations/success/type-name/successAbstractifyingResultTypeName.ts";
import {ParsingState} from "../../ParsingState.ts";
import {ErrorAbstractifyingState} from "./abstractifying-state/implementations/error/ErrorAbstractifyingState.ts";
import {IdleExecutingState} from "./abstractifying-state/implementations/success/implementations/with-main-function/executing-state/implementations/idle/IdleExecutingState.ts";
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
					const abstractifyingState =
						new WithoutMainFunctionSuccessAbstractifyingState();
					const state = new SuccessParsingState(abstractifyingState);
					return state;
				} else {
					switch (abstractSourceCode.typeName) {
						case withMainFunctionFunctionsAbstractSyntaxTreeNodeTypeName: {
							const executingState = new IdleExecutingState();
							const abstractifyingState =
								new WithMainFunctionSuccessAbstractifyingState(
									executingState,
									abstractSourceCode,
								);
							const state = new SuccessParsingState(abstractifyingState);
							return state;
						}
						case withoutMainFunctionFunctionsAbstractSyntaxTreeNodeTypeName: {
							const abstractifyingState =
								new WithoutMainFunctionSuccessAbstractifyingState();
							const state = new SuccessParsingState(abstractifyingState);
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
			this.abstractifyingState.typeName === successAbstractifyingStateTypeName
			&& this.abstractifyingState.subTypeName
				=== withMainFunctionSuccessAbstractifyingStateSubTypeName
		) {
			const newAbstractifyingState = this.abstractifyingState.run();
			const newState = new SuccessParsingState(newAbstractifyingState);
			return newState;
		} else {
			return this;
		}
	}
	public step(): SuccessParsingState | this {
		if (
			this.abstractifyingState.typeName === successAbstractifyingStateTypeName
			&& this.abstractifyingState.subTypeName
				=== withMainFunctionSuccessAbstractifyingStateSubTypeName
		) {
			const newAbstractifyingState = this.abstractifyingState.step();
			const newState = new SuccessParsingState(newAbstractifyingState);
			return newState;
		} else {
			return this;
		}
	}
}
