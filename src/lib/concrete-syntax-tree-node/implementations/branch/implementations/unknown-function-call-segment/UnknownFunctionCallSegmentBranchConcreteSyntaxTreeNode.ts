import type {UnknownFunctionCallSegmentBranchConcreteSyntaxTreeNodeChildren} from "./children/UnknownFunctionCallSegmentBranchConcreteSyntaxTreeNodeChildren.ts";
import {unknownFunctionCallSegmentBranchConcreteSyntaxTreeNodeTypeName} from "./type-name/unknownFunctionCallSegmentBranchConcreteSyntaxTreeNodeTypeName.ts";
import {UnknownFunctionCallSegmentAbstractSyntaxTreeNode} from "../../../../../abstract-syntax-tree-node/implementations/function-call-segment/implementations/unknown/UnknownFunctionCallSegmentAbstractSyntaxTreeNode.ts";
import {ErrorAbstractifyingResult} from "../../../../abstractifying/result/implementations/error/ErrorAbstractifyingResult.ts";
import {errorAbstractifyingResultTypeName} from "../../../../abstractifying/result/implementations/error/type-name/errorAbstractifyingResultTypeName.ts";
import {SuccessAbstractifyingResult} from "../../../../abstractifying/result/implementations/success/SuccessAbstractifyingResult.ts";
import {successAbstractifyingResultTypeName} from "../../../../abstractifying/result/implementations/success/type-name/successAbstractifyingResultTypeName.ts";
import {BranchConcreteSyntaxTreeNode} from "../../BranchConcreteSyntaxTreeNode.ts";
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
		| SuccessAbstractifyingResult<UnknownFunctionCallSegmentAbstractSyntaxTreeNode> {
		if (this.children[1] === null) {
			const result = new ErrorAbstractifyingResult("No variable name.");
			return result;
		} else {
			const unknownFunctionCallSegmentContentResult =
				this.children[1].abstractify();
			switch (unknownFunctionCallSegmentContentResult.typeName) {
				case errorAbstractifyingResultTypeName: {
					return unknownFunctionCallSegmentContentResult;
				}
				case successAbstractifyingResultTypeName: {
					const node = new UnknownFunctionCallSegmentAbstractSyntaxTreeNode(
						{name: unknownFunctionCallSegmentContentResult.data},
						this.computeSpanIndexes(),
					);
					const result = new SuccessAbstractifyingResult(node);
					return result;
				}
			}
		}
	}
}
