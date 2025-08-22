import type {SeparatedFunctionHeaderSegmentsBranchConcreteSyntaxTreeNodeChildren} from "./children/SeparatedFunctionHeaderSegmentsBranchConcreteSyntaxTreeNodeChildren.ts";
import {separatedFunctionHeaderSegmentsBranchConcreteSyntaxTreeNodeTypeName} from "./type-name/separatedFunctionHeaderSegmentsBranchConcreteSyntaxTreeNodeTypeName.ts";
import type {SupportedFunctionHeaderSegmentAbstractSyntaxTreeNode} from "../../../../../abstract-syntax-tree-node/implementations/function-header-segment/supported/SupportedFunctionHeaderSegmentAbstractSyntaxTreeNode.ts";
import type {ErrorAbstractifyingResult} from "../../../../abstractifying/result/implementations/error/ErrorAbstractifyingResult.ts";
import type {SuccessAbstractifyingResult} from "../../../../abstractifying/result/implementations/success/SuccessAbstractifyingResult.ts";
import {BranchConcreteSyntaxTreeNode} from "../../BranchConcreteSyntaxTreeNode.ts";
export class SeparatedFunctionHeaderSegmentsBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<
	SeparatedFunctionHeaderSegmentsBranchConcreteSyntaxTreeNodeChildren,
	typeof separatedFunctionHeaderSegmentsBranchConcreteSyntaxTreeNodeTypeName
> {
	private constructor(
		children: SeparatedFunctionHeaderSegmentsBranchConcreteSyntaxTreeNodeChildren,
	) {
		super(
			children,
			separatedFunctionHeaderSegmentsBranchConcreteSyntaxTreeNodeTypeName,
		);
	}
	public abstractify():
		| ErrorAbstractifyingResult
		| SuccessAbstractifyingResult<
				readonly [
					...(readonly SupportedFunctionHeaderSegmentAbstractSyntaxTreeNode[]),
					SupportedFunctionHeaderSegmentAbstractSyntaxTreeNode,
				]
		  > {
		const restSegmentsResult = this.children[0].abstractify();
		return restSegmentsResult;
	}
}
