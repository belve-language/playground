import type {WithMainFunctionFunctionsAbstractSyntaxTreeNode} from "../../../../../../../belve/abstract-syntax-tree-node/implementations/functions/implementations/with-main-function/WithMainFunctionFunctionsAbstractSyntaxTreeNode.ts";
import {builtInFunctions} from "../../../../../../../belve/built-in-functions/builtInFunctions.ts";
import {successLogFunctionCallingResultTypeName} from "../../../../../../../belve/function-calling-result/implementations/log/LogFunctionCallingResult.ts";
import {logFunctionCallingResultTypeName} from "../../../../../../../belve/function-calling-result/implementations/log/type-name/logFunctionCallingResultTypeName.ts";
import {returnFunctionCallingResultTypeName} from "../../../../../../../belve/function-calling-result/implementations/return/type-name/returnFunctionCallingResultTypeName.ts";
import type {SupportedFunctionCallingResult} from "../../../../../../../belve/function-calling-result/supported/SupportedFunctionCallingResult.ts";
import {SpanIndexes} from "../../../../../../../belve/span-indexes/SpanIndexes.ts";
import type {Variables} from "../../../../../../../belve/variables/Variables.ts";
import {AbstractifyingState} from "../../AbstractifyingState.ts";
import {withMainFunctionAbstractifyingStateTypeName} from "./type-name/withMainFunctionAbstractifyingStateTypeName.ts";
export abstract class ExecutingState<TypeName extends string> {
	protected constructor(typeName: TypeName) {
		this.typeName = typeName;
	}
	public readonly typeName: TypeName;
}
export const readyToRunExecutingStateTypeName = "readyToRun";
export class ReadyToRunExecutingState extends ExecutingState<
	typeof readyToRunExecutingStateTypeName
> {
	public constructor() {
		super(readyToRunExecutingStateTypeName);
	}
	public run(
		generator: Generator<SupportedFunctionCallingResult, void, void>,
	): ReadyToRunExecutingState | RunningExecutingState {
		const result = generator.next();
		if (result.done) {
			const nextState = new ReadyToRunExecutingState();
			return nextState;
		} else {
			switch (result.value.typeName) {
				case logFunctionCallingResultTypeName: {
					const nextState = new RunningExecutingState(
						generator,
						new Highlight(
							result.value.node.spanIndexes,
							result.value.actionTypeName,
						),
						(
							result.value.actionTypeName
							=== successLogFunctionCallingResultTypeName
						) ?
							result.value.unknowns
						:	null,
						result.value.variables,
					);
					return nextState;
				}
				case returnFunctionCallingResultTypeName: {
					const nextState = new RunningExecutingState(
						generator,
						new Highlight(new SpanIndexes(0, 0), "step"),
						null,
						{},
					);
					return nextState;
				}
			}
		}
	}
}
export const stepHighlightTypeName = "step";
export const failureHighlightTypeName = "failure";
export const successHighlightTypeName = "success";
type SupportedHighlightTypeName =
	| typeof failureHighlightTypeName
	| typeof stepHighlightTypeName
	| typeof successHighlightTypeName;
class Highlight {
	public constructor(
		spanIndexes: SpanIndexes,
		typeName: SupportedHighlightTypeName,
	) {
		this.spanIndexes = spanIndexes;
		this.typeName = typeName;
	}
	public readonly spanIndexes: SpanIndexes;
	public readonly typeName: SupportedHighlightTypeName;
}
export const runningExecutingStateTypeName = "running";
export class RunningExecutingState extends ExecutingState<
	typeof runningExecutingStateTypeName
> {
	public constructor(
		generator: Generator<SupportedFunctionCallingResult, void, void>,
		highlight: Highlight,
		unknowns: null | Variables,
		variables: Variables,
	) {
		super(runningExecutingStateTypeName);
		this.generator = generator;
		this.highlight = highlight;
		this.unknowns = unknowns;
		this.variables = variables;
	}
	public readonly generator: Generator<
		SupportedFunctionCallingResult,
		void,
		void
	>;
	public readonly highlight: Highlight;
	public step(): ReadyToRunExecutingState | RunningExecutingState {
		const result = this.generator.next();
		if (result.done) {
			const nextState = new ReadyToRunExecutingState();
			return nextState;
		} else {
			switch (result.value.typeName) {
				case logFunctionCallingResultTypeName: {
					const nextState = new RunningExecutingState(
						this.generator,
						new Highlight(
							result.value.node.spanIndexes,
							result.value.actionTypeName,
						),
						(
							result.value.actionTypeName
							=== successLogFunctionCallingResultTypeName
						) ?
							result.value.unknowns
						:	null,
						result.value.variables,
					);
					return nextState;
				}
				case returnFunctionCallingResultTypeName: {
					const nextState = new RunningExecutingState(
						this.generator,
						new Highlight(new SpanIndexes(0, 0), "step"),
						null,
						{},
					);
					return nextState;
				}
			}
		}
	}
	public readonly unknowns: null | Variables;
	public readonly variables: Variables;
}
type SupportedExecutingState = ReadyToRunExecutingState | RunningExecutingState;
export class WithMainFunctionAbstractifyingState extends AbstractifyingState<
	typeof withMainFunctionAbstractifyingStateTypeName
> {
	public constructor(
		executingState: SupportedExecutingState,
		withMainFunctionFunctions: WithMainFunctionFunctionsAbstractSyntaxTreeNode,
	) {
		super(withMainFunctionAbstractifyingStateTypeName);
		this.executingState = executingState;
		this.withMainFunctionFunctions = withMainFunctionFunctions;
	}
	public readonly executingState: SupportedExecutingState;
	public run(): this | WithMainFunctionAbstractifyingState {
		if (this.executingState.typeName === readyToRunExecutingStateTypeName) {
			const nextExecutingState = this.executingState.run(
				this.withMainFunctionFunctions.run(builtInFunctions),
			);
			const nextState = new WithMainFunctionAbstractifyingState(
				nextExecutingState,
				this.withMainFunctionFunctions,
			);
			return nextState;
		} else {
			return this;
		}
	}
	public step(): this | WithMainFunctionAbstractifyingState {
		if (this.executingState.typeName === runningExecutingStateTypeName) {
			const nextExecutingState = this.executingState.step();
			const nextState = new WithMainFunctionAbstractifyingState(
				nextExecutingState,
				this.withMainFunctionFunctions,
			);
			return nextState;
		} else {
			return this;
		}
	}
	public readonly withMainFunctionFunctions: WithMainFunctionFunctionsAbstractSyntaxTreeNode;
}
