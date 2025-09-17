import type {FunctionsAbstractSyntaxTreeNodeChildren} from "./children/FunctionsAbstractSyntaxTreeNodeChildren.ts";
import type {SupportedFunctionsAbstractSyntaxTreeNode} from "./supported/SupportedFunctionsAbstractSyntaxTreeNode.ts";
import type {SupportedAbstractifyingResult} from "../../../abstractifying-result/supported/SupportedAbstractifyingResult.ts";
import type {SupportedFunctionCallingResult} from "../../../function-calling-result/supported/SupportedFunctionCallingResult.ts";
import type {NonMainFunctions} from "../../../non-main-functions/NonMainFunctions.ts";
import {SpanIndexes} from "../../../span-indexes/SpanIndexes.ts";
import {AbstractSyntaxTreeNode} from "../../AbstractSyntaxTreeNode.ts";
import type {MainFunctionAbstractSyntaxTreeNode} from "../function/implementations/main/MainFunctionAbstractSyntaxTreeNode.ts";
import type {SupportedFunctionAbstractSyntaxTreeNode} from "../function/supported/SupportedFunctionAbstractSyntaxTreeNode.ts";
export abstract class FunctionsAbstractSyntaxTreeNode<
	MainFunctionAbstractSyntaxTreeNodeToUse extends
		MainFunctionAbstractSyntaxTreeNode | null,
	TypeName extends string,
> extends AbstractSyntaxTreeNode<
	FunctionsAbstractSyntaxTreeNodeChildren<MainFunctionAbstractSyntaxTreeNodeToUse>
