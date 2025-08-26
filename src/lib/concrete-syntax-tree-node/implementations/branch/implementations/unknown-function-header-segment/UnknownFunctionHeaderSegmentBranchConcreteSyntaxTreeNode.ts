import type {UnknownFunctionHeaderSegmentBranchConcreteSyntaxTreeNodeChildren} from "./children/UnknownFunctionHeaderSegmentBranchConcreteSyntaxTreeNodeChildren.ts";
import {unknownFunctionHeaderSegmentBranchConcreteSyntaxTreeNodeTypeName} from "./type-name/unknownFunctionHeaderSegmentBranchConcreteSyntaxTreeNodeTypeName.ts";
import {UnknownFunctionHeaderSegmentAbstractSyntaxTreeNode} from "../../../../../abstract-syntax-tree-node/implementations/function-header-segment/implementations/unknown/UnknownFunctionHeaderSegmentAbstractSyntaxTreeNode.ts";
import {ErrorAbstractifyingResult} from "../../../../abstractifying/result/implementations/error/ErrorAbstractifyingResult.ts";
import {SuccessAbstractifyingResult} from "../../../../abstractifying/result/implementations/success/SuccessAbstractifyingResult.ts";
import {BranchConcreteSyntaxTreeNode} from "../../BranchConcreteSyntaxTreeNode.ts";
import {whitespaceBranchConcreteSyntaxTreeNodeTypeName} from "../whitespace/type-name/whitespaceBranchConcreteSyntaxTreeNodeTypeName.ts";
export class UnknownFunctionHeaderSegmentBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<
	UnknownFunctionHeaderSegmentBranchConcreteSyntaxTreeNodeChildren,
	typeof unknownFunctionHeaderSegmentBranchConcreteSyntaxTreeNodeTypeName
> {
	public constructor(
		children: UnknownFunctionHeaderSegmentBranchConcreteSyntaxTreeNodeChildren,
	) {
		super(
			children,
			unknownFunctionHeaderSegmentBranchConcreteSyntaxTreeNodeTypeName,
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
