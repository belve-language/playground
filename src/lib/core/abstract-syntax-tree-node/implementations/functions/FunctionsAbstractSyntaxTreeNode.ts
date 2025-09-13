import type {FunctionsAbstractSyntaxTreeNodeChildren} from "./children/FunctionsAbstractSyntaxTreeNodeChildren.ts";
import {combineDependentGeneratorsProducting} from "../../../../combineDependentGeneratorsProducting.ts";
import {combineIndependentGeneratorsInterleaving} from "../../../../combining-independent-generators-interleaving/combineIndependentGeneratorsInterleaving.ts";
import type {SupportedFunctionCallingResult} from "../../../function-calling-result/supported/SupportedFunctionCallingResult.ts";
import type {Functions} from "../../../functions/Functions.ts";
import {generateNewFunction} from "../../../generating-new-function/generateNewFunction.ts";
import {SpanIndexes} from "../../../span-indexes/SpanIndexes.ts";
import {AbstractSyntaxTreeNode} from "../../AbstractSyntaxTreeNode.ts";
import type {FunctionHeaderAbstractSyntaxTreeNode} from "../function-header/FunctionHeaderAbstractSyntaxTreeNode.ts";
export class FunctionsAbstractSyntaxTreeNode extends AbstractSyntaxTreeNode<FunctionsAbstractSyntaxTreeNodeChildren> {
	public constructor(
		children: FunctionsAbstractSyntaxTreeNodeChildren,
		spanIndexes: SpanIndexes,
	) {
		super(children, spanIndexes);
	}
	public *mutate(
		builtInFunctionsHeaders: readonly FunctionHeaderAbstractSyntaxTreeNode[],
		maximalUserFunctionsCount: number,
	): Generator<FunctionsAbstractSyntaxTreeNode, void, void> {
		for (const mutatedFunctions of combineIndependentGeneratorsInterleaving(
			this.mutateByAddingFunction(
				builtInFunctionsHeaders,
				maximalUserFunctionsCount,
			),
			this.mutateByMutatingFunction(
				builtInFunctionsHeaders,
				maximalUserFunctionsCount,
			),
		)) {
			yield mutatedFunctions;
		}
	}
	private *mutateByAddingFunction(
		builtInFunctionsHeaders: readonly FunctionHeaderAbstractSyntaxTreeNode[],
		maximalUserFunctionsCount: number,
	): Generator<FunctionsAbstractSyntaxTreeNode, void, void> {
		const userFunctionsHeaders = Object.values(this.children.functions).map(
			(function_) => {
				return function_.children.header;
			},
		);
		if (userFunctionsHeaders.length >= maximalUserFunctionsCount) {
			return;
		} else {
			const combinedFunctionsHeaders = [
				...builtInFunctionsHeaders,
				...userFunctionsHeaders,
			];
			const this_ = this;
			for (const mutatedFunctions of combineDependentGeneratorsProducting(
				generateNewFunction("", 0, combinedFunctionsHeaders),
				function* (mutatedFunction) {
					const mutatedFunctions = new FunctionsAbstractSyntaxTreeNode(
						{
							functions: {
								...this_.children.functions,
								[mutatedFunction.id]: mutatedFunction,
							},
							mainFunction: this_.children.mainFunction,
						},
						new SpanIndexes(0, 0),
					);
					yield mutatedFunctions;
					for (const deeperMutatedFunctions of mutatedFunctions.mutate(
						builtInFunctionsHeaders,
						maximalUserFunctionsCount,
					)) {
						yield deeperMutatedFunctions;
					}
				},
			)) {
				yield mutatedFunctions;
			}
		}
	}
	public *mutateByMutatingFunction(
		builtInFunctionsHeaders: readonly FunctionHeaderAbstractSyntaxTreeNode[],
		maximalUserFunctionsCount: number,
	): Generator<FunctionsAbstractSyntaxTreeNode, void, void> {
		const userFunctionsHeaders = Object.values(this.children.functions).map(
			(function_) => {
				return function_.children.header;
			},
		);
		const combinedFunctionsHeaders = [
			...builtInFunctionsHeaders,
			...userFunctionsHeaders,
		];
		for (const mutatedFunctions of combineIndependentGeneratorsInterleaving<FunctionsAbstractSyntaxTreeNode>(
			...Object.values(this.children.functions).map((function_) => {
				const this_ = this;
				return (function* () {
					for (const mutatedFunction of function_.mutate(
						combinedFunctionsHeaders,
					)) {
						const mutatedFunctions = new FunctionsAbstractSyntaxTreeNode(
							{
								functions: {
									...this_.children.functions,
									[mutatedFunction.id]: mutatedFunction,
								},
								mainFunction: this_.children.mainFunction,
							},
							new SpanIndexes(0, 0),
						);
						yield mutatedFunctions;
						for (const deeperMutatedFunctions of mutatedFunctions.mutate(
							builtInFunctionsHeaders,
							maximalUserFunctionsCount,
						)) {
							yield deeperMutatedFunctions;
						}
					}
				})();
			}),
		)) {
			yield mutatedFunctions;
		}
	}
	public *run(
		builtInFunctions: Functions,
	): Generator<SupportedFunctionCallingResult, void, void> {
		const mainFunction = this.children.mainFunction;
		if (mainFunction === null) {
			throw new Error("Main function not found.");
		} else {
			const combinedFunctions: Functions = {
				...builtInFunctions,
				...this.children.functions,
			};
			const executingResults = mainFunction.call(combinedFunctions, []);
			yield* executingResults;
		}
	}
	public stringify(): string {
		return [
			...Object.values(this.children.functions),
			...(this.children.mainFunction === null ?
				[]
			:	[this.children.mainFunction]),
		]
			.map((child) => {
				return `${child.stringify()}\n\n`;
			})
			.join("");
	}
}
