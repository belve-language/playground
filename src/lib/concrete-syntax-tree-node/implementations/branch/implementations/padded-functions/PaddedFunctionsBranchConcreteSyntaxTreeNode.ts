import type {PaddedFunctionsBranchConcreteSyntaxTreeNodeChildren} from "./children/PaddedFunctionsBranchConcreteSyntaxTreeNodeChildren.ts";
import {paddedFunctionsBranchConcreteSyntaxTreeNodeTypeName} from "./type-name/paddedFunctionsBranchConcreteSyntaxTreeNodeTypeName.ts";
import type {FunctionsAbstractSyntaxTreeNodeData} from "../../../../../abstract-syntax-tree-node/implementations/functions/data/FunctionsAbstractSyntaxTreeNodeData.ts";
import type {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import type {ErrorAbstractifyingResult} from "../../../../abstractifying/result/implementations/error/ErrorAbstractifyingResult.ts";
import {SuccessAbstractifyingResult} from "../../../../abstractifying/result/implementations/success/SuccessAbstractifyingResult.ts";
import {BranchConcreteSyntaxTreeNode} from "../../BranchConcreteSyntaxTreeNode.ts";
export class PaddedFunctionsBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<
	PaddedFunctionsBranchConcreteSyntaxTreeNodeChildren,
	typeof paddedFunctionsBranchConcreteSyntaxTreeNodeTypeName
> {
	public constructor(
		children: PaddedFunctionsBranchConcreteSyntaxTreeNodeChildren,
		spanIndexes: SpanIndexes,
	) {
		super(
			children,
			spanIndexes,
			paddedFunctionsBranchConcreteSyntaxTreeNodeTypeName,
		);
	}
	public abstractify():
		| ErrorAbstractifyingResult
		| SuccessAbstractifyingResult<FunctionsAbstractSyntaxTreeNodeData> {
		return this.children[1].abstractify();
	}
}
