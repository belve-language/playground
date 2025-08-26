import type {UnknownFunctionCallSegmentBranchConcreteSyntaxTreeNodeChildren} from "./children/UnknownFunctionCallSegmentBranchConcreteSyntaxTreeNodeChildren.ts";
import {UnknownFunctionHeaderSegmentAbstractSyntaxTreeNode} from "../../../../../abstract-syntax-tree-node/implementations/function-header-segment/implementations/unknown/UnknownFunctionHeaderSegmentAbstractSyntaxTreeNode.ts";
import {ErrorAbstractifyingResult} from "../../../../abstractifying/result/implementations/error/ErrorAbstractifyingResult.ts";
import {SuccessAbstractifyingResult} from "../../../../abstractifying/result/implementations/success/SuccessAbstractifyingResult.ts";
import {BranchConcreteSyntaxTreeNode} from "../../BranchConcreteSyntaxTreeNode.ts";
import {unknownFunctionCallSegmentBranchConcreteSyntaxTreeNodeTypeName} from "./type-name/unknownFunctionCallSegmentBranchConcreteSyntaxTreeNodeTypeName.ts";
import {whitespaceBranchConcreteSyntaxTreeNodeTypeName} from "../whitespace/type-name/whitespaceBranchConcreteSyntaxTreeNodeTypeName.ts";
export class UnknownFunctionCallSegmentBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<
	UnknownFunctionCallSegmentBranchConcreteSyntaxTreeNodeChildren,
	typeof unknownFunctionCallSegmentBranchConcreteSyntaxTreeNodeTypeName
> {
	public constructor(
		children: UnknownFunctionCallSegmentBranchConcreteSyntaxTreeNodeChildren,
	) {
		super(
			children,
			unknownFunctionCallSegmentBranchConcreteSyntaxTreeNodeTypeName,
		);
	}
	public abstractify():
		| ErrorAbstractifyingResult
		| SuccessAbstractifyingResult<UnknownFunctionHeaderSegmentAbstractSyntaxTreeNode> {
		if (
			this.children[1] === null
			|| this.children[1].typeName
				=== whitespaceBranchConcreteSyntaxTreeNodeTypeName
		) {
			const result = new ErrorAbstractifyingResult("No variable name.");
			return result;
		} else {
			const unknownFunctionHeaderSegmentContentResult =
				this.children[1].abstractify();
			const node = new UnknownFunctionHeaderSegmentAbstractSyntaxTreeNode(
				{name: unknownFunctionHeaderSegmentContentResult},
				this.computeSpanIndexes(),
			);
			const result = new SuccessAbstractifyingResult(node);
			return result;
		}
	}
}
