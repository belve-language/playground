import {ErrorAbstractifyingResult} from "../../../../../abstractifying-result/implementations/error/ErrorAbstractifyingResult.ts";
import {SuccessAbstractifyingResult} from "../../../../../abstractifying-result/implementations/success/SuccessAbstractifyingResult.ts";
import {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import type {MainFunctionAbstractSyntaxTreeNode} from "../../../function/implementations/main/MainFunctionAbstractSyntaxTreeNode.ts";
import type {NonMainFunctionAbstractSyntaxTreeNode} from "../../../function/implementations/non-main/NonMainFunctionAbstractSyntaxTreeNode.ts";
import {FunctionsAbstractSyntaxTreeNode} from "../../FunctionsAbstractSyntaxTreeNode.ts";
import type {FunctionsAbstractSyntaxTreeNodeChildren} from "../../children/FunctionsAbstractSyntaxTreeNodeChildren.ts";
import type {SupportedFunctionsAbstractSyntaxTreeNode} from "../../supported/SupportedFunctionsAbstractSyntaxTreeNode.ts";
import {WithMainFunctionFunctionsAbstractSyntaxTreeNode} from "../with-main-function/WithMainFunctionFunctionsAbstractSyntaxTreeNode.ts";
import {withoutMainFunctionFunctionsAbstractSyntaxTreeNodeTypeName} from "./type-name/withoutMainFunctionFunctionsAbstractSyntaxTreeNodeTypeName.ts";
export class WithoutMainFunctionFunctionsAbstractSyntaxTreeNode extends FunctionsAbstractSyntaxTreeNode<
	null,
	typeof withoutMainFunctionFunctionsAbstractSyntaxTreeNodeTypeName
> {
	public constructor(
		children: FunctionsAbstractSyntaxTreeNodeChildren<null>,
		spanIndexes: SpanIndexes,
	) {
		super(
			children,
			spanIndexes,
			withoutMainFunctionFunctionsAbstractSyntaxTreeNodeTypeName,
		);
	}
	public override addMainFunction(
		functionToAdd: MainFunctionAbstractSyntaxTreeNode,
	): SuccessAbstractifyingResult<WithMainFunctionFunctionsAbstractSyntaxTreeNode> {
		const newFunctions = new WithMainFunctionFunctionsAbstractSyntaxTreeNode(
			{
				mainFunction: functionToAdd,
				nonMainFunctions: this.children.nonMainFunctions,
			},
			new SpanIndexes(this.spanIndexes.from, functionToAdd.spanIndexes.until),
		);
		const addingMainFunctionResult: SuccessAbstractifyingResult<WithMainFunctionFunctionsAbstractSyntaxTreeNode> =
			new SuccessAbstractifyingResult<WithMainFunctionFunctionsAbstractSyntaxTreeNode>(
				newFunctions,
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
			const newFunctions: WithoutMainFunctionFunctionsAbstractSyntaxTreeNode =
				new WithoutMainFunctionFunctionsAbstractSyntaxTreeNode(
					{
						...this.children,
						nonMainFunctions: {
							...this.children.nonMainFunctions,
							[functionToAdd.id]: functionToAdd,
						},
					},
					new SpanIndexes(
						functionToAdd.spanIndexes.from,
						this.spanIndexes.until,
					),
				);
			const addingNonMainFunctionResult: SuccessAbstractifyingResult<WithoutMainFunctionFunctionsAbstractSyntaxTreeNode> =
				new SuccessAbstractifyingResult<WithoutMainFunctionFunctionsAbstractSyntaxTreeNode>(
					newFunctions,
				);
			return addingNonMainFunctionResult;
		}
	}
}
