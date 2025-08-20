import type {FunctionBranchConcreteSyntaxTreeNodeChildren} from "./children/FunctionBranchConcreteSyntaxTreeNodeChildren.ts";
import type {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import {BranchConcreteSyntaxTreeNode} from "../../BranchConcreteSyntaxTreeNode.ts";
import {functionBranchConcreteSyntaxTreeNodeTypeName} from "./type-name/functionBranchConcreteSyntaxTreeNodeTypeName.ts";
import {FunctionAbstractSyntaxTreeNode} from "../../../../../abstract-syntax-tree-node/implementations/function/FunctionAbstractSyntaxTreeNode.ts";
import type {FunctionAbstractSyntaxTreeNodeData} from "../../../../../abstract-syntax-tree-node/implementations/function/data/FunctionAbstractSyntaxTreeNodeData.ts";
import {SuccessAbstractifyingResult} from "../../../../abstractifying/result/implementations/success/SuccessAbstractifyingResult.ts";
export class FunctionBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<
	FunctionBranchConcreteSyntaxTreeNodeChildren,
	typeof functionBranchConcreteSyntaxTreeNodeTypeName
> {
	public constructor(
		children: FunctionBranchConcreteSyntaxTreeNodeChildren,
		spanIndexes: SpanIndexes,
	) {
		super(children, spanIndexes, functionBranchConcreteSyntaxTreeNodeTypeName);
	}
	public abstractify(): SuccessAbstractifyingResult<FunctionAbstractSyntaxTreeNodeData> {
		return new SuccessAbstractifyingResult(
			new FunctionAbstractSyntaxTreeNode({id: ""}, this.spanIndexes),
		);
	}
}
