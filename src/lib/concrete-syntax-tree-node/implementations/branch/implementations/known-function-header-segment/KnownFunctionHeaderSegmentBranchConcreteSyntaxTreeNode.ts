import type {KnownFunctionHeaderSegmentBranchConcreteSyntaxTreeNodeChildren} from "./children/KnownFunctionHeaderSegmentBranchConcreteSyntaxTreeNodeChildren.ts";
import {knownFunctionHeaderSegmentBranchConcreteSyntaxTreeNodeTypeName} from "./type-name/knownFunctionHeaderSegmentBranchConcreteSyntaxTreeNodeTypeName.ts";
import {KnownFunctionHeaderSegmentAbstractSyntaxTreeNode} from "../../../../../abstract-syntax-tree-node/implementations/function-header-segment/implementations/known/KnownFunctionHeaderSegmentAbstractSyntaxTreeNode.ts";
import {ErrorAbstractifyingResult} from "../../../../abstractifying/result/implementations/error/ErrorAbstractifyingResult.ts";
import {SuccessAbstractifyingResult} from "../../../../abstractifying/result/implementations/success/SuccessAbstractifyingResult.ts";
import {BranchConcreteSyntaxTreeNode} from "../../BranchConcreteSyntaxTreeNode.ts";
import {whitespaceBranchConcreteSyntaxTreeNodeTypeName} from "../whitespace/type-name/whitespaceBranchConcreteSyntaxTreeNodeTypeName.ts";
export class KnownFunctionHeaderSegmentBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<
	KnownFunctionHeaderSegmentBranchConcreteSyntaxTreeNodeChildren,
	typeof knownFunctionHeaderSegmentBranchConcreteSyntaxTreeNodeTypeName
> {
	public constructor(
		children: KnownFunctionHeaderSegmentBranchConcreteSyntaxTreeNodeChildren,
	) {
		super(
			children,
			knownFunctionHeaderSegmentBranchConcreteSyntaxTreeNodeTypeName,
		);
	}
	public abstractify():
		| ErrorAbstractifyingResult
		| SuccessAbstractifyingResult<KnownFunctionHeaderSegmentAbstractSyntaxTreeNode> {
		if (
			this.children[1] === null
			|| this.children[1].typeName
				=== whitespaceBranchConcreteSyntaxTreeNodeTypeName
		) {
			const result = new ErrorAbstractifyingResult("No variable name.");
			return result;
		} else {
			const knownFunctionHeaderSegmentContentResult =
				this.children[1].abstractify();
			const node = new KnownFunctionHeaderSegmentAbstractSyntaxTreeNode(
				{name: knownFunctionHeaderSegmentContentResult},
				this.computeSpanIndexes(),
			);
			const result = new SuccessAbstractifyingResult(node);
			return result;
		}
	}
}
