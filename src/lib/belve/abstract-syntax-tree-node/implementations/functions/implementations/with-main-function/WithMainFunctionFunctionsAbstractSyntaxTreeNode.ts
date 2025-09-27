import {withMainFunctionFunctionsAbstractSyntaxTreeNodeTypeName} from "./type-name/withMainFunctionFunctionsAbstractSyntaxTreeNodeTypeName.ts";
import type {BuiltInFunction} from "../../../../../../playground/built-in-functions/built-in-function/BuiltInFunction.ts";
import {ErrorAbstractifyingResult} from "../../../../../abstractifying-result/implementations/error/ErrorAbstractifyingResult.ts";
import {SuccessAbstractifyingResult} from "../../../../../abstractifying-result/implementations/success/SuccessAbstractifyingResult.ts";
import type {Function} from "../../../../../function/Function.ts";
import type {SupportedFunctionCallingResult} from "../../../../../function-calling-result/supported/SupportedFunctionCallingResult.ts";
import type {NonMainFunctions} from "../../../../../non-main-functions/NonMainFunctions.ts";
import {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import type {MainFunctionAbstractSyntaxTreeNode} from "../../../function/implementations/main/MainFunctionAbstractSyntaxTreeNode.ts";
import type {NonMainFunctionAbstractSyntaxTreeNode} from "../../../function/implementations/non-main/NonMainFunctionAbstractSyntaxTreeNode.ts";
import {FunctionsAbstractSyntaxTreeNode} from "../../FunctionsAbstractSyntaxTreeNode.ts";
import type {FunctionsAbstractSyntaxTreeNodeChildren} from "../../children/FunctionsAbstractSyntaxTreeNodeChildren.ts";
import type {SupportedFunctionsAbstractSyntaxTreeNode} from "../../supported/SupportedFunctionsAbstractSyntaxTreeNode.ts";
export class WithMainFunctionFunctionsAbstractSyntaxTreeNode extends FunctionsAbstractSyntaxTreeNode<
	MainFunctionAbstractSyntaxTreeNode,
	typeof withMainFunctionFunctionsAbstractSyntaxTreeNodeTypeName
> {
	public constructor(
		children: FunctionsAbstractSyntaxTreeNodeChildren<MainFunctionAbstractSyntaxTreeNode>,
		spanIndexes: SpanIndexes,
	) {
		super(
			children,
			spanIndexes,
			withMainFunctionFunctionsAbstractSyntaxTreeNodeTypeName,
		);
	}
	public override addMainFunction(
		functionToAdd: MainFunctionAbstractSyntaxTreeNode,
	): ErrorAbstractifyingResult {
		const addingMainFunctionResult: ErrorAbstractifyingResult =
			new ErrorAbstractifyingResult(
				`There are multiple main function definitions.`,
			);
		return addingMainFunctionResult;
	}
	public override addNonMainFunction(
		functionToAdd: NonMainFunctionAbstractSyntaxTreeNode,
	):
		| ErrorAbstractifyingResult
		| SuccessAbstractifyingResult<SupportedFunctionsAbstractSyntaxTreeNode> {
		if (functionToAdd.id in this.children.nonMainFunctions) {
			const addingNonMainFunctionResult: ErrorAbstractifyingResult =
				new ErrorAbstractifyingResult(
					`There are multiple functions with the id "${functionToAdd.id}".`,
				);
			return addingNonMainFunctionResult;
		} else {
			const newFunctions = new WithMainFunctionFunctionsAbstractSyntaxTreeNode(
				{
					...this.children,
					nonMainFunctions: {
						...this.children.nonMainFunctions,
						[functionToAdd.id]: functionToAdd,
					},
				},
				new SpanIndexes(functionToAdd.spanIndexes.from, this.spanIndexes.until),
			);
			const addingNonMainFunctionResult: SuccessAbstractifyingResult<WithMainFunctionFunctionsAbstractSyntaxTreeNode> =
				new SuccessAbstractifyingResult<WithMainFunctionFunctionsAbstractSyntaxTreeNode>(
					newFunctions,
				);
			return addingNonMainFunctionResult;
		}
	}
	public *run(
		builtInFunctions: NonMainFunctions<BuiltInFunction>,
	): Generator<SupportedFunctionCallingResult, void, void> {
		const combinedFunctions: NonMainFunctions<Function> = {
			...builtInFunctions,
			...this.children.nonMainFunctions,
		};
		const mainFunctionCallingResults = this.children.mainFunction.call(
			combinedFunctions,
			[],
		);
		for (const mainFunctionCallingResult of mainFunctionCallingResults) {
			const withMainFunctionFunctionsRunningResult: SupportedFunctionCallingResult =
				mainFunctionCallingResult;
			yield withMainFunctionFunctionsRunningResult;
		}
	}
}