> {
	protected constructor(
		children: FunctionsAbstractSyntaxTreeNodeChildren<MainFunctionAbstractSyntaxTreeNodeToUse>,
		spanIndexes: SpanIndexes,
		typeName: TypeName,
	) {
		super(children, spanIndexes);
		this.typeName = typeName;
	}
	public abstract addMainFunction(
		functionToAdd: SupportedFunctionAbstractSyntaxTreeNode,
	): SupportedAbstractifyingResult<SupportedFunctionsAbstractSyntaxTreeNode>;
	public abstract addNonMainFunction(
		functionToAdd: SupportedFunctionAbstractSyntaxTreeNode,
	): SupportedAbstractifyingResult<SupportedFunctionsAbstractSyntaxTreeNode>;
	// TODO
	// public *mutate(
	// 	builtInFunctionsHeaders: readonly FunctionHeaderAbstractSyntaxTreeNode[],
	// 	maximalUserNonMainFunctionsCount: number,
	// ): Generator<FunctionsAbstractSyntaxTreeNode, void, void> {
	// 	// TODO: zrób żeby na pewno po dodaniu funkcji była ona użyta
	// 	for (const mutatedFunctions of combineIndependentGeneratorsInterleaving(
	// 		this.mutateByAddingFunction(
	// 			builtInFunctionsHeaders,
	// 			maximalUserNonMainFunctionsCount,
	// 		),
	// 		this.mutateByMutatingFunction(
	// 			builtInFunctionsHeaders,
	// 			maximalUserNonMainFunctionsCount,
	// 		),
	// 	)) {
	// 		yield mutatedFunctions;
	// 	}
	// }
	// private *mutateByAddingFunction(
	// 	builtInNonMainFunctionsHeaders: readonly FunctionHeaderAbstractSyntaxTreeNode[],
	// 	maximalUserNonMainFunctionsCount: number,
	// ): Generator<FunctionsAbstractSyntaxTreeNode, void, void> {
	// 	const userNonMainFunctions = Object.values(this.children.nonMainFunctions);
	// 	if (userNonMainFunctions.length < maximalUserNonMainFunctionsCount) {
	// 		const userNonMainFunctionsHeaders = userNonMainFunctions.map(
	// 			(function_) => {
	// 				return function_.children.header;
	// 			},
	// 		);
	// 		const combinedNonMainFunctionsHeaders = [
	// 			...builtInNonMainFunctionsHeaders,
	// 			...userNonMainFunctionsHeaders,
	// 		];
	// 		const this_ = this;
	// 		// TODO
	// 		throw new Error("Not implemented: mutateByAddingFunction");
	// 		// for (const mutatedFunctions of combineDependentGeneratorsProducting(
	// 		// 	generateNewNonMainFunction(combinedNonMainFunctionsHeaders),
	// 		// 	function* (newNonMainFunction) {
	// 		// 		const mutatedFunctions = new FunctionsAbstractSyntaxTreeNode(
	// 		// 			{
	// 		// 				...this_.children,
	// 		// 				nonMainFunctions: {
	// 		// 					...this_.children.nonMainFunctions,
	// 		// 					[newNonMainFunction.id]: newNonMainFunction,
	// 		// 				},
	// 		// 			},
	// 		// 			new SpanIndexes(0, 0),
	// 		// 		);
	// 		// 		yield mutatedFunctions;
	// 		// 		for (const deeperMutatedFunctions of mutatedFunctions.mutate(
	// 		// 			builtInFunctionsHeaders,
	// 		// 			maximalUserNonMainFunctionsCount,
	// 		// 		)) {
	// 		// 			yield deeperMutatedFunctions;
	// 		// 		}
	// 		// 	},
	// 		// )) {
	// 		// 	yield mutatedFunctions;
	// 		// }
	// 	}
	// }
	// public *mutateByMutatingFunction(
	// 	builtInNonMainFunctionsHeaders: readonly FunctionHeaderAbstractSyntaxTreeNode[],
	// 	maximalUserNonMainFunctionsCount: number,
	// ): Generator<FunctionsAbstractSyntaxTreeNode, void, void> {
	// 	const userNonMainFunctions = Object.values(this.children.nonMainFunctions);
	// 	const userNonMainFunctionsHeaders = userNonMainFunctions.map(
	// 		(function_) => {
	// 			return function_.children.header;
	// 		},
	// 	);
	// 	const combinedNonMainFunctionsHeaders = [
	// 		...builtInNonMainFunctionsHeaders,
	// 		...userNonMainFunctionsHeaders,
	// 	];
	// 	const this_ = this;
	// 	for (const mutatedFunctions of combineIndependentGeneratorsInterleaving<FunctionsAbstractSyntaxTreeNode>(
	// 		...Object.values(this.children.nonMainFunctions).map((function_) => {
	// 			return (function* () {
	// 				for (const mutatedFunction of function_.mutate(
	// 					combinedNonMainFunctionsHeaders,
	// 				)) {
	// 					const mutatedFunctions = new FunctionsAbstractSyntaxTreeNode(
	// 						{
	// 							...this_.children,
	// 							nonMainFunctions: {
	// 								...this_.children.nonMainFunctions,
	// 								[mutatedFunction.id]: mutatedFunction,
	// 							},
	// 						},
	// 						new SpanIndexes(0, 0),
	// 					);
	// 					yield mutatedFunctions;
	// 					for (const deeperMutatedFunctions of mutatedFunctions.mutate(
	// 						builtInNonMainFunctionsHeaders,
	// 						maximalUserNonMainFunctionsCount,
	// 					)) {
	// 						yield deeperMutatedFunctions;
	// 					}
	// 				}
	// 			})();
	// 		}),
	// 	)) {
	// 		yield mutatedFunctions;
	// 	}
	// }
	// public *run(
	// 	builtInFunctions: NonMainFunctions,
	// ): Generator<SupportedFunctionCallingResult, void, void> {
	// 	const mainFunction = this.children.mainFunction;
	// 	if (mainFunction !== null) {
	// 		const combinedFunctions: NonMainFunctions = {
	// 			...builtInFunctions,
	// 			...this.children.nonMainFunctions,
	// 		};
	// 		const callingResults = mainFunction.call(combinedFunctions, []);
	// 		for (const callingResult of callingResults) {
	// 			yield callingResult;
	// 		}
	// 	}
	// }
	public abstract run(
		builtInFunctions: NonMainFunctions,
	): Generator<SupportedFunctionCallingResult, void, void>;
	public readonly typeName: TypeName;
}
