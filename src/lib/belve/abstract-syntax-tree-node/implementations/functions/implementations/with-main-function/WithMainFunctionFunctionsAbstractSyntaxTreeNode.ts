import {withMainFunctionFunctionsAbstractSyntaxTreeNodeTypeName} from "./type-name/withMainFunctionFunctionsAbstractSyntaxTreeNodeTypeName.ts";
import {ErrorAbstractifyingResult} from "../../../../../abstractifying-result/implementations/error/ErrorAbstractifyingResult.ts";
import {SuccessAbstractifyingResult} from "../../../../../abstractifying-result/implementations/success/SuccessAbstractifyingResult.ts";
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
		builtInFunctions: NonMainFunctions,
	): Generator<SupportedFunctionCallingResult, void, void> {
		const mainFunction = this.children.mainFunction;
		const combinedFunctions: NonMainFunctions = {
			...builtInFunctions,
			...this.children.nonMainFunctions,
		};
		const mainFunctionCallingResults = mainFunction.call(combinedFunctions);
		for (const mainFunctionCallingResult of mainFunctionCallingResults) {
			const withMainFunctionFunctionsRunningResult: SupportedFunctionCallingResult =
				mainFunctionCallingResult;
			yield withMainFunctionFunctionsRunningResult;
		}
	}
}
