import type {SeparatedFunctionCallSegmentsBranchConcreteSyntaxTreeNodeChildren} from "./children/SeparatedFunctionCallSegmentsBranchConcreteSyntaxTreeNodeChildren.ts";
import {separatedFunctionCallSegmentsBranchConcreteSyntaxTreeNodeTypeName} from "./type-name/separatedFunctionCallSegmentsBranchConcreteSyntaxTreeNodeTypeName.ts";
import type {SupportedFunctionCallSegmentAbstractSyntaxTreeNode} from "../../../../../abstract-syntax-tree-node/implementations/function-call-segment/supported/SupportedFunctionCallSegmentAbstractSyntaxTreeNode.ts";
import type {ErrorAbstractifyingResult} from "../../../../abstractifying/result/implementations/error/ErrorAbstractifyingResult.ts";
import type {SuccessAbstractifyingResult} from "../../../../abstractifying/result/implementations/success/SuccessAbstractifyingResult.ts";
import {BranchConcreteSyntaxTreeNode} from "../../BranchConcreteSyntaxTreeNode.ts";
export class SeparatedFunctionCallSegmentsBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<
	SeparatedFunctionCallSegmentsBranchConcreteSyntaxTreeNodeChildren,
	typeof separatedFunctionCallSegmentsBranchConcreteSyntaxTreeNodeTypeName
> {
	public constructor(
		children: SeparatedFunctionCallSegmentsBranchConcreteSyntaxTreeNodeChildren,
	) {
		super(
			children,
			separatedFunctionCallSegmentsBranchConcreteSyntaxTreeNodeTypeName,
		);
	}
	public abstractify():
		| ErrorAbstractifyingResult
		| SuccessAbstractifyingResult<
				readonly [
					...(readonly SupportedFunctionCallSegmentAbstractSyntaxTreeNode[]),
					SupportedFunctionCallSegmentAbstractSyntaxTreeNode,
				]
		  > {
		const result = this.children[0].abstractify();
		return result;
	}
}
