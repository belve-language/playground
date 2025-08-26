import type {KnownFunctionCallSegmentBranchConcreteSyntaxTreeNodeChildren} from "./children/KnownFunctionCallSegmentBranchConcreteSyntaxTreeNodeChildren.ts";
import {knownFunctionCallSegmentBranchConcreteSyntaxTreeNodeTypeName} from "./type-name/knownFunctionCallSegmentBranchConcreteSyntaxTreeNodeTypeName.ts";
import {KnownFunctionCallSegmentAbstractSyntaxTreeNode} from "../../../../../abstract-syntax-tree-node/implementations/function-call-segment/implementations/known/KnownFunctionCallSegmentAbstractSyntaxTreeNode.ts";
import {ErrorAbstractifyingResult} from "../../../../abstractifying/result/implementations/error/ErrorAbstractifyingResult.ts";
import {SuccessAbstractifyingResult} from "../../../../abstractifying/result/implementations/success/SuccessAbstractifyingResult.ts";
import {BranchConcreteSyntaxTreeNode} from "../../BranchConcreteSyntaxTreeNode.ts";
import {whitespaceBranchConcreteSyntaxTreeNodeTypeName} from "../whitespace/type-name/whitespaceBranchConcreteSyntaxTreeNodeTypeName.ts";
export class KnownFunctionCallSegmentBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<
	KnownFunctionCallSegmentBranchConcreteSyntaxTreeNodeChildren,
	typeof knownFunctionCallSegmentBranchConcreteSyntaxTreeNodeTypeName
> {
	public constructor(
		children: KnownFunctionCallSegmentBranchConcreteSyntaxTreeNodeChildren,
	) {
		super(
			children,
			knownFunctionCallSegmentBranchConcreteSyntaxTreeNodeTypeName,
		);
	}
	public abstractify():
		| ErrorAbstractifyingResult
		| SuccessAbstractifyingResult<KnownFunctionCallSegmentAbstractSyntaxTreeNode> {
		if (
			this.children[1] === null
			|| this.children[1].typeName
				=== whitespaceBranchConcreteSyntaxTreeNodeTypeName
		) {
			const result = new ErrorAbstractifyingResult("Missing name.");
			return result;
		} else {
			const knownFunctionCallSegmentContentResult =
				this.children[1].abstractify();
			const node = new KnownFunctionCallSegmentAbstractSyntaxTreeNode(
				{name: knownFunctionCallSegmentContentResult},
				this.computeSpanIndexes(),
			);
			const result =
				new SuccessAbstractifyingResult<KnownFunctionCallSegmentAbstractSyntaxTreeNode>(
					node,
				);
			return result;
		}
	}
}
