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
import type {NonMainFunctions} from "../../../../belve/non-main-functions/NonMainFunctions.ts";
import type {BuiltInFunction} from "../../../built-in-functions/built-in-function/BuiltInFunction.ts";
export class SuccessParsingState<
	AbstractifyingStateToUse extends SupportedAbstractifyingState,
> extends ParsingState<typeof successParsingStateTypeName> {
	public static create(
		abstractifyingResult:
			| ErrorAbstractifyingResult
			| SuccessAbstractifyingResult<null>
			| SuccessAbstractifyingResult<SupportedFunctionsAbstractSyntaxTreeNode>,
		builtInFunctions: NonMainFunctions<BuiltInFunction>,
	):
		| SuccessParsingState<ErrorAbstractifyingState>
		| SuccessParsingState<WithMainFunctionSuccessAbstractifyingState>
		| SuccessParsingState<WithoutMainFunctionSuccessAbstractifyingState>
		| SuccessParsingState<WithoutMainFunctionSuccessAbstractifyingState> {
		switch (abstractifyingResult.typeName) {
			case errorAbstractifyingResultTypeName: {
				const abstractifyingState: ErrorAbstractifyingState =
					new ErrorAbstractifyingState(abstractifyingResult.message);
				const state: SuccessParsingState<ErrorAbstractifyingState> =
					new this<ErrorAbstractifyingState>(abstractifyingState);
				return state;
			}
			case successAbstractifyingResultTypeName: {
				const abstractSourceCode = abstractifyingResult.data;
				if (abstractSourceCode === null) {
					const abstractifyingState: WithoutMainFunctionSuccessAbstractifyingState =
						new WithoutMainFunctionSuccessAbstractifyingState(null);
					const state: SuccessParsingState<WithoutMainFunctionSuccessAbstractifyingState> =
						new this<WithoutMainFunctionSuccessAbstractifyingState>(
							abstractifyingState,
						);
					return state;
				} else {
					switch (abstractSourceCode.typeName) {
						case withMainFunctionFunctionsAbstractSyntaxTreeNodeTypeName: {
							const executingState: IdleExecutingState = new IdleExecutingState(
								abstractSourceCode.run(builtInFunctions),
							);
							const abstractifyingState: WithMainFunctionSuccessAbstractifyingState =
								new WithMainFunctionSuccessAbstractifyingState(
									executingState,
									abstractSourceCode,
								);
							const state: SuccessParsingState<WithMainFunctionSuccessAbstractifyingState> =
								new this<WithMainFunctionSuccessAbstractifyingState>(
									abstractifyingState,
								);
							return state;
						}
						case withoutMainFunctionFunctionsAbstractSyntaxTreeNodeTypeName: {
							const abstractifyingState: WithoutMainFunctionSuccessAbstractifyingState =
								new WithoutMainFunctionSuccessAbstractifyingState(
									abstractSourceCode,
								);
							const state: SuccessParsingState<WithoutMainFunctionSuccessAbstractifyingState> =
								new this<WithoutMainFunctionSuccessAbstractifyingState>(
									abstractifyingState,
								);
							return state;
						}
					}
				}
			}
		}
	}
	private constructor(abstractifyingState: AbstractifyingStateToUse) {
		super(successParsingStateTypeName);
		this.abstractifyingState = abstractifyingState;
	}
	public readonly abstractifyingState: AbstractifyingStateToUse;
	public *generateEveryExecutingState(): Generator<
		SuccessParsingState<WithMainFunctionSuccessAbstractifyingState>,
		void,
		undefined
	> {
		if (
			this.abstractifyingState.typeName === successAbstractifyingResultTypeName
			&& this.abstractifyingState.subTypeName
				=== withMainFunctionSuccessAbstractifyingStateSubTypeName
		) {
			const abstractifyingStates =
				this.abstractifyingState.generateEveryExecutingState();
			for (const abstractifyingState of abstractifyingStates) {
				const state: SuccessParsingState<WithMainFunctionSuccessAbstractifyingState> =
					new SuccessParsingState<WithMainFunctionSuccessAbstractifyingState>(
						abstractifyingState,
					);
				yield state;
			}
		}
	}
	public run(): SuccessParsingState<WithMainFunctionSuccessAbstractifyingState> {
		if (
			this.abstractifyingState.typeName === successAbstractifyingStateTypeName
			&& this.abstractifyingState.subTypeName
				=== withMainFunctionSuccessAbstractifyingStateSubTypeName
		) {
			const newAbstractifyingState = this.abstractifyingState.run();
			const newState: SuccessParsingState<WithMainFunctionSuccessAbstractifyingState> =
				new SuccessParsingState<WithMainFunctionSuccessAbstractifyingState>(
					newAbstractifyingState,
				);
			return newState;
		} else {
			throw new Error("Cannot run non-with-main-function state.");
		}
	}
	public step(): SuccessParsingState<WithMainFunctionSuccessAbstractifyingState> {
		if (
			this.abstractifyingState.typeName === successAbstractifyingStateTypeName
			&& this.abstractifyingState.subTypeName
				=== withMainFunctionSuccessAbstractifyingStateSubTypeName
		) {
			const newAbstractifyingState = this.abstractifyingState.step();
			const newState: SuccessParsingState<WithMainFunctionSuccessAbstractifyingState> =
				new SuccessParsingState<WithMainFunctionSuccessAbstractifyingState>(
					newAbstractifyingState,
				);
			return newState;
		} else {
			throw new Error("Cannot step non-with-main-function state.");
		}
	}
}
