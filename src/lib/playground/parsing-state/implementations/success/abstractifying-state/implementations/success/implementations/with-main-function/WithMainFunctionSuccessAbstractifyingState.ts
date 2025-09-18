import type {WithMainFunctionFunctionsAbstractSyntaxTreeNode} from "../../../../../../../../../belve/abstract-syntax-tree-node/implementations/functions/implementations/with-main-function/WithMainFunctionFunctionsAbstractSyntaxTreeNode.ts";
import {builtInFunctions} from "../../../../../../../../../belve/built-in-functions/builtInFunctions.ts";
import {SuccessAbstractifyingState} from "../../SuccessAbstractifyingState.ts";
import {busyExecutingStateTypeName} from "./executing-state/implementations/busy/type-name/busyExecutingStateTypeName.ts";
import {idleExecutingStateTypeName} from "./executing-state/implementations/idle/type-name/idleExecutingStateTypeName.ts";
import type {SupportedExecutingState} from "./executing-state/supported/SupportedExecutingState.ts";
import {withMainFunctionSuccessAbstractifyingStateSubTypeName} from "./sub-type-name/withMainFunctionSuccessAbstractifyingStateSubTypeName.ts";
export class WithMainFunctionSuccessAbstractifyingState extends SuccessAbstractifyingState<
	typeof withMainFunctionSuccessAbstractifyingStateSubTypeName
> {
	public constructor(
		executingState: SupportedExecutingState,
		functions: WithMainFunctionFunctionsAbstractSyntaxTreeNode,
	) {
		super(withMainFunctionSuccessAbstractifyingStateSubTypeName);
		this.executingState = executingState;
		this.functions = functions;
	}
	public readonly executingState: SupportedExecutingState;
	public readonly functions: WithMainFunctionFunctionsAbstractSyntaxTreeNode;
	public run(): this | WithMainFunctionSuccessAbstractifyingState {
		if (this.executingState.typeName === idleExecutingStateTypeName) {
			const newExecutingState = this.executingState.run(
				this.functions.run(builtInFunctions),
			);
			const newState = new WithMainFunctionSuccessAbstractifyingState(
				newExecutingState,
				this.functions,
			);
			return newState;
		} else {
			return this;
		}
	}
	public step(): this | WithMainFunctionSuccessAbstractifyingState {
		if (this.executingState.typeName === busyExecutingStateTypeName) {
			const newExecutingState = this.executingState.step();
			const newState = new WithMainFunctionSuccessAbstractifyingState(
				newExecutingState,
				this.functions,
			);
			return newState;
		} else {
			return this;
		}
	}
}
