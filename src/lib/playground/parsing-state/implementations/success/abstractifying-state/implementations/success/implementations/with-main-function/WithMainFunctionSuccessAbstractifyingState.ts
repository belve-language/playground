import type {WithMainFunctionFunctionsAbstractSyntaxTreeNode} from "../../../../../../../../../belve/abstract-syntax-tree-node/implementations/functions/implementations/with-main-function/WithMainFunctionFunctionsAbstractSyntaxTreeNode.ts";
import {builtInFunctions} from "../../../../../../../../../instances/built-in-functions/builtInFunctions.ts";
import {SuccessAbstractifyingState} from "../../SuccessAbstractifyingState.ts";
import {busyExecutingStateTypeName} from "./executing-state/implementations/busy/type-name/busyExecutingStateTypeName.ts";
import {doneExecutingStateTypeName} from "./executing-state/implementations/done/type-name/doneExecutingStateTypeName.ts";
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
	public *generateEveryExecutingState(): Generator<
		WithMainFunctionSuccessAbstractifyingState,
		void,
		void
	> {
		const executingStates = this.executingState.generateEveryExecutingState(
			this.functions.run(builtInFunctions),
		);
		for (const executingState of executingStates) {
			const newState: WithMainFunctionSuccessAbstractifyingState =
				new WithMainFunctionSuccessAbstractifyingState(
					executingState,
					this.functions,
				);
			yield newState;
		}
	}
	public run(): WithMainFunctionSuccessAbstractifyingState {
		if (
			this.executingState.typeName === idleExecutingStateTypeName
			|| this.executingState.typeName === doneExecutingStateTypeName
		) {
			const newExecutingState = this.executingState.run(
				this.functions.run(builtInFunctions),
			);
			const newState = new WithMainFunctionSuccessAbstractifyingState(
				newExecutingState,
				this.functions,
			);
			return newState;
		} else {
			throw new Error("Cannot run non-idle executing state.");
		}
	}
	public step(): WithMainFunctionSuccessAbstractifyingState {
		if (this.executingState.typeName === busyExecutingStateTypeName) {
			const newExecutingState = this.executingState.step();
			const newState = new WithMainFunctionSuccessAbstractifyingState(
				newExecutingState,
				this.functions,
			);
			return newState;
		} else {
			throw new Error("Cannot step non-busy executing state.");
		}
	}
}
