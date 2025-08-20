import type {SeparatedFunctionsBranchConcreteSyntaxTreeNodeChildren} from "./children/SeparatedFunctionsBranchConcreteSyntaxTreeNodeChildren.ts";
import {separatedFunctionsBranchConcreteSyntaxTreeNodeTypeName} from "./type-name/separatedFunctionsBranchConcreteSyntaxTreeNodeTypeName.ts";
import type {FunctionsAbstractSyntaxTreeNodeData} from "../../../../../abstract-syntax-tree-node/implementations/functions/data/FunctionsAbstractSyntaxTreeNodeData.ts";
import type {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import type {ErrorAbstractifyingResult} from "../../../../abstractifying/result/implementations/error/ErrorAbstractifyingResult.ts";
import type {SuccessAbstractifyingResult} from "../../../../abstractifying/result/implementations/success/SuccessAbstractifyingResult.ts";
import {BranchConcreteSyntaxTreeNode} from "../../BranchConcreteSyntaxTreeNode.ts";
export class SeparatedFunctionsBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<
	SeparatedFunctionsBranchConcreteSyntaxTreeNodeChildren,
	typeof separatedFunctionsBranchConcreteSyntaxTreeNodeTypeName
> {
	public constructor(
		children: SeparatedFunctionsBranchConcreteSyntaxTreeNodeChildren,
		spanIndexes: SpanIndexes,
	) {
		super(
			children,
			spanIndexes,
			separatedFunctionsBranchConcreteSyntaxTreeNodeTypeName,
		);
	}
	public abstractify():
		| ErrorAbstractifyingResult
		| SuccessAbstractifyingResult<FunctionsAbstractSyntaxTreeNodeData> {
		return this.children[0].abstractify();
	}
}
